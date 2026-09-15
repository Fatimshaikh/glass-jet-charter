"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600"
                alt="Private jet on runway at dusk"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sky-top/40 via-transparent to-sky-glow/30" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
                <motion.span
                    className="text-text-soft text-sm tracking-[0.25em] uppercase mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Altura Aviation
                </motion.span>

                <motion.h1
                    className="font-display font-extrabold text-4xl md:text-6xl text-white text-center leading-tight max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    Book in minutes.
                    <br />
                    Fly in hours.
                </motion.h1>

                {/* Floating glass booking panel */}
                <motion.div
                    className="glass-strong rounded-3xl p-6 md:p-8 mt-12 w-full max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-text-soft uppercase tracking-wide">
                                From
                            </label>
                            <input
                                type="text"
                                placeholder="New York (TEB)"
                                className="glass rounded-xl px-4 py-3 text-white placeholder:text-text-soft/60 outline-none focus:ring-2 focus:ring-white/30"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-text-soft uppercase tracking-wide">
                                To
                            </label>
                            <input
                                type="text"
                                placeholder="Miami (OPF)"
                                className="glass rounded-xl px-4 py-3 text-white placeholder:text-text-soft/60 outline-none focus:ring-2 focus:ring-white/30"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-text-soft uppercase tracking-wide">
                                Date
                            </label>
                            <input
                                type="text"
                                placeholder="Select date"
                                className="glass rounded-xl px-4 py-3 text-white placeholder:text-text-soft/60 outline-none focus:ring-2 focus:ring-white/30"
                            />
                        </div>
                        <button className="glass rounded-xl px-4 py-3 font-semibold text-white hover:bg-white/20 transition-colors duration-300">
                            Search Flights
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}