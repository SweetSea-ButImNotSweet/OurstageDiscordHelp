export function renderStep2() {
    return `
        <!-- Step 2: Command Search -->
        <div class="space-y-4">
            <h2 class="text-3xl font-extrabold text-center lg:text-left" data-i18n="step2_title"></h2>

            <div class="discord-command-list">
                <div class="discord-command-list-header" data-i18n="step2_command_match"></div>
                <div class="discord-command-item selected">
                    <div class="discord-command-item-main">
                        <img src="https://cdn.discordapp.com/avatars/1402414420520341585/4e3e683928e9a6f3728270f160a0b618.webp"
                            class="discord-command-avatar" alt="bot">
                        <div class="discord-command-info">
                            <div class="discord-command-name-row">
                                <span class="discord-command-name">/link</span>
                                <span class="discord-command-usage" data-i18n="pjsk_id"></span>
                            </div>
                            <div class="discord-command-desc" data-i18n="step2_command_desc"></div>
                        </div>
                    </div>
                    <div class="discord-command-source">UntitledCh...</div>
                </div>

                <div class="discord-command-item muted">
                    <div class="discord-command-item-main">
                        <div class="discord-command-icon-placeholder">SB</div>
                        <div class="discord-command-info">
                            <div class="discord-command-name-row">
                                <span class="discord-command-name">/links</span>
                            </div>
                            <div class="discord-command-desc">See helpful links.</div>
                        </div>
                    </div>
                    <div class="discord-command-source">Statbot</div>
                </div>

                <div class="discord-command-item muted">
                    <div class="discord-command-item-main">
                        <div class="discord-command-icon-placeholder">CB</div>
                        <div class="discord-command-info">
                            <div class="discord-command-name-row">
                                <span class="discord-command-name">/linkspam blacklist</span>
                            </div>
                            <div class="discord-command-desc">Blocks/Unblocks links on a domain level</div>
                        </div>
                    </div>
                    <div class="discord-command-source">Carl-bot</div>
                </div>
            </div>

            <!-- Chat bar in Search Mode -->
            <div class="discord-chat-bar">
                <div class="discord-chat-bar-row">
                    <div class="discord-chat-bar-icon mr-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="#b5bac1" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="discord-chat-bar-input">/link</div>
                    <div class="flex items-center space-x-2 ml-2" data-icons-group="right"></div>
                </div>
            </div>
        </div>

        <!-- Step 2: Parameter Box -->
        <div class="space-y-4 pt-8">
            <h2 class="text-3xl font-extrabold text-center lg:text-left" data-i18n="step2_paste_id">
            </h2>

            <div class="relative">
                <div class="discord-chat-bar mode-parameter">
                    <div class="flex justify-between items-center px-4 py-2 bg-[#1e1f22] border-b border-[#2b2d31]">
                        <span class="text-[#dbdee1] text-[11px] font-bold uppercase tracking-wider"
                            data-i18n="pjsk_id_placeholder"></span>
                        <span class="text-(--discord-interactive-normal) cursor-pointer hover:text-white">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </span>
                    </div>
                    <div class="discord-chat-bar-row py-4">
                        <div class="discord-chat-bar-icon mr-3">
                            <img src="https://cdn.discordapp.com/avatars/1402414420520341585/4e3e683928e9a6f3728270f160a0b618.webp"
                                alt="Avatar" class="w-10 h-10 rounded-full object-cover">
                        </div>
                        <div class="flex flex-1 items-center space-x-1">
                            <span class="text-[#f2f3f5] font-bold text-lg">/link</span>
                            <div class="discord-parameter-box">
                                <span class="discord-parameter-label" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value">111222333444555666</span>
                                <div class="discord-parameter-caret"></div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2 ml-2" data-icons-group="right"></div>
                    </div>
                </div>

                <div class="mt-4 flex flex-col items-center">
                    <p class="text-xl font-extrabold text-black max-w leading-snug text-center">
                        <span data-i18n="step2_warning_not_real"></span><br />
                        <span data-i18n="step2_warning_enter_id"></span>
                    </p>
                </div>
            </div>
        </div>
    `;
}
