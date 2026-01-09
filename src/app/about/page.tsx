import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
    title: "About Us | Tatkalorry",
    description: "Learn about the visionaries behind Tatkalorry and our mission to transform logistics in the ceramic industry.",
};

export default function About() {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Tatkalorry</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            We are a tech-enabled logistics platform committed to solving the transportation challenges of the Indian Ceramic Industry.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <Reveal>
                        <h2 className="text-3xl font-bold font-heading text-secondary mb-6 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mt-2">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            To act as a vital link connecting the transportation fraternity with manufacturers and dealers, ensuring efficient, timely, and cost-effective delivery of goods.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We aim to empower businesses by streamlining operations, reducing logistics costs, and ensuring seamless movement of goods across Pan Gujarat and beyond.
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="bg-gray-100 h-80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            {/* Placeholder for a generic logistics/vision image if we don't have a specific one, or reuse hero-bg */}
                            <Image src="/hero-bg.png" alt="Mission" fill className="object-cover" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Founders */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="text-3xl font-bold font-heading text-secondary">Meet Our Visionaries</h2>
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Founder 1 */}
                        <Reveal>
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                                <div className="w-40 h-40 relative mb-6 rounded-full overflow-hidden border-4 border-primary">
                                    <Image src="/team-nikita.jpg" alt="Ms. Nikita" fill className="object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary">Ms. Nikita</h3>
                                <p className="text-primary font-bold mb-4">Co-Founder</p>
                                <p className="text-gray-600">
                                    With a passion for business management, Ms. Nikita ventured into logistics to remedy industry loopholes. She visioned Tatkalorry to be the platform that overcomes these challenges through innovation.
                                </p>
                            </div>
                        </Reveal>

                        {/* Founder 2 */}
                        <Reveal delay={0.2}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                                <div className="w-40 h-40 relative mb-6 rounded-full overflow-hidden border-4 border-primary">
                                    <Image src="/team-vinod.jpg" alt="Mr. Vinod" fill className="object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary">Mr. Vinod</h3>
                                <p className="text-primary font-bold mb-4">Co-Founder</p>
                                <p className="text-gray-600">
                                    A veteran with 15+ years in the ceramic and transport industry. He co-founded Tatkalorry to ensure logistics is never an obstacle for business, bringing efficient systems to stakeholders.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
