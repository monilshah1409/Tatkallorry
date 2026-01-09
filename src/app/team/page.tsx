import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
    title: "Our Team | Tatkalorry",
    description: "Meet the experts driving innovation at Tatkalorry.",
};

export default function Team() {
    return (
        <div className="bg-white">
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Team</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Experienced professionals dedicated to excellence in logistics.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    {/* Founders */}
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
                        <Reveal>
                            <div className="text-center group">
                                <div className="w-48 h-48 mx-auto relative rounded-full overflow-hidden border-4 border-gray-100 shadow-lg group-hover:border-primary transition-colors mb-6">
                                    <Image src="/team-nikita.jpg" alt="Ms. Nikita" fill className="object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-secondary">Ms. Nikita</h3>
                                <p className="text-primary font-bold">Co-Founder</p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="text-center group">
                                <div className="w-48 h-48 mx-auto relative rounded-full overflow-hidden border-4 border-gray-100 shadow-lg group-hover:border-primary transition-colors mb-6">
                                    <Image src="/team-vinod.jpg" alt="Mr. Vinod" fill className="object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-secondary">Mr. Vinod</h3>
                                <p className="text-primary font-bold">Co-Founder</p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Values / Culture */}
                    <div className="max-w-4xl mx-auto text-center bg-gray-50 p-12 rounded-3xl">
                        <Reveal>
                            <h2 className="text-3xl font-bold font-heading text-secondary mb-6">Our Culture</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                We believe in a culture of <strong>Innovation, Transparency, and Customer-Centricity</strong>.
                                Our team is further strengthened by other experienced professionals bringing diverse expertise
                                from various fields to ensure robust and forward-thinking logistics solutions.
                            </p>
                            <p className="text-gray-500 italic">&quot;Logistics should not be an obstacle, but an accelerator for business.&quot;</p>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
