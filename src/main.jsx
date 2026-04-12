import React from 'react';
import { createRoot } from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import { createIcons, Smile, X, AlertTriangle, Info, MapPinOff, Keyboard, ScanText, Hash, Quote, Space, Globe2, Minus, CopyX, Frown, Scissors, UserX, FileText, Magnet, Type } from 'lucide';
import '../style.css';
import App from './App.jsx';

const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || 'vi';

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        lng: lang,
        fallbackLng: 'en',
        backend: {
            loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}.json`,
        },
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
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
