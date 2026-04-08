import React from 'react';
import { T } from './T.jsx';

export default function Step3() {
    return (
        <div className="space-y-4">
            <h2 className="text-step-heading"><T i18nKey="step3_title" /></h2>
            <T i18nKey="step3_desc" className="text-help-desc" as="p" />
            <div className="discord-inner-bg p-5 rounded-lg text-left success-border border border-gray-700/50">
                <div className="space-y-2">
                    <h3 className="text-[#23a55a] font-bold text-xl uppercase tracking-tight">Success!</h3>
                    <p className="text-[#dbdee1] text-base leading-relaxed">
                        Your OurStage ID was successfully changed to <span className="i18n-id">111222333444555666</span> (OurStage Player). You can access the OurStage app with that ID.
                    </p>
                    <div className="flex items-center pt-3 text-[#00a8fc] text-xs font-semibold">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                        <T i18nKey="success_footer" as="span" />
                    </div>
                </div>
            </div>
        </div>
    );
}
