import React from 'react';
import { Keyboard, MapPinOff, Type, ScanText, Hash, Globe2, Minus, CopyX, Frown } from 'lucide-react';
import { T } from './T.jsx';
import { ParameterBox, FakeMessage, ChatBarRightIcons, Avatar } from './DiscordUI.jsx';

export default function CommonMistakes() {
    return (
        <div>
            <div className="text-center mb-12">
                <T i18nKey="cm_title" className="text-4xl md:text-5xl font-extrabold" as="h2" />
                <T i18nKey="cm_subtitle" className="text-lg md:text-xl text-gray-500 mt-4 mx-auto" as="p" />
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
                {/* 1. Plain Text */}
                <div className="cm-card">
                    <div className="cm-header">
                        <Keyboard className="w-5 h-5" />
                        <T i18nKey="cm_1_title" className="cm-title" as="h3" />
                    </div>
                    <T i18nKey="cm_1_desc" className="cm-desc" as="p" />
                    <div className='space-y-2'>
                        <div className="discord-chat-bar-row bg-[#383a40] rounded-lg min-h-0 py-2">
                            <div className="discord-chat-bar-icon mr-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5V19M5 12H19" stroke="#b5bac1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex-1 text-(--discord-text) text-sm flex items-center">
                                /link 111222333444555666
                            </div>
                            <div className="flex items-center space-x-2 ml-2 opacity-50 scale-75 origin-right">
                                <ChatBarRightIcons />
                            </div>
                        </div>
                        <div className="discord-chat-bar-row bg-[#383a40] rounded-lg min-h-0 py-2">
                            <div className="discord-chat-bar-icon mr-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5V19M5 12H19" stroke="#b5bac1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex-1 text-(--discord-text) text-sm flex items-center">
                                /link pjsk_id: 111222333444555666
                            </div>
                            <div className="flex items-center space-x-2 ml-2 opacity-50 scale-75 origin-right">
                                <ChatBarRightIcons />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Misaligned Digits */}
                <div className="cm-card">
                    <div className="cm-header">
                        <ScanText className="w-5 h-5" />
                        <T i18nKey="cm_2_title" className="cm-title" as="h3" />
                    </div>
                    <T i18nKey="cm_2_desc" className="cm-desc" as="p" />

                    <div className="space-y-2">
                        <FakeMessage>
                            <div className="mr-3"><Avatar /></div>
                            <span className="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <ParameterBox styleType="cm" showLabel={true} value={
                                <><span className="cm-error-text">I</span><span className="cm-error-text">O</span>1234<span className="cm-error-text">/</span>567<span className="cm-error-text">O</span></>
                            } />
                        </FakeMessage>

                        <div className="flex flex-col">
                            <FakeMessage>
                                <div className="mr-3"><Avatar /></div>
                                <span className="text-[#f2f3f5] font-bold mr-1">/link</span>
                                <ParameterBox styleType="cm" showLabel={false} value={
                                    <span className="cm-error-text">12321232123</span>
                                } />
                            </FakeMessage>
                            <T i18nKey="cm_error_18_digits" className="text-[#f23f43] text-[12px] font-bold mt-1 ml-13" />
                        </div>
                    </div>
                </div>

                {/* 3. Wrong Channel */}
                <div className="cm-card">
                    <div className="cm-header">
                        <MapPinOff className="w-5 h-5" />
                        <T i18nKey="cm_3_title" className="cm-title" as="h3" />
                    </div>
                    <T i18nKey="cm_3_desc" className="cm-desc mb-0!" as="p" />
                </div>

                {/* 4. Copycat */}
                <div className="cm-card">
                    <div className="cm-header">
                        <CopyX className="w-5 h-5" />
                        <T i18nKey="cm_4_title" className="cm-title" as="h3" />
                    </div>
                    <div className="flex items-start gap-4">
                        <Frown className="w-10 h-10 text-red-500/80 shrink-0 mt-0.5" />
                        <T i18nKey="cm_4_desc" className="cm-desc mb-0!" as="p" />
                    </div>

                </div>

                {/* 5. Formatting Errors */}
                <div className="cm-card">
                    <div className="cm-header">
                        <Type className="w-5 h-5" />
                        <T i18nKey="cm_5_title" className="cm-title" as="h3" />
                    </div>
                    <T i18nKey="cm_5_desc" className="cm-desc" as="p" />

                    <div className="space-y-2">
                        <FakeMessage>
                            <div className="mr-3"><Avatar /></div>
                            <span className="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <ParameterBox styleType="cm" showLabel={true} value={
                                <><span className="cm-error-text">(UserID:</span>1234567<span className="cm-error-text">)</span></>
                            } />
                        </FakeMessage>

                        <FakeMessage>
                            <div className="mr-3"><Avatar /></div>
                            <span className="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <ParameterBox styleType="cm" showLabel={false} value={
                                <>
                                    111<span className="cm-error-text"> </span>222<span className="cm-error-text"> </span>333
                                </>
                            } />
                        </FakeMessage>

                        <FakeMessage>
                            <div className="mr-3"><Avatar /></div>
                            <span className="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <ParameterBox styleType="cm" showLabel={false} value={
                                <span className="cm-error-text">１２３４５６</span>
                            } />
                        </FakeMessage>

                        <FakeMessage>
                            <div className="mr-3"><Avatar /></div>
                            <span className="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <ParameterBox styleType="cm" showLabel={false} value={
                                <><span className="cm-error-text">⁰</span>735806710006190457</>
                            } />
                        </FakeMessage>
                    </div>
                </div>

                {/* 6. Invalid Data Fallacy */}
                <div className="cm-card">
                    <div className="cm-header">
                        <Hash className="w-5 h-5" />
                        <T i18nKey="cm_6_title" className="cm-title" as="h3" />
                    </div>
                    <T i18nKey="cm_6_desc" className="cm-desc" as="p" />

                    <div className="space-y-2">
                        <FakeMessage>
                            <div className="mr-3"><Avatar /></div>
                            <span className="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <ParameterBox styleType="cm" showLabel={true} value={
                                <span className="cm-error-text">6.4.0.Luna</span>
                            } />
                        </FakeMessage>

                        <FakeMessage>
                            <div className="mr-3"><Avatar /></div>
                            <span className="text-[#f2f3f5] font-bold mr-1">/link</span>
                            <ParameterBox styleType="cm" showLabel={false} value={
                                <span className="cm-error-text">SuperMikuFan</span>
                            } />
                        </FakeMessage>
                    </div>
                </div>

                {/* 7. Wrong Game ID */}
                <div className="cm-card">
                    <div className="cm-header">
                        <Globe2 className="w-5 h-5" />
                        <T i18nKey="cm_7_title" className="cm-title" as="h3" />
                    </div>
                    <T i18nKey="cm_7_desc" className="cm-desc mb-0!" as="p" />
                </div>
            </div>
        </div>
    );
}
