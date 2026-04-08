import React from 'react';
import { T } from './T.jsx';
import { ChatBarRightIcons, ParameterBox, MIKU_AVATAR, Avatar } from './DiscordUI.jsx';

export default function Step2() {
    return (
        <div className="space-y-4">
            <h2 className="text-step-heading"><T i18nKey="step2_title" /></h2>

            <div className="discord-command-list">
                <div className="discord-command-list-header"><T i18nKey="step2_command_match" /></div>
                <div className="discord-command-item selected">
                    <div className="discord-command-item-main">
                        <Avatar className="discord-command-avatar" />
                        <div className="discord-command-info">
                            <div className="discord-command-name-row">
                                <span className="discord-command-name">/link</span>
                                <span className="discord-command-usage">pjsk_id</span>
                            </div>
                            <div className="discord-command-desc">Link your OurStage PJSK account to Discord.</div>
                        </div>
                    </div>
                    <div className="discord-command-source">UntitledCh...</div>
                </div>

                <div className="discord-command-item muted">
                    <div className="discord-command-item-main">
                        <div className="discord-command-icon-placeholder">SB</div>
                        <div className="discord-command-info">
                            <div className="discord-command-name-row">
                                <span className="discord-command-name">/links</span>
                            </div>
                            <div className="discord-command-desc">See helpful links.</div>
                        </div>
                    </div>
                    <div className="discord-command-source">Statbot</div>
                </div>

                <div className="discord-command-item muted">
                    <div className="discord-command-item-main">
                        <div className="discord-command-icon-placeholder">CB</div>
                        <div className="discord-command-info">
                            <div className="discord-command-name-row">
                                <span className="discord-command-name">/linkspam blacklist</span>
                            </div>
                            <div className="discord-command-desc">Blocks/Unblocks links on a domain level</div>
                        </div>
                    </div>
                    <div className="discord-command-source">Carl-bot</div>
                </div>
            </div>

            {/* Chat bar in Search Mode */}
            <div className="discord-chat-bar">
                <div className="discord-chat-bar-row">
                    <div className="discord-chat-bar-icon mr-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="#b5bac1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="discord-chat-bar-input">/link</div>
                    <div className="flex items-center space-x-2 ml-2">
                        <ChatBarRightIcons />
                    </div>
                </div>
            </div>

            {/* Step 2: Parameter Box */}
            <div className="space-y-4 pt-8">
                <h2 className="text-step-heading"><T i18nKey="step2_paste_id" /></h2>

                <div className="relative">
                    <div className="discord-chat-bar mode-parameter">
                        <div className="flex justify-between items-center px-4 py-2 bg-[#1e1f22] border-b border-[#2b2d31]">
                            <span className="text-[#dbdee1] text-[11px] font-bold uppercase tracking-wider">
                                pjsk_id ...
                            </span>
                            <span className="text-(--discord-interactive-normal) cursor-pointer hover:text-white">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </span>
                        </div>
                        <div className="discord-chat-bar-row py-4">
                            <div className="discord-chat-bar-icon mr-3">
                                <Avatar className="w-10 h-10 rounded-full object-cover" />
                            </div>
                            <div className="flex flex-1 items-center space-x-1">
                                <span className="text-[#f2f3f5] font-bold text-lg">/link</span>
                                <ParameterBox value="111222333444555666" hasCaret={true} />
                            </div>
                            <div className="flex items-center space-x-2 ml-2">
                                <ChatBarRightIcons />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col items-center">
                        <p className="text-xl font-extrabold text-black max-w leading-snug text-center">
                            <T i18nKey="step2_warning_not_real" as="span" /><br />
                            <T i18nKey="step2_warning_enter_id" as="span" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
