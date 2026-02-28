"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Palette, Zap, Shield, Paintbrush } from "lucide-react";

const bentoItems = [
    {
        title: "PREMIUM QUALITY",
        description: "Using only the finest paints for durability, rich texture, and a vibrant finish.",
        icon: <Sparkles size={32} className="text-yellow-500 drop-shadow-sm" />,
        className: "md:col-span-2 md:row-span-2 bg-gray-50",
        visual: (
            <div className="absolute right-[-5%] top-10 w-[55%] h-[75%] bg-white rounded-l-2xl border border-black/5 shadow-sm p-5 flex flex-col gap-3 overflow-hidden transition-transform duration-500 group-hover:-translate-x-3">
                <div className="flex gap-2 mb-2">
                    <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-red-400"></motion.div>
                    <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="w-2.5 h-2.5 rounded-full bg-yellow-400"></motion.div>
                    <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="w-2.5 h-2.5 rounded-full bg-green-400"></motion.div>
                </div>
                <motion.div animate={{ scaleX: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} className="w-full h-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-sm origin-left"></motion.div>
                <motion.div animate={{ scaleX: [0.9, 1, 0.9] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="w-4/5 h-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-sm origin-left"></motion.div>
                <div className="w-full h-20 bg-gray-50 rounded-sm mt-auto border border-gray-100 flex flex-col gap-2 p-2 relative overflow-hidden">
                    <motion.div animate={{ y: [-20, 40] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-100/50 to-transparent" />
                    <div className="w-1/2 h-2 bg-gray-200 rounded-sm z-10"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded-sm z-10"></div>
                </div>
            </div>
        )
    },
    {
        title: "COLOR HARMONY",
        description: "Expert consultation to find the perfect palette for your unique space.",
        icon: <Palette size={24} className="text-indigo-500 drop-shadow-sm" />,
        className: "md:col-span-1 md:row-span-1 bg-gray-50/50",
        visual: (
            <div className="absolute right-6 top-[45%] -translate-y-1/2 flex items-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div animate={{ height: ["40px", "60px", "40px"] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 bg-green-400 rounded-t-sm origin-bottom"></motion.div>
                <motion.div animate={{ height: ["24px", "48px", "24px"] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-3 bg-blue-400 rounded-t-sm origin-bottom"></motion.div>
                <motion.div animate={{ height: ["56px", "32px", "56px"] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }} className="w-3 bg-indigo-400 rounded-t-sm origin-bottom"></motion.div>
                <motion.div animate={{ height: ["32px", "50px", "32px"] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.1 }} className="w-3 bg-purple-400 rounded-t-sm origin-bottom"></motion.div>
            </div>
        )
    },
    {
        title: "SWIFT EXECUTION",
        description: "Efficient workflows that respect your home and minimize disruption.",
        icon: <Zap size={24} className="text-orange-500 drop-shadow-sm" />,
        className: "md:col-span-1 md:row-span-1 bg-gray-50/50",
        visual: (
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-br from-orange-400/30 via-yellow-400/20 to-rose-400/30 rounded-full blur-[24px]"
            ></motion.div>
        )
    },
    {
        title: "LASTING PROTECTION",
        description: "Weather-resistant treatments for enduring exterior beauty.",
        icon: <Shield size={24} className="text-teal-500 drop-shadow-sm" />,
        className: "md:col-span-1 md:row-span-2 bg-gray-50",
        visual: (
            <div className="absolute right-6 top-[40%] flex flex-col gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-20 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></motion.div>
                <motion.div animate={{ x: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="w-16 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></motion.div>
                <motion.div animate={{ x: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.2 }} className="w-24 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></motion.div>
            </div>
        )
    },
    {
        title: "FLAWLESS FINISH",
        description: "Meticulous surface prep work for seamlessly smooth and elegant walls.",
        icon: <Paintbrush size={24} className="text-rose-500 drop-shadow-sm" />,
        className: "md:col-span-2 md:row-span-1 bg-gray-50/50",
        visual: (
            <div className="absolute right-12 top-1/2 -translate-y-1/2 flex items-center gap-4 opacity-80 group-hover:scale-105 transition-transform duration-500">
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] border-2 border-white"></motion.div>
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.3 }} className="w-16 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(56,189,248,0.5)] border-2 border-white"></motion.div>
                <motion.div animate={{ y: [0, -8, 0], rotate: [12, -12, 12] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.6 }} className="w-10 h-10 rounded-xl transform rotate-12 bg-gradient-to-br from-yellow-400 to-orange-500 shadow-[0_0_15px_rgba(250,204,21,0.5)] border-2 border-white"></motion.div>
            </div>
        )
    }
];

export const BentoSkills = () => {
    return (
        <div className="bg-white overflow-hidden w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-16 md:mb-24 flex flex-col items-center">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4 px-4 py-1.5 border border-black/5 rounded-full">Our Expertise</span>
                    <h2 className="text-4xl md:text-8xl font-black text-black mb-6 md:mb-8 tracking-tighter text-center">ARTISTIC <span className="text-blue-500">VISION</span></h2>
                    <div className="w-20 h-1 bg-black rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[220px]">
                    {bentoItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`
                relative group rounded-[32px] border border-black/[0.03] overflow-hidden
                p-8 md:p-10 flex flex-col justify-end ${item.className}
                hover:border-black/10 transition-colors shadow-[0_4px_20px_rgb(0,0,0,0.02)]
              `}
                        >
                            <div className="absolute top-10 left-10 transition-transform duration-500 group-hover:scale-110">
                                {item.icon}
                            </div>

                            {item.visual && item.visual}

                            <div className="relative z-10 w-[85%] md:w-2/3">
                                <h3 className="text-sm font-black text-black mb-2 uppercase tracking-widest">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>

                            {/* Subtle Background pattern */}
                            <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
