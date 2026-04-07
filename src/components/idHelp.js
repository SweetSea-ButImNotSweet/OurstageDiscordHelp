export function renderIdHelp() {
    return `
        <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center">
            <!-- Left Column: Text (40% approx) -->
            <div class="text-left space-y-6">
                <div class="space-y-4">
                    <h2 class="text-4xl font-black text-black leading-tight" data-i18n="id_help_title">
                    </h2>
                    <p class="text-gray-600 font-bold text-2xl leading-relaxed" data-i18n="id_help_desc"
                        data-i18n-args='{"location": "id_help_location"}'>
                    </p>
                </div>
            </div>

            <!-- Right Column: Image (60% approx) -->
            <div class="relative w-full">
                <div class="absolute -inset-1.5 bg-linear-to-r from-blue-400 to-teal-400 rounded-lg blur opacity-20">
                </div>
                <img src="OurstageID.png" alt="OurStage ID Location"
                    class="relative w-full h-auto block rounded-lg border-4 border-white">
            </div>
        </div>
    `;
}
