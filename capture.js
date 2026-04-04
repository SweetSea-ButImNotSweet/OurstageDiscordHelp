const puppeteer = require('puppeteer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

/**
 * CONFIGURATION
 * Edit these values as needed.
 */
const CONFIG = {
    targetFile: 'index.html',
    outputDir: 'output',
    languages: ['vi', 'en', 'ja', 'ko', 'es', 'zh'],
    viewport: {
        width: 1500,
        height: 1100,
        deviceScaleFactor: 2,
    },
    quality: 80,
};

async function capture() {
    const args = process.argv.slice(2);
    const langArg = args.find(a => a.startsWith('--lang='))?.split('=')[1];
    const languages = langArg ? [langArg] : CONFIG.languages;

    console.log(`🚀 Starting ${langArg ? 'single' : 'batch'} capture process...`);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir);
    }

    // Launch puppeteer
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--allow-file-access-from-files'] // Try to allow file access
    });

    for (const lang of languages) {
        console.log(`🌐 Capturing language: ${lang.toUpperCase()}`);
        
        const page = await browser.newPage();
        
        // Log console messages from the browser
        page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
        
        // Set fixed width, initial height doesn't matter much as we will update it
        await page.setViewport({
            width: CONFIG.viewport.width,
            height: 1000,
            deviceScaleFactor: CONFIG.viewport.deviceScaleFactor
        });

        // Resolve absolute path with lang query param
        const filePath = 'file://' + path.resolve(__dirname, CONFIG.targetFile) + `?lang=${lang}`;

        console.log(`📡 Navigating to: ${filePath}`);
        await page.goto(filePath, {
            waitUntil: 'load',
            timeout: 60000
        });

        // Wait for i18n script to signal readiness
        await page.waitForFunction(() => window.i18nDone === true, { timeout: 10000 });

        // DYNAMICALY ADJUST HEIGHT
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
        
        console.log(`📏 Dynamic height detected: ${bodyHeight}px`);
        await page.setViewport({
            width: CONFIG.viewport.width,
            height: bodyHeight,
            deviceScaleFactor: CONFIG.viewport.deviceScaleFactor
        });

        console.log(`📸 Taking screenshot for ${lang}...`);
        const buffer = await page.screenshot({
            fullPage: true,
            type: 'png',
        });

        const outputFile = path.join(CONFIG.outputDir, `guide_${lang}.gif`);
        console.log(`🔄 Converting to GIF: ${outputFile}`);

        await sharp(buffer)
            .gif({
                quality: CONFIG.quality,
                loop: 0,
            })
            .toFile(outputFile);

        await page.close();
        console.log(`✅ Success! [${lang}] exported.`);
    }

    await browser.close();
    console.log('🏁 Batch capture complete!');
}

capture().catch(err => {
    console.error('❌ Error during capture:', err);
    process.exit(1);
});
