const CompanyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl max-h-[95vh] overflow-y-auto scrollbar-hide rounded-2xl border border-sky-400/30 bg-slate-900 shadow-2xl"
            >
                {/* Header */}
                <div className="border-b border-slate-700 p-8 text-center relative">

                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 text-slate-400 hover:text-white text-2xl"
                    >
                        ✕
                    </button>

                    <h2 className="text-4xl font-bold text-white">
                        Av_eSAFE <span className="text-sky-400">Hub</span>
                    </h2>

                    <p className="text-slate-400 mt-2">
                        Innovation • Automation • Intelligence
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-8 text-sm">

                        <div>
                            <p className="text-slate-500">Founder</p>
                            <p className="text-white font-semibold">
                                Abhinav Utkarsh
                            </p>
                        </div>

                        <div>
                            <p className="text-slate-500">Status</p>
                            <p className="text-green-400 font-semibold">
                                ● Active Company
                            </p>
                        </div>

                        <div>
                            <p className="text-slate-500">Founded</p>
                            <p className="text-white font-semibold">
                                2023
                            </p>
                        </div>

                    </div>
                </div>

                {/* About */}
                <div className="p-8 border-b border-slate-700">

                    <h3 className="text-2xl font-bold text-white mb-4">
                        About Company
                    </h3>

                    <p className="text-slate-400 leading-8">
                        Av_eSAFE is an innovation-driven software company focused on
                        Artificial Intelligence, Automation, Enterprise Solutions,
                        Educational Technology, and Digital Transformation.
                        Our mission is to build intelligent products that solve
                        real-world business and learning challenges.
                    </p>

                </div>

                {/* Products */}
                <div className="p-8 border-b border-slate-700">

                    <h3 className="text-2xl font-bold text-white mb-6">
                        🚀 Flagship Products
                    </h3>

                    <div className="space-y-4">

                        <a
                            href="https://divya-lok.co.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-xl border border-slate-700 p-4 hover:border-sky-400 transition"
                        >
                            🤖 Divya Lok (Spiritual Platform)
                        </a>

                        <a
                            href="https://avesafegurukul.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-xl border border-slate-700 p-4 hover:border-sky-400 transition"
                        >
                            🎓 Av_eSAFE Gurukul
                        </a>

                        <a
                            href="https://avesafechronoscope.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-xl border border-slate-700 p-4 hover:border-sky-400 transition"
                        >
                            🕒 Chronoscope
                        </a>

                        <div className="rounded-xl border border-slate-700 p-4">
                            💼 Custom Business Solutions
                        </div>

                    </div>

                </div>

                {/* Technologies */}
                <div className="p-8 border-b border-slate-700">

                    <h3 className="text-2xl font-bold text-white mb-5">
                        Technologies
                    </h3>

                    <div className="flex flex-wrap gap-3">

                        {[
                            "React",
                            "Node.js",
                            "Java",
                            "Spring Boot",
                            "Selenium",
                            "GenAI",
                            "Tailwind",
                            "SQL",
                            "Git",
                            "JavaScript"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sky-400"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                </div>

                {/* Mission */}
                <div className="p-8 border-b border-slate-700">

                    <h3 className="text-2xl font-bold text-white mb-4">
                        Mission
                    </h3>

                    <p className="text-slate-400 italic">
                        Building intelligent digital products that empower
                        businesses, professionals, and learners.
                    </p>

                </div>

                {/* Footer */}
                <div className="p-8 flex justify-center gap-4">

                    <a
                        href="https://avesafe.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600"
                    >
                        Visit Website →
                    </a>

                    <button
                        onClick={onClose}
                        className="px-6 py-3 rounded-xl border border-slate-600 text-white"
                    >
                        Close
                    </button>

                </div>

            </div>
        </div>
    );
};

export default CompanyModal;
