import { Smile, Plus, X } from 'lucide-react';

export const MIKU_AVATAR = "https://cdn.discordapp.com/avatars/1402414420520341585/4e3e683928e9a6f3728270f160a0b618.webp";

export function Avatar({ src = MIKU_AVATAR, alt = "Avatar", className = "w-6 h-6 rounded-full object-cover shrink-0" }) {
    return <img src={src} alt={alt} className={className} />;
}

export function ChatBarRightIcons() {
    return (
        <>
            <div className="discord-chat-bar-icon">
                <img src={`${import.meta.env.BASE_URL}icons/discord/gift.svg`} className="w-6 h-6" alt="Gift" />
            </div>
            <div className="discord-chat-bar-icon">
                <img src={`${import.meta.env.BASE_URL}icons/discord/gif.svg`} className="w-6 h-6" alt="GIF" />
            </div>
            <div className="discord-chat-bar-icon">
                <img src={`${import.meta.env.BASE_URL}icons/discord/sticker.svg`} className="w-6 h-6" alt="Sticker" />
            </div>
            <div className="discord-chat-bar-icon text-(--discord-interactive-normal)">
                <Smile className="w-6 h-6" strokeWidth={2} />
            </div>
            <div className="discord-chat-bar-icon">
                <img src={`${import.meta.env.BASE_URL}icons/discord/app.svg`} className="w-6 h-6" alt="App Launcher" />
            </div>
        </>
    );
}

export function ParameterBox({ label = "pjsk_id", value, showLabel = true, hasCaret = false, styleType = "normal" }) {
    if (styleType === "cm") {
        return (
            <div className="discord-parameter-box py-0 bg-transparent border-none px-0">
                <span className={`discord-parameter-label mr-1 ${!showLabel ? "hidden sm:inline" : ""}`}>
                    {label}
                </span>
                <span className="discord-parameter-value">
                    {value}
                </span>
            </div>
        );
    }

    return (
        <div className="discord-parameter-box">
            <span className="discord-parameter-label">{label}</span>
            <span className="discord-parameter-value">{value}</span>
            {hasCaret && <div className="discord-parameter-caret"></div>}
        </div>
    );
}

export function FakeMessage({ children, className = "" }) {
    return (
        <div className={`cm-fake-msg ${className}`}>
            {children}
        </div>
    );
}

export function DiscordCommandList({ children, title }) {
    return (
        <div className="discord-command-list">
            {title && <div className="discord-command-list-header">{title}</div>}
            {children}
        </div>
    );
}

export function DiscordCommandItem({
    name,
    usage,
    description,
    source,
    selected = false,
    muted = false,
    iconText,
    avatarSrc
}) {
    return (
        <div className={`discord-command-item ${selected ? 'selected' : ''} ${muted ? 'muted' : ''}`}>
            <div className="discord-command-item-main">
                {avatarSrc || (!avatarSrc && !iconText && selected) ? (
                    <Avatar src={avatarSrc} className="discord-command-avatar" />
                ) : (
                    <div className="discord-command-icon-placeholder">{iconText}</div>
                )}
                <div className="discord-command-info">
                    <div className="discord-command-name-row">
                        <span className="discord-command-name">{name}</span>
                        {usage && <span className="discord-command-usage">{usage}</span>}
                    </div>
                    <div className="discord-command-desc">{description}</div>
                </div>
            </div>
            {source && <div className="discord-command-source">{source}</div>}
        </div>
    );
}

export function DiscordChatBar({ children, mode = "normal", headerLabel, onHeaderClose, className = "" }) {
    if (mode === "compact") {
        return (
            <div className={`discord-chat-bar-compact ${className}`}>
                <PlusIcon className="discord-chat-bar-icon mr-2" size={20} />
                <div className="flex-1 text-(--discord-interactive-normal) text-sm flex items-center">
                    {children}
                </div>
                <div className="flex items-center space-x-2 ml-2 opacity-50 scale-75 origin-right">
                    <ChatBarRightIcons />
                </div>
            </div>
        );
    }

    return (
        <div className={`discord-chat-bar ${mode === 'parameter' ? 'mode-parameter' : ''} ${className}`}>
            {mode === 'parameter' && headerLabel && (
                <div className="flex justify-between items-center px-4 py-2 bg-(--discord-bg-darkest) border-b border-(--discord-border)">
                    <span className="text-(--discord-text) text-[11px] font-bold uppercase tracking-wider">
                        {headerLabel}
                    </span>
                    <span className="text-(--discord-interactive-normal) cursor-pointer hover:text-white" onClick={onHeaderClose}>
                        <XIcon size={16} />
                    </span>
                </div>
            )}
            <div className={`discord-chat-bar-row ${mode === 'parameter' ? 'py-4' : ''}`}>
                {children}
            </div>
        </div>
    );
}

export function PlusIcon({ size = 24, className = "" }) {
    return <Plus size={size} className={className} strokeWidth={2.5} />;
}

export function XIcon({ size = 16, className = "" }) {
    return <X size={size} className={className} strokeWidth={2.5} />;
}
