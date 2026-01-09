import { Phone, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
    title: "Contact Us | Tatkalorry",
    description: "Get in touch with Tatkalorry for your logistics needs.",
};

export default function Contact() {
    return (
        <div className="bg-white">
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            We are here to help. Reach out to us for orders, inquiries, or support.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <Reveal>
                            <h2 className="text-3xl font-bold font-heading text-secondary mb-6">Get in Touch</h2>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl">
                                <Phone className="text-primary mt-1" size={24} />
                                <div>
                                    <h3 className="font-bold text-lg text-secondary">Phone</h3>
                                    <p className="text-gray-600 mb-1">Call for orders & inquiries</p>
                                    <a href="tel:+919974074074" className="text-xl font-bold text-primary hover:underline">+91 9974074074</a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl">
                                <Mail className="text-primary mt-1" size={24} />
                                <div>
                                    <h3 className="font-bold text-lg text-secondary">Email</h3>
                                    <p className="text-gray-600 mb-1">For general inquiries</p>
                                    <a href="mailto:info@tatkalorry.com" className="text-xl font-bold text-primary hover:underline">info@tatkalorry.com</a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl">
                                <MapPin className="text-primary mt-1" size={24} />
                                <div>
                                    <h3 className="font-bold text-lg text-secondary">Head Office</h3>
                                    <p className="text-gray-600 text-lg">Ahmedabad, Gujarat, India</p>
                                    <p className="text-sm text-gray-500 mt-1">(Also offices in Surat & Morbi)</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.4}>
                        <div className="bg-gray-100 h-full min-h-[400px] rounded-2xl flex items-center justify-center relative overflow-hidden">
                            {/* Map Placeholder */}
                            <div className="text-center text-gray-400">
                                <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                                <p>Map Integration Coming Soon</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
