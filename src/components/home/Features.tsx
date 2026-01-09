import { Truck, RotateCcw, Box, Map, Smartphone, ShieldCheck } from "lucide-react";
import Reveal from "../ui/Reveal";

const features = [
    {
        icon: Truck,
        title: "Load Flexibility",
        desc: "Full load or part load? We handle both with equal efficiency and care."
    },
    {
        icon: RotateCcw,
        title: "Easy Returns",
        desc: "Seamless process for returning unused stock, reducing inventory headaches."
    },
    {
        icon: Box,
        title: "Affordable Sampling",
        desc: "Send samples without breaking the bank. Cost-effective logistics for quality checks."
    },
    {
        icon: Smartphone,
        title: "Tech-Enabled Booking",
        desc: "Book, track, and manage shipments instantly via our web platform."
    },
    {
        icon: Map,
        title: "Pan Gujarat & Intra-City",
        desc: "Comprehensive coverage across Gujarat and detailed intra-city delivery network."
    },
    {
        icon: ShieldCheck,
        title: "Reliable Tracking",
        desc: "Real-time updates so you never have to worry where your goods are."
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">Why Choose Tatkalorry?</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-gray-600">Addressing the ceramic industry&apos;s logistical hurdles with innovative, tech-driven solutions.</p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="p-8 h-full rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-secondary mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
