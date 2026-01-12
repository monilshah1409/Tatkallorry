import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tatkalorry | Redefining Logistics in the Ceramic Industry",
  description: "Tech-enabled logistics platform connecting manufacturers and transporters for efficient ceramic goods delivery.",
  icons: {
    icon: '/logo-wb.png',
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tatkalorry Private Limited",
  "image": "https://www.tatkalorry.com/img/logo.png", // Accessing remote or using local public path if domain known
  "url": "https://www.tatkalorry.com",
  "telephone": "+91-9974074074",
  "email": "info@tatkalorry.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "XYZ Industrial Area, Morbi",
    "addressLocality": "Morbi",
    "addressRegion": "Gujarat",
    "postalCode": "363642",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "₹₹",
  "sameAs": [
    "https://www.linkedin.com/company/tatkalorry",
    "https://www.instagram.com/tatkalorry"
  ]
};

import FloatingCallBtn from "@/components/ui/FloatingCallBtn";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased font-body bg-white text-secondary`}
      >
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <FloatingCallBtn />
        <Footer />
      </body>
    </html>
  );
}
