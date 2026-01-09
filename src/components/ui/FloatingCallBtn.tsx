"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCallBtn() {
    return (
        <motion.a
            href="tel:+919974074074"
            className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-red-700 text-white p-4 rounded-full shadow-lg shadow-red-500/30 flex items-center justify-center pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            aria-label="Call Tatkalorry"
        >
            <Phone size={28} className="animate-pulse" />
        </motion.a>
    );
}
