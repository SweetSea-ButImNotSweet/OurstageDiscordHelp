import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export function T({ i18nKey, args = {}, className = "", as: Component = "span" }) {
    const { t } = useTranslation();

    // Translate args if they refer to other keys
    const translatedArgs = { ...args };
    for (const key in translatedArgs) {
        if (typeof translatedArgs[key] === 'string' && i18next.exists(translatedArgs[key])) {
            translatedArgs[key] = t(translatedArgs[key]);
        }
    }

    let text = t(i18nKey, translatedArgs);
    if (!text) return null;

    text = text
        .replace(/<cmd>(.*?)<\/cmd>/g, '<span class="i18n-cmd">$1</span>')
        .replace(/<id>(.*?)<\/id>/g, '<span class="i18n-id">$1</span>')
        .replace(/<loc>(.*?)<\/loc>/g, '<span class="i18n-loc">$1</span>');

    return <Component className={className} dangerouslySetInnerHTML={{ __html: text }} />;
}
