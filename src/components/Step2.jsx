import { T } from './T.jsx';
import {
    ChatBarRightIcons,
    ParameterBox,
    Avatar,
    PlusIcon,
    DiscordCommandList,
    DiscordCommandItem,
    DiscordChatBar
} from './DiscordUI.jsx';

export default function Step2() {
    return (
        <div className="space-y-4">
            <h2 className="text-step-heading"><T i18nKey="step2_title" /></h2>

            <DiscordCommandList title={<T i18nKey="step2_command_match" />}>
                <DiscordCommandItem
                    name="/link"
                    usage="pjsk_id"
                    description="Link your OurStage PJSK account to Discord."
                    source="UntitledCh..."
                    selected={true}
                />
                <DiscordCommandItem
                    name="/links"
                    description="See helpful links."
                    source="Statbot"
                    iconText="SB"
                    muted={true}
                />
                <DiscordCommandItem
                    name="/linkspam blacklist"
                    description="Blocks/Unblocks links on a domain level"
                    source="Carl-bot"
                    iconText="CB"
                    muted={true}
                />
            </DiscordCommandList>

            {/* Chat bar in Search Mode */}
            <DiscordChatBar>
                <PlusIcon className="discord-chat-bar-icon mr-3" />
                <div className="discord-chat-bar-input">/link</div>
                <div className="flex items-center space-x-2 ml-2">
                    <ChatBarRightIcons />
                </div>
            </DiscordChatBar>

            {/* Step 2: Parameter Box */}
            <div className="space-y-4 pt-8">
                <h2 className="text-step-heading"><T i18nKey="step2_paste_id" /></h2>

                <div className="relative">
                    <DiscordChatBar mode="parameter" headerLabel="pjsk_id ...">
                        <div className="discord-chat-bar-icon mr-3">
                            <Avatar className="w-10 h-10 rounded-full object-cover" />
                        </div>
                        <div className="flex flex-1 items-center space-x-1">
                            <span className="text-(--discord-header) font-bold text-lg">/link</span>
                            <ParameterBox value="111222333444555666" hasCaret={true} />
                        </div>
                        <div className="flex items-center space-x-2 ml-2">
                            <ChatBarRightIcons />
                        </div>
                    </DiscordChatBar>

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
