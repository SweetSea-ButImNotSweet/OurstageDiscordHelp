import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import './style.css';

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

    document.documentElement.lang = i18next.language;
    window.i18nDone = true;
    console.log('i18n complete');
}

document.addEventListener('DOMContentLoaded', initI18n);
