import React, { useState } from 'react';
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

    const renderLanguageButton = (lang, isSpecial = false) => {
        const isActive = i18n.language && i18n.language.toLowerCase() === lang.code.toLowerCase();
        return (
            <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                disabled={loading !== null}
                className={`text-left px-4 py-3 flex items-center justify-between transition-all group border disabled:opacity-60 ${isActive
                    ? 'bg-[#5865f2] border-[#5865f2] text-white shadow-lg'
                    : 'bg-[#1e1f22] border-[#1e1f22] text-gray-300 hover:bg-[#35373c] hover:border-[#404249] hover:text-white'
                    } rounded-none`}
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

    return (
        <div className="inline-block">
            {/* Plain Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-[#5865f2] px-3 py-1 rounded font-black text-sm uppercase text-white hover:bg-[#4752c4] transition-colors shadow-sm focus:outline-none"
            >
                {i18n.language.split('-')[0]}
            </button>

            {/* Full Screen Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#000000cc] backdrop-blur-md animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 z-0"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="relative z-10 w-full max-w-3xl mx-4 bg-[#313338] border border-[#1e1f22] rounded-none shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Header */}
                        <div className="px-5 py-3 bg-[#2b2d31] border-b border-[#1e1f22] flex items-center justify-between">
                            <h2 className="text-white font-black text-xl flex items-center space-x-3">
                                <Globe size={24} className="text-[#5865f2]" />
                                <span className="tracking-tight">LANGUAGE</span>
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                                {/* Left Column: Standard Languages */}
                                <div className="flex flex-col">
                                    <div className="text-xs font-bold text-[#5865f2] uppercase tracking-[0.2em] mb-4 px-1">
                                        Standard Languages
                                    </div>
                                    <div className="grid grid-cols-1 gap-1">
                                        {COMMON_LANGS.map((lang) => renderLanguageButton(lang))}
                                    </div>
                                </div>

                                {/* Right Column: Special Versions */}
                                <div className="flex flex-col border-t md:border-t-0 md:border-l border-[#1e1f22] pt-8 md:pt-0 md:pl-8">
                                    <div className="flex items-center justify-between mb-4 px-1">
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
                                            Special & Meme Versions
                                        </div>
                                    </div>

                                    {!isUnlocked ? (
                                        <div className="flex-1 flex flex-col items-center justify-center bg-[#1e1f22] border border-dashed border-[#404249] text-center min-h-50 rounded-none">
                                            <p className="text-sm text-gray-400 mb-6 italic px-4">
                                                These versions are experimental and may contain community-driven content, non-standard dialects, or legacy translations. Accuracy and stability are not guaranteed.
                                            </p>
                                            <button
                                                onClick={() => setIsUnlocked(true)}
                                                className="bg-[#2b2d31] hover:bg-[#35373c] text-white px-5 py-2.5 border border-[#404249] font-bold text-xs transition-all rounded-none uppercase tracking-widest"
                                            >
                                                Show Full List
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 gap-1">
                                            {OTHER_LANGS.map((lang) => renderLanguageButton(lang, true))}
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
