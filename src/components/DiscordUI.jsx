import React from 'react';
import { Smile, Plus } from 'lucide-react';
import { T } from './T.jsx';

export const MIKU_AVATAR = "https://cdn.discordapp.com/avatars/1402414420520341585/4e3e683928e9a6f3728270f160a0b618.webp";

export function Avatar({ src = MIKU_AVATAR, alt = "Avatar", className = "w-6 h-6 rounded-full object-cover shrink-0" }) {
    return <img src={src} alt={alt} className={className} />;
}

export function ChatBarRightIcons() {
    return (
        <>
            <div className="discord-chat-bar-icon">
                <img src="/icons/discord/gift.svg" className="w-6 h-6" alt="Gift" />
            </div>
            <div className="discord-chat-bar-icon">
                <img src="/icons/discord/gif.svg" className="w-6 h-6" alt="GIF" />
            </div>
            <div className="discord-chat-bar-icon">
                <img src="/icons/discord/sticker.svg" className="w-6 h-6" alt="Sticker" />
            </div>
            <div className="discord-chat-bar-icon text-(--discord-interactive-normal)">
                <Smile className="w-6 h-6" strokeWidth={2} />
            </div>
            <div className="discord-chat-bar-icon">
                <img src="/icons/discord/app.svg" className="w-6 h-6" alt="App Launcher" />
            </div>
        </>
    );
}

export function ParameterBox({ labelKey = "pjsk_id", value, showLabel = true, hasCaret = false, styleType = "normal" }) {
    if (styleType === "cm") {
        return (
            <div className="discord-parameter-box py-0 bg-transparent border-none px-0">
                <span className={`discord-parameter-label mr-1 ${!showLabel ? "hidden sm:inline" : ""}`}>
                    <T i18nKey={labelKey} />
                </span>
                <span className="discord-parameter-value">
                    {value}
                </span>
            </div>
        );
    }

    return (
        <div className="discord-parameter-box">
            <span className="discord-parameter-label"><T i18nKey={labelKey} /></span>
            <span className="discord-parameter-value">{value}</span>
            {hasCaret && <div className="discord-parameter-caret"></div>}
        </div>
    );
}

export function FakeMessage({ children }) {
    return (
        <div className="cm-fake-msg">
            {children}
        </div>
    );
}
