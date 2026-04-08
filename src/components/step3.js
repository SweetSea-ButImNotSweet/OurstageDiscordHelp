export function renderStep3() {
    return `
        <!-- Step 3: Success Message -->
        <div class="space-y-4">
            <h2 class="text-step-heading" data-i18n="step3_title"></h2>
            <p class="text-help-desc" data-i18n="step3_desc"></p>
            <div class="discord-inner-bg p-5 rounded-lg text-left success-border border border-gray-700/50">
                <div class="space-y-2">
                    <h3 class="text-[#23a55a] font-bold text-xl uppercase tracking-tight" data-i18n="success_title">
                    </h3>
                    <p class="text-[#dbdee1] text-base leading-relaxed" data-i18n="success_message"
                        data-i18n-args='{"id": "111222333444555666"}'>
                    </p>
                    <div class="flex items-center pt-3 text-[#00a8fc] text-xs font-semibold">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                        <span data-i18n="success_footer"></span>
                    </div>
                </div>
            </div>
        </div>
    `;
}
