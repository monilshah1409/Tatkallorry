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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:space-y-0 md:block md:space-y-8">
                        <Reveal className="sm:col-span-2 md:col-span-1">
                            <h2 className="text-2xl md:text-3xl font-bold font-heading text-secondary mb-4 md:mb-6">Get in Touch</h2>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="flex gap-3 md:gap-4 items-start p-4 md:p-6 bg-gray-50 rounded-xl h-full">
                                <Phone className="text-primary mt-1 shrink-0" size={20} />
                                <div>
                                    <h3 className="font-bold text-base md:text-lg text-secondary">Phone</h3>
                                    <p className="text-xs md:text-base text-gray-600 mb-1">Call for orders & inquiries</p>
                                    <a href="tel:+919974074074" className="text-sm md:text-xl font-bold text-primary hover:underline">+91 9974074074</a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="flex gap-3 md:gap-4 items-start p-4 md:p-6 bg-gray-50 rounded-xl h-full">
                                <Mail className="text-primary mt-1 shrink-0" size={20} />
                                <div>
                                    <h3 className="font-bold text-base md:text-lg text-secondary">Email</h3>
                                    <p className="text-xs md:text-base text-gray-600 mb-1">For general inquiries</p>
                                    <a href="mailto:info@tatkalorry.com" className="text-sm md:text-xl font-bold text-primary hover:underline break-all">info@tatkalorry.com</a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3} className="sm:col-span-2 md:col-span-1">
                            <div className="flex gap-3 md:gap-4 items-start p-4 md:p-6 bg-gray-50 rounded-xl h-full">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                                <div>
                                    <h3 className="font-bold text-base md:text-lg text-secondary">Head Office</h3>
                                    <p className="text-sm md:text-lg text-gray-600">Ahmedabad, Gujarat, India</p>
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">(Also offices in Surat & Morbi)</p>
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
