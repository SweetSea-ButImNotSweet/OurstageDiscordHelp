import { T } from './T.jsx';

export default function IdHelp() {
    return (
        <div className="text-left space-y-4">
            <T i18nKey="id_help_title" className="text-help-heading" as="h2" />
            <T i18nKey="id_help_desc" args={{ location: "id_help_location" }} className="text-help-desc" as="p" />
        </div>
    );
}
