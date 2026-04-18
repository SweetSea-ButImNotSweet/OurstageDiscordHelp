import React from 'react';
import { createRoot } from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import { createIcons, Smile, X, AlertTriangle, Info, MapPinOff, Keyboard, ScanText, Hash, Quote, Space, Globe2, Minus, CopyX, Frown, Scissors, UserX, FileText, Magnet, Type } from 'lucide';
import '../style.css';
import App from './App.jsx';

const SUPPORTED_LANGS = [
    'vi', 'en', 'zh', 'ja', 'ko', 'es', 'fr', 'it', 'ru', 'pt', 'pt-BR',
    // 'pt' is here but without pt.json because of language hierarchy, I hate this
    'en-Tiktok', 'en-Miku',
    'ja-Miku', 'ko-Miku',
    'vi-Miku', 'vi-NamBo', 'vi-NgheAn', 'vi-BinhDuong',
];

const resolveLanguageCode = (input = '') => {
    const normalized = String(input).trim().toLowerCase()
    if (normalized) {
        const lang = SUPPORTED_LANGS.find(code => code.toLowerCase() === normalized) || 'en';
        console.log("Check biến lang trước khi init:", lang);
        return lang;
    }
    console.log("Invalid language detected!")
    return 'en';
};

const urlParams = new URLSearchParams(window.location.search);
const lang = resolveLanguageCode(urlParams.get('lang') || 'vi');

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        lng: 'pt-BR',
        fallbackLng: {
            'pt': ['pt-BR', 'en'],
            'default': ['en']
        },
        supportedLngs: SUPPORTED_LANGS,
        nonExplicitSupportedLngs: true,
        partialBundledLanguages: true,
        backend: {
            loadPath: (lngs) => {
                const requested = Array.isArray(lngs) ? lngs[0] : lngs;
                console.log(`[i18n Debug] Backend requested: ${requested}`);
                const resolved = resolveLanguageCode(requested);
                const path = `${import.meta.env.BASE_URL}locales/${resolved}.json`;
                console.log(`[i18n] Fetching: ${requested} => ${path}`);
                return path;
            },
        },
        interpolation: {
            escapeValue: false
        }
    })
    .then(() => {
        // Set the HTML lang attribute dynamically
        document.documentElement.lang = i18n.language;
        // Initialize simple Lucide vanilla icons for any non-react parts if needed,
        // though we will migrate to lucide-react soon.
        createIcons({
            icons: {
                Smile,
                X,
                AlertTriangle,
                Info,
                MapPinOff,
                Keyboard,
                ScanText,
                Hash,
                Quote,
                Space,
                Globe2,
                Minus,
                CopyX,
                Frown,
                Scissors,
                UserX,
                FileText,
                Magnet,
                Type
            }
        });

        window.i18nDone = true; // Still flag for puppeteer script
        console.log('i18n complete');

        createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    });
