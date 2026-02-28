"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Paintbrush, PaintBucket, Pipette, Sparkles, Droplets, Droplet, Layers } from "lucide-react";
import logo from "../logo.png";

const icons = [
    { Icon: Palette, color: "text-blue-500", top: "15%", left: "12%" },
    { Icon: Paintbrush, color: "text-black", top: "25%", left: "85%" },
    { Icon: PaintBucket, color: "text-green-600", top: "75%", left: "18%" },
    { Icon: Pipette, color: "text-blue-600", top: "85%", left: "78%" },
    { Icon: Sparkles, color: "text-cyan-500", top: "45%", left: "88%" },
    { Icon: Droplet, color: "text-green-700", top: "20%", left: "65%" },
    { Icon: Droplets, color: "text-orange-500", top: "65%", left: "8%" },
    { Icon: Layers, color: "text-yellow-600", top: "88%", left: "42%" },
    { Icon: Palette, color: "text-purple-500", top: "8%", left: "48%" },
];

export const ModernHero = () => {
    return (
        <div className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-white text-black">
            {/* AI Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            {/* Soft AI Orbs */}
            <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[140px]" />
            <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[140px]" />

            {/* Floating Icons - Subtly colored for white theme */}
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${item.color} hidden md:block opacity-40`}
                    style={{ top: item.top, left: item.left }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.4,
                        scale: 1,
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 6 + Math.random() * 2,
                        repeat: Infinity,
                        delay: index * 0.1
                    }}
                >
                    <item.Icon size={42} />
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="z-20 px-4 sm:px-6 w-full max-w-[100vw] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-20 lg:py-0 lg:gap-24 overflow-hidden box-border">
                {/* Left: Image */}
                <motion.div
                    className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] mt-10 lg:mt-0 flex-shrink-0 max-w-[80vw]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >

                    <div className="relative z-10 w-full h-full bg-white border border-black/[0.03] rounded-full flex items-center justify-center p-2 overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.06)]">
                        <img
                            src={logo.src}
                            alt="PainterG Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right: Text Content */}
                <motion.div
                    className="flex-1 text-center lg:text-left z-20"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                >
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block lg:inline-block">Premium Painting</span>

                    <h1 className="text-[clamp(2.5rem,12vw,12rem)] font-black tracking-tighter mb-6 lg:mb-10 text-black leading-[0.85] overflow-hidden w-full max-w-full break-words">
                        Painter<br className="hidden sm:block" />
                        <span className="text-yellow-500 uppercase">G</span>
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto lg:mx-0 mb-10 md:mb-12 leading-relaxed tracking-tight px-2">
                        Transforming spaces with <span className="text-rose-500 font-semibold">vibrant colors</span>.
                        Elevating environments at the intersection of <span className="italic text-cyan-500">expert craftsmanship</span> and artistic design.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-10 py-5 bg-black text-white font-bold rounded-2xl shadow-xl shadow-black/10 hover:shadow-black/20 transition-all flex items-center justify-center"
                        >
                            Get Estimate
                        </motion.a>

                        <motion.a
                            href="/projects"
                            whileHover={{ scale: 1.02, backgroundColor: "rgb(249 250 251)" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-black/10 text-black font-bold rounded-2xl transition-all text-center flex items-center justify-center"
                        >
                            Our Portfolio
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom transition */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none" />
        </div>
    );
};
