"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fleet } from "@/data/fleet";

export default function Fleet() {
    return (
        <section className="relative py-24 px-6 md:px-16">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-text-soft text-xs tracking-[0.25em] uppercase">
                    Our Fleet
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3">
                    A jet for every journey
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {fleet.map((jet, i) => (
                    <motion.div
                        key={jet.id}
                        className="glass rounded-3xl overflow-hidden group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.12 }}
                    >
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={jet.image}
                                alt={jet.name}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-sky-top/60 to-transparent" />
                        </div>

                        <div className="p-6">
                            <span className="text-sky-glow text-xs uppercase tracking-widest font-semibold">
                                {jet.class}
                            </span>
                            <h3 className="font-display font-bold text-xl text-white mt-1">
                                {jet.name}
                            </h3>

                            <div className="flex flex-col gap-1 mt-4 text-text-soft text-sm">
                                <span>{jet.passengers}</span>
                                <span>{jet.range}</span>
                            </div>

                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/15">
                                <span className="text-white font-semibold">{jet.price}</span>
                                <button className="glass rounded-full px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors duration-300">
                                    Select
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}