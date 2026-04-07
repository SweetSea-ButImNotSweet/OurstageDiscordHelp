import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { createIcons, Smile, X } from 'lucide';
import './style.css';

const CHAT_BAR_RIGHT_ICONS = `
    <div class="discord-chat-bar-icon">
        <img src="/icons/discord/gift.svg" class="w-6 h-6" alt="Gift">
    </div>
    <div class="discord-chat-bar-icon">
        <img src="/icons/discord/gif.svg" class="w-6 h-6" alt="GIF">
    </div>
    <div class="discord-chat-bar-icon">
        <img src="/icons/discord/sticker.svg" class="w-6 h-6" alt="Sticker">
    </div>
    <div class="discord-chat-bar-icon">
        <i data-lucide="smile" class="w-6 h-6"></i>
    </div>
    <div class="discord-chat-bar-icon">
        <img src="/icons/discord/app.svg" class="w-6 h-6" alt="App Launcher">
    </div>
`;

function renderChatBarIcons() {
    const containers = document.querySelectorAll('[data-icons-group="right"]');
    containers.forEach(container => {
        container.innerHTML = CHAT_BAR_RIGHT_ICONS;
    });
}

async function initI18n() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'vi';

    await i18next
        .use(HttpBackend)
        .init({
            lng: lang,
            fallbackLng: 'en',
            backend: {
                loadPath: '/locales/{{lng}}.json',
            },
        });

    render();
}

function render() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const argsStr = el.getAttribute('data-i18n-args');
        let args = {};

        if (argsStr) {
            try {
                args = JSON.parse(argsStr);
                // Recursively translate arg values if they match a key
                for (let k in args) {
                    if (typeof args[k] === 'string' && i18next.exists(args[k])) {
                        args[k] = i18next.t(args[k]);
                    }
                }
            } catch (e) {
                console.error('Error parsing i18n args', e);
            }
        }

        let translated = i18next.t(key, args);

        // Process our custom semantic tags
        // <cmd> -> <span class="i18n-cmd">
        // <id> -> <span class="i18n-id">
        // <loc> -> <span class="i18n-loc">
        translated = translated
            .replace(/<cmd>(.*?)<\/cmd>/g, '<span class="i18n-cmd">$1</span>')
            .replace(/<id>(.*?)<\/id>/g, '<span class="i18n-id">$1</span>')
            .replace(/<loc>(.*?)<\/loc>/g, '<span class="i18n-loc">$1</span>');

        if (translated.includes('<')) {
            el.innerHTML = translated;
        } else {
            el.textContent = translated;
        }
    });

    renderChatBarIcons();

    window.i18nDone = true;
    console.log('i18n complete');

    // Initialize Lucide icons
    createIcons({
        icons: {
            Smile,
            X
        }
    });
}

document.addEventListener('DOMContentLoaded', initI18n);
