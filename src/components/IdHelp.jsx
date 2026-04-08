import React from 'react';
import { T } from './T.jsx';

export default function IdHelp() {
    return (
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center">
            {/* Left Column: Text */}
            <div className="text-left space-y-6">
                <div className="space-y-4">
                    <T i18nKey="id_help_title" className="text-help-heading" as="h2" />
                    <T i18nKey="id_help_desc" args={{ location: "id_help_location" }} className="text-help-desc" as="p" />
                </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative w-full">
                <div className="absolute -inset-1.5 bg-linear-to-r from-blue-400 to-teal-400 rounded-lg blur opacity-20"></div>
                <img src="/OurstageID.png" alt="OurStage ID Location" className="relative w-full h-auto block rounded-lg border-4 border-white" />
            </div>
        </div>
    );
}
