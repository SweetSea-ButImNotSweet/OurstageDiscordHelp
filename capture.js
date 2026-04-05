import puppeteer from 'puppeteer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * CONFIGURATION
 * Optimized for speed and "Real" Multithreading
 */
const CONFIG = {
    targetFile: 'index.html',
    outputDir: 'output',
    languages: ['vi', 'en', 'ko', 'es', 'zh', 'pt-BR', 'ja', 'vi-NA', 'vi-MT'],
    viewport: {
        width: 1500,
        height: 1500,
        deviceScaleFactor: 2,
    },
    quality: 80,
    concurrency: 4
};

// ==========================================
// WORKER THREAD LOGIC (Image Processing)
// ==========================================
if (!isMainThread) {
    const { buffer, outputFile, quality, lang } = workerData;

    async function processImage() {
        const start = Date.now();
        try {
            // Buffer transfer is efficient in Node.js worker_threads
            await sharp(Buffer.from(buffer))
                .gif({
                    quality,
                    loop: 0,
                })
                .toFile(outputFile);

            const duration = ((Date.now() - start) / 1000).toFixed(1);
            parentPort.postMessage({ success: true, lang, duration });
        } catch (err) {
            parentPort.postMessage({ success: false, lang, error: err.message });
        }
    }

    processImage();
}
// ==========================================
// MAIN THREAD LOGIC (Puppeteer Orchestration)
// ==========================================
else {
    /**
     * PROCESS A SINGLE LANGUAGE
     */
    async function processLanguage(lang, browser) {
        const langCode = lang.toUpperCase();
        console.log(`🚀 [${langCode}] Starting lifecycle...`);
        const startTime = Date.now();

        const page = await browser.newPage();

        // Log console messages from the browser
        page.on('console', msg => console.log(`  [BROWSER ${langCode}]`, msg.text()));
        page.on('error', err => console.error(`  [ERROR ${langCode}]`, err.message));

        await page.setViewport({
            width: CONFIG.viewport.width,
            height: 1000,
            deviceScaleFactor: CONFIG.viewport.deviceScaleFactor
        });

        const baseUrl = process.env.BASE_URL || 'http://localhost:5173';
        const filePath = `${baseUrl}/?lang=${lang}`;

        console.log(`  [${langCode}] 📡 Navigating...`);
        try {
            await page.goto(filePath, {
                waitUntil: 'networkidle2',
                timeout: 60000
            });
        } catch (e) {
            console.error(`❌ [${langCode}] Navigation failed: ${e.message}`);
            await page.close();
            return;
        }

        console.log(`  [${langCode}] ⏳ Waiting for i18n...`);
        await page.waitForFunction(() => window.i18nDone === true, { timeout: 15000 });

        console.log(`  [${langCode}] 📏 Calculating height...`);
        const bodyHeight = await page.evaluate(() => {
            return Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
            );
        });

        await page.setViewport({
            width: CONFIG.viewport.width,
            height: bodyHeight,
            deviceScaleFactor: CONFIG.viewport.deviceScaleFactor
        });

        console.log(`  [${langCode}] 📸 Taking screenshot (${bodyHeight}px)...`);
        const buffer = await page.screenshot({
            fullPage: true,
            type: 'png',
        });

        const snapTime = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`  [${langCode}] ✨ Screenshot captured in ${snapTime}s.`);

        // Close page early to free up browser memory
        await page.close();

        const outputFile = path.join(CONFIG.outputDir, `guide_${lang}.gif`);
        console.log(`  [${langCode}] 🧵 Offloading conversion to Worker Thread...`);

        // Spawn a Worker Thread to handle the heavy GIF processing
        return new Promise((resolve, reject) => {
            const worker = new Worker(__filename, {
                workerData: {
                    buffer,
                    outputFile,
                    quality: CONFIG.quality,
                    lang
                }
            });

            worker.on('message', (msg) => {
                if (msg.success) {
                    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
                    console.log(`✅ [${langCode}] DONE! Processed in ${totalTime}s (GIF encoding: ${msg.duration}s).`);
                    resolve();
                } else {
                    reject(new Error(`[${lang}] Worker failed: ${msg.error}`));
                }
            });

            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) reject(new Error(`Worker stopped with code ${code}`));
            });
        });
    }

    /**
     * MAIN CAPTURE FUNCTION
     */
    async function capture() {
        const args = process.argv.slice(2);
        const langArg = args.find(a => a.startsWith('--lang='))?.split('=')[1];
        const languages = langArg ? [langArg] : [...CONFIG.languages];

        const concurrency = langArg ? 1 : CONFIG.concurrency;
        console.log(`🔥 Starting OPTIMIZED Multithreaded Capture (Slots: ${concurrency}, Scale: ${CONFIG.viewport.deviceScaleFactor}x)`);

        if (!fs.existsSync(CONFIG.outputDir)) {
            fs.mkdirSync(CONFIG.outputDir);
        }

        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--allow-file-access-from-files', '--disable-gpu', '--disable-dev-shm-usage']
        });

        const queue = [...languages];
        const runningWorkers = [];

        const workerLogic = async (workerId) => {
            while (queue.length > 0) {
                const lang = queue.shift();
                try {
                    await processLanguage(lang, browser);
                } catch (err) {
                    console.error(`❌ Global error for [${lang.toUpperCase()}]:`, err.message);
                }
            }
        };

        // Start concurrency slots
        const slots = Math.min(concurrency, languages.length);
        for (let i = 0; i < slots; i++) {
            // Tiny delay between workers to stagger CPU spikes
            if (i > 0) await new Promise(r => setTimeout(r, 1000));
            runningWorkers.push(workerLogic(i + 1));
        }

        await Promise.all(runningWorkers);

        await browser.close();
        console.log(`🏁 All batch exports finished! Check the ${CONFIG.outputDir} folder.`);
    }

    capture().catch(err => {
        console.error('❌ FATAL ERROR:', err);
        process.exit(1);
    });
}
