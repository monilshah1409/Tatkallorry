import { XCircle, CheckCircle } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-2 md:gap-12 lg:gap-24 items-start md:items-center">
                    {/* Problem Side */}
                    <div className="bg-red-50 p-3 md:p-10 rounded-2xl md:rounded-3xl border border-red-100 h-full">
                        <Reveal>
                            <h3 className="text-sm md:text-2xl font-bold font-heading text-red-800 mb-3 md:mb-6 flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3">
                                <XCircle className="text-red-600 w-5 h-5 md:w-8 md:h-8" />
                                The Industry Struggle
                            </h3>
                            <ul className="grid grid-cols-1 gap-2">
                                {[
                                    "Consignment delivery limitations",
                                    "Irregular dispatching",
                                    "Accumulation of unused stock",
                                    "High costs for sampling",
                                    "Consignment booking hassles",
                                    "Transport Complexities"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-1.5 text-red-900/70 text-[10px] md:text-base leading-tight">
                                        <span className="block w-1 h-1 rounded-full bg-red-400 mt-1 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>

                    {/* Solution Side */}
                    <div className="h-full py-2">
                        <Reveal delay={0.2}>
                            <div className="inline-block bg-blue-100 text-primary px-2 py-0.5 md:px-4 md:py-1 rounded-full text-[10px] md:text-sm font-bold mb-2 md:mb-4 uppercase tracking-wider">
                                The Solution
                            </div>
                            <h2 className="text-sm md:text-5xl font-bold font-heading text-secondary mb-2 md:mb-6 leading-tight">
                                Bridging the Gap <span className="hidden md:inline">with Technology</span>
                            </h2>
                            <p className="text-[10px] md:text-lg text-gray-600 mb-4 md:mb-8 leading-snug">
                                <span className="font-bold text-primary">Tatkalorry</span> connects manufacturers, dealers, & transporters.
                            </p>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-start gap-2 md:gap-4">
                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <CheckCircle size={16} className="md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary text-xs md:text-base">Streamlined Ops</h4>
                                        <p className="text-[10px] md:text-sm text-gray-500 leading-tight">Less chaos.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 md:gap-4">
                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <CheckCircle size={16} className="md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary text-xs md:text-base">Cost Efficiency</h4>
                                        <p className="text-[10px] md:text-sm text-gray-500 leading-tight">Save costs.</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
