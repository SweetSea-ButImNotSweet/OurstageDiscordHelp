import { T } from './T.jsx';

export default function Step1() {
    return (
        <div className="space-y-8">
            <div className="space-y-4 text-center">
                <T i18nKey="step1_title" className="text-3xl font-extrabold tracking-tight" as="h1" />

                <div className="inline-flex items-center px-4 py-1.5 rounded-md bg-(--discord-brand) text-white font-semibold">
                    <span className="mr-1.5 text-lg">#</span>
                    <span className="mr-2">📩</span>
                    <span>| os-support</span>
                </div>

                <T i18nKey="step1_warning" className="text-red-600 font-bold text-lg max-w mx-auto leading-tight" as="p" />
            </div>
        </div>
    );
}
