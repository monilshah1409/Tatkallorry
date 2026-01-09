"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="relative h-24 w-60 block">
                    <Image
                        src="/logo.png"
                        alt="Tatkalorry Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {[
                        ["Home", "/"],
                        ["About", "/about"],
                        ["Services", "/services"],
                        ["Pricing", "/pricing"],
                        ["Team", "/team"],
                        ["Contact", "/contact"],
                    ].map(([name, href]) => (
                        <Link
                            key={name}
                            href={href}
                            className="text-secondary font-semibold hover:text-primary transition-colors relative group text-sm uppercase tracking-wide"
                        >
                            {name}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/get-quote"
                        className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-transform hover:-translate-y-0.5 shadow-lg shadow-red-200 text-sm"
                    >
                        Get Quote
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-secondary"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            {[
                                ["Home", "/"],
                                ["About", "/about"],
                                ["Services", "/services"],
                                ["Pricing", "/pricing"],
                                ["Team", "/team"],
                                ["Contact", "/contact"],
                            ].map(([name, href]) => (
                                <Link
                                    key={name}
                                    href={href}
                                    className="text-secondary font-semibold text-lg py-2 border-b border-gray-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {name}
                                </Link>
                            ))}
                            <Link
                                href="/get-quote"
                                className="bg-primary text-white text-center py-3 rounded-lg font-bold mt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Quote
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
