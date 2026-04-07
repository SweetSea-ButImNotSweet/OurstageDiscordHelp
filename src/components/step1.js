export function renderStep1() {
    return `
        <!-- Step 1 -->
        <div class="space-y-8">
            <div class="space-y-4 text-center">
                <h1 class="text-3xl font-extrabold tracking-tight" data-i18n="step1_title"></h1>

                <div class="inline-flex items-center px-4 py-1.5 rounded-md bg-[#5865f2] text-white font-semibold">
                    <span class="mr-1.5 text-lg">#</span>
                    <span class="mr-2">📩</span>
                    <span>| <span data-i18n="step1_channel_name"></span></span>
                </div>

                <p class="text-red-600 font-bold text-lg max-w mx-auto leading-tight" data-i18n="step1_warning"></p>
            </div>
        </div>
    `;
}
