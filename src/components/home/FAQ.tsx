"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "../ui/Reveal";

const faqs = [
    {
        q: "Where is Tatkalorry based?",
        a: "Tatkalorry is based out of Ahmedabad, Gujarat, and its service is currently available for Pan Gujarat deliveries."
    },
    {
        q: "How do I sign up?",
        a: "You can sign up by calling our customer care number or filling out the contact form."
    },
    {
        q: "How are trucks/loads found?",
        a: "Users input load or truck information. The platform automatically forwards this to other members based on load type, location, destination, and availability, notifying you when a match is found."
    },
    {
        q: "How is pricing calculated?",
        a: "Pricing is calculated based on the exact or volumetric weight (whichever is higher) and the destination."
    },
    {
        q: "What payment methods are accepted?",
        a: "Currently, payment is cash-on-delivery, ensuring a simple and direct transaction."
    },
    {
        q: "Can pick-up addresses be changed?",
        a: "No, pick-up addresses cannot be changed once scheduled; a new booking is required for any modifications."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common questions about our logistics services.</p>
                    </Reveal>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <div
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className="font-bold text-lg text-secondary">{faq.q}</span>
                                    {openIndex === i ? (
                                        <Minus className="text-primary shrink-0" />
                                    ) : (
                                        <Plus className="text-gray-400 shrink-0" />
                                    )}
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
