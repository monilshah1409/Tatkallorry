import Link from "next/link";
import { CheckCircle, MapPin, CreditCard } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
    title: "Pricing & Coverage | Tatkalorry",
    description: "Transparent pricing and Pan-Gujarat coverage details.",
};

export default function Pricing() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Pricing & Coverage</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Transparent pricing models and extensive reach across Gujarat.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">

                    {/* Coverage Area */}
                    <Reveal>
                        <h2 className="text-3xl font-bold font-heading text-secondary mb-6 flex items-center gap-3">
                            <MapPin className="text-primary" /> Coverage Area
                        </h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            We currently provide comprehensive <strong>Pan Gujarat</strong> delivery services. Our network connects major industrial hubs to ensure your ceramic goods reach their market.
                        </p>

                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
                            <h3 className="font-bold text-xl mb-4 text-secondary">Key Hubs & Offices</h3>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {["Ahmedabad", "Surat", "Morbi (Headquarters)", "Rajkot", "Vadodara", "Gandhidham", "Bangalore", "Pune", "Mumbai"].map((city) => (
                                    <li key={city} className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                                        <CheckCircle size={16} className="text-green-500 shrink-0" />
                                        {city}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* Pricing Model */}
                    <Reveal delay={0.2}>
                        <h2 className="text-3xl font-bold font-heading text-secondary mb-6 flex items-center gap-3">
                            <CreditCard className="text-primary" /> Pricing Model
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Our pricing is transparent and competitive, designed to give you the best value for your logistics spend.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 border border-gray-200 rounded-xl hover:border-primary transition-colors">
                                <h3 className="font-bold text-xl text-secondary mb-2">Weight-Based Calculation</h3>
                                <p className="text-gray-600">
                                    Charges are calculated based on the <strong>Greater of Actual Weight or Volumetric Weight</strong>. This ensures fair pricing for both dense and bulky shipments.
                                </p>
                            </div>

                            <div className="p-6 border border-gray-200 rounded-xl hover:border-primary transition-colors">
                                <h3 className="font-bold text-xl text-secondary mb-2">Payment Terms</h3>
                                <p className="text-gray-600">
                                    We currently operate on a <strong>Cash on Delivery (COD)</strong> basis to ensure trust and simplicity in transactions.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="bg-gray-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <h3 className="text-2xl font-bold font-heading text-secondary mb-4">Need a Custom Quote?</h3>
                        <p className="text-gray-600 mb-8">For bulk regular shipments, we offer contract pricing.</p>
                        <Link href="/get-quote" className="btn-primary inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-red-700 transition-colors">
                            Contact Sales
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
