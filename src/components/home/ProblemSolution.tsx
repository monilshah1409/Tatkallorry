import { XCircle, CheckCircle } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Problem Side */}
                    <div className="bg-red-50 p-6 md:p-10 rounded-3xl border border-red-100">
                        <Reveal>
                            <h3 className="text-2xl font-bold font-heading text-red-800 mb-6 flex items-center gap-3">
                                <XCircle className="text-red-600" />
                                The Industry Struggle
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                {[
                                    "Consignment delivery limitations",
                                    "Irregular dispatching from manufacturing units",
                                    "Accumulation of unused stock",
                                    "High costs for sampling logistics",
                                    "Consignment booking hassles",
                                    "Complex Intercity & Intra-city Transport"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-red-900/70">
                                        <span className="block w-2 h-2 rounded-full bg-red-400 mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>

                    {/* Solution Side */}
                    <div>
                        <Reveal delay={0.2}>
                            <div className="inline-block bg-blue-100 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                                The Solution
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-6 leading-tight">
                                Bridging the Gap with Technology
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                A team of ceramic industry veterans developed <span className="font-bold text-primary">Tatkalorry</span> to solve these exact headaches. We connect manufacturers, dealers, and transporters on a single tech-enabled platform.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 sm:space-y-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary">Streamlined Operations</h4>
                                        <p className="text-sm text-gray-500">Reduce manual follow-ups and booking chaos.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary">Cost Efficiency</h4>
                                        <p className="text-sm text-gray-500">Optimize loads to save on transport costs.</p>
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
