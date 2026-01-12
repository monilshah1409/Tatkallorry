import { Phone, Clock, UserPlus, Zap, Bell } from "lucide-react";
import Reveal from "../ui/Reveal";

const steps = [
    {
        icon: Phone,
        title: "1. Place an Order",
        desc: "Simply call our dedicated line at +91 9974074074 to initiate your request."
    },
    {
        icon: Clock,
        title: "2. Rapid Processing",
        desc: "Orders for samples, full deliveries, or part loads are processed efficiently within 24 hours."
    },
    {
        icon: UserPlus,
        title: "3. Sign Up",
        desc: "Connect with our customer care to register your business instantly."
    },
    {
        icon: Zap,
        title: "4. Smart Matching",
        desc: "Our platform automatically matches your load with available trucks based on location and type."
    },
    {
        icon: Bell,
        title: "5. Instant Notifications",
        desc: "Receive timely updates via SMS, call, or email as soon as a suitable match is found."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-red-600 rounded-full blur-[100px]" />
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">How It Works</h2>
                        <p className="text-lg md:text-xl text-gray-300">
                            Getting started is straightforward. Follow these simple steps to streamline your logistics.
                        </p>
                    </Reveal>
                </div>

                <div className="flex md:grid md:grid-cols-5 gap-4 relative overflow-x-auto pb-8 snap-x md:pb-0 hide-scrollbar">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/20 -z-10" />

                    {steps.map((step, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="flex flex-col items-center text-center min-w-[200px] snap-center">
                                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-accent mb-4 md:mb-6 shadow-lg shadow-black/20">
                                    <step.icon size={24} className="md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-base md:text-lg font-bold font-heading mb-2 md:mb-3">{step.title}</h3>
                                <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-[200px]">
                                    {step.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
