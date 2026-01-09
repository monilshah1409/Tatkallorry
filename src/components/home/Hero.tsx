import Image from "next/image";
import Link from "next/link";
import TechDemo from "./TechDemo";
import Reveal from "../ui/Reveal";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Logistics Truck"
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/80 to-secondary/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-10">
                <div className="text-white space-y-6">
                    <Reveal>
                        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-sm font-medium text-red-200 mb-2">
                            🚀 #1 Logistics Platform in Ceramic Industry
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight">
                            Seamless Logistics, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                                Tech-Enabled.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
                            Connecting manufacturers and transporters with efficiency, transparency, and speed.
                            Experience the future of logistics in Morbi & Pan Gujarat.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/get-quote" className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-red-900/50 transition-all hover:-translate-y-1">
                                Get a Free Quote
                            </Link>
                            <Link href="/services" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm transition-all">
                                Our Services
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="pt-8 flex gap-8 text-sm text-gray-300 border-t border-white/10 mt-8">
                            <div>
                                <span className="block text-2xl font-bold text-white">500+</span>
                                <span>daily Trips</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-white">100%</span>
                                <span>Reliable</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-white">24/7</span>
                                <span>Support</span>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="flex justify-center md:justify-end">
                    <Reveal delay={0.5}>
                        <TechDemo />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
