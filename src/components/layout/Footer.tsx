import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading mb-4">Tatkalorry</h3>
                        <p className="max-w-md text-white/90">
                            Redefining logistics in the Ceramic Industry with technology,
                            efficiency, and reliability.
                        </p>
                    </div>

                    <div className="flex gap-6 items-center">
                        {/* Footer Logos */}
                        <div>
                            <Image src="/digitalindia.png" alt="Digital India" width={80} height={40} className="object-contain h-12 w-auto" />
                        </div>
                        <div>
                            <Image src="/startupindia.png" alt="Startup India" width={80} height={40} className="object-contain h-12 w-auto" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 flex flex-col md:text-left text-center md:flex-row justify-between items-center gap-4 text-sm text-white/90 transition-opacity">
                    <p>&copy; {new Date().getFullYear()} Tatkalorry. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white hover:underline transition-all">Privacy Policy</Link>
                        <Link href="/disclaimer" className="hover:text-white hover:underline transition-all">Disclaimer</Link>
                    </div>
                    <p className="text-xs opacity-75">Jurisdiction: Ahmedabad Courts</p>
                </div>
            </div>
        </footer>
    );
}
