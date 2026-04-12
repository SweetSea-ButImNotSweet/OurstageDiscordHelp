export default function IdHelpImage() {
    return (
        <div className="relative w-full flex justify-center">
            <div className="relative">
                <div className="absolute -inset-1.5 bg-linear-to-r from-blue-400 to-teal-400 rounded-lg blur opacity-20"></div>
                <img
                    src={`${import.meta.env.BASE_URL}assets/OurstageID.png`}
                    alt="OurStage ID Location"
                    className="relative max-w-full max-h-125 h-auto w-auto block rounded-lg border-4 border-white shadow-lg"
                />
            </div>
        </div>
    );
}
