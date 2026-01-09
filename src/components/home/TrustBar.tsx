import Image from "next/image";
import Reveal from "../ui/Reveal";

const logos = [
    { name: "AGL", src: "/logos/agl.png" },
    { name: "Cera", src: "/logos/cera.png" },
    { name: "Joneson", src: "/logos/joneson.png" },
    { name: "Kajaria", src: "/logos/kajaria.png" },
    { name: "Nexion", src: "/logos/nexion.png" },
    { name: "RAK", src: "/logos/rak.png" },
];

export default function TrustBar() {
    return (
        <section className="py-10 bg-gray-50 border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <Reveal>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {logos.map((logo) => (
                            <div key={logo.name} className="relative h-12 w-32">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    className="object-contain mix-blend-multiply"
                                />
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
