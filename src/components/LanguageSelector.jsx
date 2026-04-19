import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check, X, Loader } from 'lucide-react';

const LANGUAGES = [
    { code: 'vi', label: 'Tiếng Việt', category: 'common' },
    { code: 'en', label: 'English', category: 'common' },
    { code: 'zh', label: '中文 (简体)', category: 'common' },
    { code: 'ja', label: '日本語', category: 'common' },
    { code: 'ko', label: '한국어', category: 'common' },
    { code: 'es', label: 'Español', category: 'common' },
    { code: 'fr', label: 'Français', category: 'common' },
    { code: 'it', label: 'Italiano', category: 'common' },
    { code: 'ru', label: 'Русский', category: 'common' },
    { code: 'pt-BR', label: 'Português (Brasil)', category: 'common' },
    { code: 'en-Tiktok', label: 'English (TikTok)', category: 'others' },
    { code: 'en-Miku', label: 'English (Miku)', category: 'others' },
    { code: 'ja-Miku', label: '日本語 (MIKU)', category: 'others' },
    { code: 'ko-Miku', label: '한국어 (Miku)', category: 'others' },
    { code: 'vi-Miku', label: 'Tiếng Việt (Miku)', category: 'others' },
    { code: 'vi-NamBo', label: 'Tiếng Việt (Nam Bộ)', category: 'others' },
    { code: 'vi-NgheAn', label: 'Tiếng Việt (Nghệ An)', category: 'others' },
    { code: 'vi-BinhDuong', label: 'Tiếng Việt (Bình Dương)', category: 'others' },
];

const COMMON_LANGS = LANGUAGES.filter(l => l.category === 'common');
const OTHER_LANGS = LANGUAGES.filter(l => l.category === 'others');

const LangButton = ({ lang, isActive, loading, changeLanguage }) => {
    return (
        <button
            onClick={() => changeLanguage(lang.code)}
            disabled={loading !== null}
            className={`lang-button group ${isActive ? 'lang-button-active' : 'lang-button-inactive'}`}
        >
            <span className={`font-bold text-base uppercase tracking-tight`}>
                {lang.label}
            </span>
            {loading === lang.code ? (
                <Loader size={16} className="animate-spin" />
            ) : (
                isActive && <Check size={16} />
            )}
        </button>
    );
};

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [loading, setLoading] = useState(null);

    const changeLanguage = async (code) => {
        setLoading(code);
        try {
            document.documentElement.lang = code;
            await i18n.changeLanguage(code);
            const url = new URL(window.location);
            url.searchParams.set('lang', code);
            window.history.pushState({}, '', url);
            setIsOpen(false);
        } catch (err) {
            console.error('Language switch failed:', err);
        } finally {
            setLoading(null);
        }
    };

    const currentLanguage = i18n.language || 'en';

    return (
        <div className="inline-block">
            {/* Plain Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="lang-trigger"
            >
                {currentLanguage.split('-')[0]}
            </button>

            {/* Full Screen Overlay */}
            {isOpen && (
                <div className="lang-modal-overlay animate-in fade-in">
                    <div
                        className="absolute inset-0 z-0"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="lang-modal-content">
                        {/* Header */}
                        <div className="px-5 py-3 bg-(--discord-bg-darker) border-b border-(--discord-bg-darkest) flex items-center justify-between">
                            <h2 className="text-white font-black text-xl flex items-center space-x-3">
                                <Globe size={24} className="text-(--discord-brand)" />
                                <span className="tracking-tight">LANGUAGE</span>
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-(--discord-text-muted) hover:text-white transition-colors p-2 hover:bg-white/5"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                                {/* Left Column: Standard Languages */}
                                <div className="flex flex-col">
                                    <div className="text-xs font-bold text-(--discord-brand) uppercase tracking-[0.2em] mb-4 px-1">
                                        Standard Languages
                                    </div>
                                    <div className="grid grid-cols-1 gap-1">
                                        {COMMON_LANGS.map((lang) => (
                                            <LangButton
                                                key={lang.code}
                                                lang={lang}
                                                isActive={currentLanguage.toLowerCase() === lang.code.toLowerCase()}
                                                loading={loading}
                                                changeLanguage={changeLanguage}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column: Special Versions */}
                                <div className="flex flex-col border-t md:border-t-0 md:border-l border-(--discord-bg-darkest) pt-8 md:pt-0 md:pl-8">
                                    <div className="flex items-center justify-between mb-4 px-1">
                                        <div className="text-xs font-bold text-(--discord-text-muted) uppercase tracking-[0.2em]">
                                            Special & Meme Versions
                                        </div>
                                    </div>

                                    {!isUnlocked ? (
                                        <div className="flex-1 flex flex-col items-center justify-center bg-(--discord-bg-darkest) border border-dashed border-(--discord-border) text-center min-h-50 rounded-none">
                                            <p className="text-sm text-(--discord-text-muted) mb-6 italic px-4">
                                                These versions are experimental and may contain community-driven content, non-standard dialects, or legacy translations. Accuracy and stability are not guaranteed.
                                            </p>
                                            <button
                                                onClick={() => setIsUnlocked(true)}
                                                className="bg-(--discord-bg-darker) hover:bg-(--discord-bg-hover) text-white px-5 py-2.5 border border-(--discord-border) font-bold text-xs transition-all rounded-none uppercase tracking-widest"
                                            >
                                                Show Full List
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 gap-1">
                                            {OTHER_LANGS.map((lang) => (
                                                <LangButton
                                                    key={lang.code}
                                                    lang={lang}
                                                    isActive={currentLanguage.toLowerCase() === lang.code.toLowerCase()}
                                                    loading={loading}
                                                    changeLanguage={changeLanguage}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
