import React from 'react';
import { T } from './T.jsx';

export default function IdDashHelp() {
    return (
        <div className="text-left space-y-4">
            <div className="space-y-4">
                <T i18nKey="id_dash_title" className="text-help-heading" as="h2" />
                <T i18nKey="id_dash_desc" className="text-help-desc" as="p" />
            </div>
            {/* Closing */}
            <div className="pt-6">
                <T i18nKey="closing_text" className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500 italic text-left" as="p" />
            </div>
        </div>
    );
}
