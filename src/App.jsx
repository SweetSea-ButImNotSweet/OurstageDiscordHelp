import React from 'react';
import { T } from './components/T.jsx';

import Step1 from './components/Step1.jsx';
import Step2 from './components/Step2.jsx';
import Step3 from './components/Step3.jsx';
import IdHelp from './components/IdHelp.jsx';
import IdDashHelp from './components/IdDashHelp.jsx';
import CommonMistakes from './components/CommonMistakes.jsx';

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Top Banner */}
            <div className="w-full bg-[#111214] text-white px-8 py-3 flex items-center justify-between mb-6 shadow-sm">
                <T i18nKey="banner_title" className="text-sm md:text-base font-bold tracking-tight" />
                <div className="flex items-center space-x-2 text-sm md:text-base">
                    <T i18nKey="banner_lang_label" className="text-gray-400 font-medium" />
                    <T i18nKey="banner_lang_code" className="bg-[#5865f2] px-3 py-0.5 rounded font-black text-xs md:text-sm uppercase" />
                </div>
            </div>

            {/* Main Content Container (Grid) */}
            <div className="max-w-480 mx-auto w-full px-4 lg:px-8 mb-10 xl:grid xl:grid-cols-12 xl:gap-12 2xl:gap-16">
                {/* Steps Container (Left Column) */}
                <div className="xl:col-span-5 space-y-16">
                    <Step1 />
                    <Step2 />
                    <Step3 />
                </div>

                {/* Common Mistakes Container (Right Column) */}
                <div className="xl:col-span-7 mt-16 xl:mt-0 pt-16 xl:pt-0 border-t border-gray-200 xl:border-t-0">
                    <CommonMistakes />
                </div>
            </div>

            {/* ID Help Sections */}
            <div className="w-full bg-gray-50 border-t border-gray-100 py-12">
                <IdHelp />
                <IdDashHelp />
            </div>
        </div>
    );
}
