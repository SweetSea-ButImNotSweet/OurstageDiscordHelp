import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Lock, Unlock, ChevronDown, Check } from 'lucide-react';

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
    { code: 'en-tiktok', label: 'English (TikTok)', category: 'others' },
    { code: 'en-miku', label: 'English (Miku)', category: 'others' },
    { code: 'ja-miku', label: '日本語 (MIKU)', category: 'others' },
    { code: 'ko-miku', label: '한국어 (Miku)', category: 'others' },
    { code: 'vi-miku', label: 'Tiếng Việt (Miku)', category: 'others' },
    { code: 'vi-NamBo', label: 'Tiếng Việt (Nam Bộ)', category: 'others' },
    { code: 'vi-NgheAn', label: 'Tiếng Việt (Nghệ An)', category: 'others' },
    { code: 'vi-BinhDuong', label: 'Tiếng Việt (Bình Dương)', category: 'others' },
];

const UNLOCK_PHRASE = "I'm sure that I want to see these options";

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [unlockInput, setUnlockInput] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);

    useEffect(() => {
        if (unlockInput === UNLOCK_PHRASE) {
            setIsUnlocked(true);
        }
    }, [unlockInput]);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        document.documentElement.lang = code;
        setIsOpen(false);
        
        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('lang', code);
        window.history.pushState({}, '', url);
    };

    const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

    const commonLangs = LANGUAGES.filter(l => l.category === 'common');
    const otherLangs = LANGUAGES.filter(l => l.category === 'others');

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 bg-[#5865f2] hover:bg-[#4752c4] transition-colors px-3 py-1.5 rounded-md shadow-md focus:outline-none ring-2 ring-white/20"
            >
                <Globe size={16} className="text-white/80" />
                <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wider">
                    {currentLang.code.split('-')[0]}
                </span>
                <ChevronDown size={14} className={`text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-64 bg-[#313338] border border-[#1e1f22] rounded-xl shadow-2xl z-50 overflow-hidden transform origin-top-right transition-all duration-200">
                        <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {/* Common Section */}
                            <div className="px-3 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-[#1e1f22] bg-[#2b2d31]">
                                Common Languages
                            </div>
                            <div className="p-1">
                                {commonLangs.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`w-full text-left px-3 py-2 rounded-md flex items-center justify-between transition-colors group ${
                                            i18n.language === lang.code ? 'bg-[#404249] text-white' : 'text-gray-300 hover:bg-[#35373c] hover:text-white'
                                        }`}
                                    >
                                        <span className="text-sm font-medium">{lang.label}</span>
                                        {i18n.language === lang.code && <Check size={14} className="text-[#5865f2]" />}
                                    </button>
                                ))}
                            </div>

                            {/* Others Section */}
                            <div className="px-3 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-y border-[#1e1f22] bg-[#2b2d31] flex items-center justify-between">
                                <span>Others</span>
                                {isUnlocked ? <Unlock size={10} className="text-green-500" /> : <Lock size={10} />}
                            </div>
                            
                            {!isUnlocked ? (
                                <div className="p-3">
                                    <p className="text-[10px] text-gray-400 mb-2 leading-tight">
                                        These include memes, dialects, and experimental translations.
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="I'm sure that I want to see these options"
                                        value={unlockInput}
                                        onChange={(e) => setUnlockInput(e.target.value)}
                                        className="w-full bg-[#1e1f22] border border-[#1e1f22] rounded px-2 py-1.5 text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-[#5865f2] transition-colors"
                                    />
                                </div>
                            ) : (
                                <div className="p-1">
                                    {otherLangs.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`w-full text-left px-3 py-2 rounded-md flex items-center justify-between transition-colors group ${
                                                i18n.language === lang.code ? 'bg-[#404249] text-white' : 'text-gray-300 hover:bg-[#35373c] hover:text-white'
                                            }`}
                                        >
                                            <span className="text-sm font-medium italic">{lang.label}</span>
                                            {i18n.language === lang.code && <Check size={14} className="text-[#5865f2]" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
