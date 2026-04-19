import { Keyboard, MapPinOff, Type, ScanText, Hash, Globe2, CopyX, Frown } from 'lucide-react';
import { T } from './T.jsx';
import { ParameterBox, FakeMessage, Avatar, DiscordChatBar } from './DiscordUI.jsx';

/**
 * Internal Helper Components to keep the main component tidy
 */

const MistakeCard = ({ icon: Icon, titleKey, descKey, children, descClassName = "" }) => (
    <div className="cm-card">
        <div className="cm-header">
            <Icon className="w-5 h-5" />
            <T i18nKey={titleKey} className="cm-title" as="h3" />
        </div>
        {descKey && <T i18nKey={descKey} className={`cm-desc ${descClassName}`} as="p" />}
        {children}
    </div>
);

const DiscordLinkExample = ({ value, showLabel = true, errorId = null }) => (
    <div className="flex flex-col">
        <FakeMessage>
            <div className="mr-3"><Avatar /></div>
            <span className="text-(--discord-header) font-bold mr-1">/link</span>
            <ParameterBox styleType="cm" showLabel={showLabel} value={value} />
        </FakeMessage>
        {errorId && <T i18nKey={errorId} className="text-(--discord-danger) text-[12px] font-bold mt-1 ml-13" />}
    </div>
);

export default function CommonMistakes() {
    return (
        <div>
            <div className="text-center mb-12">
                <T i18nKey="cm_title" className="text-4xl md:text-5xl font-extrabold" as="h2" />
                <T i18nKey="cm_subtitle" className="text-lg md:text-xl text-gray-500 mt-4 mx-auto" as="p" />
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
                {/* 1. Plain Text */}
                <MistakeCard icon={Keyboard} titleKey="cm_1_title" descKey="cm_1_desc">
                    <div className='space-y-2'>
                        <DiscordChatBar mode="compact">/link 111222333444555666</DiscordChatBar>
                        <DiscordChatBar mode="compact">/link pjsk_id: 111222333444555666</DiscordChatBar>
                    </div>
                </MistakeCard>

                {/* 2. Misaligned Digits */}
                <MistakeCard icon={ScanText} titleKey="cm_2_title" descKey="cm_2_desc">
                    <div className="space-y-2">
                        <DiscordLinkExample value={
                            <>
                                <span className="cm-error-text">I</span>
                                <span className="cm-error-text">O</span>
                                1234
                                <span className="cm-error-text">/</span>
                                567
                                <span className="cm-error-text">O</span>
                            </>
                        } />
                        <DiscordLinkExample
                            showLabel={false}
                            value={<span className="cm-error-text">12321232123</span>}
                            errorId="cm_error_18_digits"
                        />
                    </div>
                </MistakeCard>

                {/* 3. Wrong Channel */}
                <MistakeCard icon={MapPinOff} titleKey="cm_3_title" descKey="cm_3_desc" descClassName="mb-0!" />

                {/* 4. Copycat */}
                <MistakeCard icon={CopyX} titleKey="cm_4_title">
                    <div className="flex items-start gap-4">
                        <Frown className="w-10 h-10 text-red-500/80 shrink-0 mt-0.5" />
                        <T i18nKey="cm_4_desc" className="cm-desc mb-0!" as="p" />
                    </div>
                </MistakeCard>

                {/* 5. Formatting Errors */}
                <MistakeCard icon={Type} titleKey="cm_5_title" descKey="cm_5_desc">
                    <div className="space-y-2">
                        <DiscordLinkExample value={
                            <><span className="cm-error-text">(UserID:</span>1234567<span className="cm-error-text">)</span></>
                        } />
                        <DiscordLinkExample showLabel={false} value={
                            <>111<span className="cm-error-text"> </span>222<span className="cm-error-text"> </span>333</>
                        } />
                        <DiscordLinkExample showLabel={false} value={
                            <span className="cm-error-text">１２３４５６</span>
                        } />
                        <DiscordLinkExample showLabel={false} value={
                            <><span className="cm-error-text">⁰</span>735806710006190457</>
                        } />
                    </div>
                </MistakeCard>

                {/* 6. Invalid Data Fallacy */}
                <MistakeCard icon={Hash} titleKey="cm_6_title" descKey="cm_6_desc">
                    <div className="space-y-2">
                        <DiscordLinkExample value={<span className="cm-error-text">6.4.0.Luna</span>} />
                        <DiscordLinkExample value={<span className="cm-error-text">9023656027Y58103</span>} />
                        <DiscordLinkExample value={<span className="cm-error-text">ID000005829</span>} />
                        <DiscordLinkExample showLabel={false} value={<span className="cm-error-text">SuperMikuFan</span>} />
                    </div>
                </MistakeCard>

                {/* 7. Wrong Game ID */}
                <MistakeCard icon={Globe2} titleKey="cm_7_title" descKey="cm_7_desc" descClassName="mb-0!" />
            </div>
        </div>
    );
}