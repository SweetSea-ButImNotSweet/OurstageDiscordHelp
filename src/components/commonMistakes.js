const MIKU_AVATAR = "https://cdn.discordapp.com/avatars/1402414420520341585/4e3e683928e9a6f3728270f160a0b618.webp";

export function renderCommonMistakes() {
    return `
        <div>
            <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold" data-i18n="cm_title"></h2>
                <p class="text-gray-500 mt-3 max-w-2xl mx-auto" data-i18n="cm_subtitle"></p>
            </div>

            <div class="grid grid-cols-1 2xl:grid-cols-2 gap-6">
                <!-- 1. Plain Text -->
                <div class="bg-red-50 border border-red-200 rounded-xl p-5 shadow-sm transition hover:shadow-md">
                    <div class="flex items-center space-x-2 text-red-600 mb-3">
                        <i data-lucide="keyboard" class="w-5 h-5"></i>
                        <h3 class="font-bold text-lg" data-i18n="cm_1_title"></h3>
                    </div>
                    <p class="text-sm text-gray-700 mb-4" data-i18n="cm_1_desc"></p>
                    <div class="discord-chat-bar-row bg-[#383a40] rounded-lg min-h-0 py-2">
                        <div class="discord-chat-bar-icon mr-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M5 12H19" stroke="#b5bac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="flex-1 text-(--discord-text) text-sm flex items-center">
                            /link 111222333444555666
                        </div>
                        <div class="flex items-center space-x-2 ml-2 opacity-50 scale-75 origin-right">
                            <i data-lucide="smile" class="w-5 h-5 text-(--discord-interactive-normal)"></i>
                        </div>
                    </div>
                </div>

                <!-- 2. Wrong Channel -->
                <div class="bg-red-50 border border-red-200 rounded-xl p-5 shadow-sm transition hover:shadow-md">
                    <div class="flex items-center space-x-2 text-red-600 mb-3">
                        <i data-lucide="map-pin-off" class="w-5 h-5"></i>
                        <h3 class="font-bold text-lg" data-i18n="cm_2_title"></h3>
                    </div>
                    <p class="text-sm text-gray-700 mb-4" data-i18n="cm_2_desc"></p>
                    <div class="grid grid-cols-2 gap-2 h-24 bg-red-100 rounded-lg justify-items-center items-center border border-red-200 overflow-hidden relative">
                        <div class="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                            <span class="font-black uppercase tracking-widest text-[#f23f43]">Image Placeholder</span>
                        </div>
                    </div>
                </div>

                <!-- 3. Formatting Errors (Spaces, Dirty text, Full-width, Superscript) -->
                <div class="bg-red-50 border border-red-200 rounded-xl p-5 shadow-sm transition hover:shadow-md">
                    <div class="flex items-center space-x-2 text-red-600 mb-3">
                        <i data-lucide="type" class="w-5 h-5"></i>
                        <h3 class="font-bold text-lg" data-i18n="cm_3_title"></h3>
                    </div>
                    <p class="text-sm text-gray-700 mb-4" data-i18n="cm_3_desc"></p>
                    
                    <div class="space-y-2">
                        <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                            <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                            <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                                <span class="discord-parameter-label text-xs mr-1" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value font-mono text-xs">
                                    <span class="bg-red-500/30 text-rose-300">(UserID:</span>1234567<span class="bg-red-500/30 text-rose-300">)</span>
                                </span>
                            </div>
                        </div>

                        <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                            <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                            <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                                <span class="discord-parameter-label text-xs mr-1 hidden sm:inline" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value font-mono text-xs bg-red-500/30 text-rose-300">
                                    111 222 333
                                </span>
                            </div>
                        </div>

                        <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                            <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                            <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                                <span class="discord-parameter-label text-xs mr-1 hidden sm:inline" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value font-mono text-xs bg-red-500/30 text-rose-300">
                                    １２３４５６
                                </span>
                            </div>
                        </div>

                        <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                            <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                            <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                                <span class="discord-parameter-label text-xs mr-1 hidden sm:inline" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value font-mono text-xs bg-red-500/30 text-rose-300">
                                    ⁰735806710006190457
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4. Misaligned Digits (OCR, Typos) -->
                <div class="bg-red-50 border border-red-200 rounded-xl p-5 shadow-sm transition hover:shadow-md">
                    <div class="flex items-center space-x-2 text-red-600 mb-3">
                        <i data-lucide="scan-text" class="w-5 h-5"></i>
                        <h3 class="font-bold text-lg" data-i18n="cm_4_title"></h3>
                    </div>
                    <p class="text-sm text-gray-700 mb-4" data-i18n="cm_4_desc"></p>
                    
                    <div class="space-y-2">
                        <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                            <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                            <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                                <span class="discord-parameter-label text-xs mr-1" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value font-mono text-xs">
                                    <span class="bg-red-500/30 text-rose-300">I</span><span class="bg-red-500/30 text-rose-300">O</span>1234<span class="bg-red-500/30 text-rose-300">/</span>567<span class="bg-red-500/30 text-rose-300">O</span>
                                </span>
                            </div>
                        </div>

                        <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                            <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                            <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                                <span class="discord-parameter-label text-xs mr-1 hidden sm:inline" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value font-mono text-xs">
                                    111222333<span class="bg-red-500/30 text-rose-300">...</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 5. Invalid Data Fallacy -->
                <div class="bg-red-50 border border-red-200 rounded-xl p-5 shadow-sm transition hover:shadow-md">
                    <div class="flex items-center space-x-2 text-red-600 mb-3">
                        <i data-lucide="hash" class="w-5 h-5"></i>
                        <h3 class="font-bold text-lg" data-i18n="cm_5_title"></h3>
                    </div>
                    <p class="text-sm text-gray-700 mb-4" data-i18n="cm_5_desc"></p>
                    
                    <div class="space-y-2">
                        <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                            <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                            <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                                <span class="discord-parameter-label text-xs mr-1" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value font-mono text-xs bg-red-500/30 text-rose-300">
                                    6.4.0.Luna
                                </span>
                            </div>
                        </div>

                        <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                            <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                            <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                                <span class="discord-parameter-label text-xs mr-1 hidden sm:inline" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value font-mono text-xs bg-red-500/30 text-rose-300">
                                    1a4855a4-aeb3-4eef-b91c...
                                </span>
                            </div>
                        </div>

                        <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                            <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                            <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                                <span class="discord-parameter-label text-xs mr-1 hidden sm:inline" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value font-mono text-xs bg-red-500/30 text-rose-300">
                                    ID000005829
                                </span>
                            </div>
                        </div>
                        
                        <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                            <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                            <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                                <span class="discord-parameter-label text-xs mr-1 hidden sm:inline" data-i18n="pjsk_id"></span>
                                <span class="discord-parameter-value font-mono text-xs bg-red-500/30 text-rose-300">
                                    SuperMikuFan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 6. Wrong Game ID -->
                <div class="bg-red-50 border border-red-200 rounded-xl p-5 shadow-sm transition hover:shadow-md">
                    <div class="flex items-center space-x-2 text-red-600 mb-3">
                        <i data-lucide="globe-2" class="w-5 h-5"></i>
                        <h3 class="font-bold text-lg" data-i18n="cm_6_title"></h3>
                    </div>
                    <p class="text-sm text-gray-700 mb-4" data-i18n="cm_6_desc"></p>
                    <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                        <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                        <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                        <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                            <span class="discord-parameter-label text-xs mr-1" data-i18n="pjsk_id"></span>
                            <span class="discord-parameter-value font-mono text-xs bg-red-500/30 text-rose-300">
                                444333222111
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 7. Uninitialized -->
                <div class="bg-red-50 border border-red-200 rounded-xl p-5 shadow-sm transition hover:shadow-md">
                    <div class="flex items-center space-x-2 text-red-600 mb-3">
                        <i data-lucide="minus" class="w-5 h-5"></i>
                        <h3 class="font-bold text-lg" data-i18n="cm_7_title"></h3>
                    </div>
                    <p class="text-sm text-gray-700 mb-4" data-i18n="cm_7_desc"></p>
                    <div class="discord-inner-bg rounded border border-gray-700 overflow-hidden px-3 py-2 flex items-center">
                        <img src="${MIKU_AVATAR}" class="w-6 h-6 rounded-full mr-2 shrink-0 object-cover" alt="Miku">
                        <span class="text-[#f2f3f5] font-bold mr-1">/link</span>
                        <div class="discord-parameter-box py-0 bg-transparent border-none px-0">
                            <span class="discord-parameter-label text-xs mr-1" data-i18n="pjsk_id"></span>
                            <span class="discord-parameter-value font-mono text-xs bg-red-500/30 text-rose-300">
                                -
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 8. Copycat -->
                <div class="bg-red-50 border border-red-200 rounded-xl p-5 shadow-sm transition hover:shadow-md lg:col-start-2 lg:col-span-1">
                    <div class="flex items-center space-x-2 text-red-600 mb-3">
                        <i data-lucide="copy-x" class="w-5 h-5"></i>
                        <h3 class="font-bold text-lg" data-i18n="cm_8_title"></h3>
                    </div>
                    <p class="text-sm text-gray-700 mb-4" data-i18n="cm_8_desc"></p>
                    <div class="text-center font-bold text-red-500/80">
                        <i data-lucide="frown" class="w-8 h-8 mx-auto mb-1"></i>
                    </div>
                </div>

            </div>
        </div>
    `;
}
