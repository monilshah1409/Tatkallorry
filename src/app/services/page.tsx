import Link from "next/link";
import { Truck, Package, Clock, Shield, Map, Smartphone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";

export const metadata = {
    title: "Our Services | Tatkalorry",
    description: "Explore our comprehensive logistics services including full load, part load, and intra-city deliveries.",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fragile Goods Logistics & Transport",
    "provider": {
        "@type": "Organization",
        "name": "Tatkalorry Private Limited",
        "url": "https://www.tatkalorry.com"
    },
    "areaServed": {
        "@type": "Place",
        "name": "India"
    },
    "description": "Specialized logistics for ceramics, tiles, and sanitary ware with expert packaging and part-load options.",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Logistics Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Part Load (Tiles & Sanitary)",
                    "description": "Flexible part-load logistics from 100 kg to 5,000 kg across India."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Sampling Service",
                    "description": "Architect-focused small-batch deliveries with customized labeling."
                }
            }
        ]
    }
};

const services = [
    {
        icon: Truck,
        title: "Full Load Services",
        desc: "Dedicated trucks for large consignments. Efficient point-to-point delivery ensuring your bulk goods reach their destination safely and on time."
    },
    {
        icon: Package,
        title: "Part Load (LTL)",
        desc: "Cost-effective solutions for smaller shipments. Pay only for the space you use without compromising on delivery speed."
    },
    {
        icon: Map,
        title: "Intra-City Delivery",
        desc: "Comprehensive coverage within city limits. We ensure your goods reach every local corner with our extensive local network."
    },
    {
        icon: Clock,
        title: "Express Delivery",
        desc: "Time-critical shipments? Our optimized routes and priority fleet ensure your urgent parcels are delivered within committed timeframes."
    },
    {
        icon: Shield,
        title: "Safe Handling",
        desc: "Specialized care for ceramic goods. We understand the fragility of your products and ensure zero-damage transportation."
    },
    {
        icon: Smartphone,
        title: "Digital Tracking",
        desc: "End-to-end visibility. Track your shipment status in real-time through our digital interface."
    }
];

export default function Services() {
    return (
        <div className="bg-white">
            <JsonLd data={serviceSchema} />
            {/* Header */}
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Services</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Tailored logistics solutions designed for the unique needs of the Ceramic Industry.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Service Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
                        {services.map((s, i) => (
                            <Reveal key={i} delay={i * 0.1} className="h-full">
                                <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow bg-gray-50 hover:bg-white group h-full">
                                    <div className="w-10 h-10 md:w-16 md:h-16 shrink-0 bg-red-100 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <s.icon size={20} className="md:w-8 md:h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-2xl font-bold font-heading text-secondary mb-2 md:mb-3 leading-tight">{s.title}</h3>
                                        <p className="text-xs md:text-base text-gray-600 leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Ship?</h2>
                        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                            Get a competitive quote today and experience the difference of tech-enabled logistics.
                        </p>
                        <Link href="/get-quote" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block">
                            Request a Quote
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
