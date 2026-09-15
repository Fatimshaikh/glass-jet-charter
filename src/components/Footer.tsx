"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative px-6 md:px-16 pb-16 pt-8">
            <motion.div
                className="glass rounded-3xl max-w-6xl mx-auto p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div>
                    <h3 className="font-display font-bold text-2xl text-white">
                        Altura
                    </h3>

                    <p className="text-text-soft text-sm mt-2 max-w-xs">
                        On-demand private aviation, available in 900+ cities worldwide.
                    </p>
                </div>

                <div className="flex gap-6 text-sm text-text-soft">
                    {["Fleet", "Membership", "Safety", "Contact"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </motion.div>

            <p className="text-center text-text-soft text-xs mt-6">
                © {new Date().getFullYear()} Altura Aviation. Built with Next.js,
                TypeScript, Tailwind & Framer Motion.
            </p>
        </footer>
    );
}