"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5"
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="glass rounded-full px-5 py-2.5 flex items-center justify-between w-full max-w-5xl mx-auto">
                <span className="font-display font-bold text-lg text-white">
                    Altura
                </span>

                <div className="hidden md:flex gap-8 font-body text-sm text-text-soft">
                    {["Fleet", "How It Works", "Membership", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <button className="glass-strong rounded-full px-5 py-2 text-sm text-white hover:bg-white/25 transition-colors duration-300">
                    Request a Quote
                </button>
            </div>
        </motion.nav>
    );
}