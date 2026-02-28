"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Palette,
    Paintbrush,
    PaintBucket,
    Sparkles,
    ShieldCheck,
    ArrowRight,
    Layers
} from "lucide-react";

const services = [
    {
        title: "RESIDENTIAL PAINTING",
        description: "Transforming homes with premium interior and exterior painting services designed for elegance and durability.",
        icon: <Paintbrush size={32} />,
        features: ["Interior Painting", "Exterior Coating", "Color Consultation"],
        color: "text-blue-500",
    },
    {
        title: "COMMERCIAL PAINTING",
        description: "Scaling our visual aesthetic to commercial workspaces. Delivering professional, long-lasting finishes with minimal business disruption.",
        icon: <PaintBucket size={32} />,
        features: ["Office Spaces", "Retail Stores", "Industrial Coatings"],
        color: "text-purple-500",
    },
    {
        title: "CUSTOM MURALS",
        description: "Hand-painted custom murals and artistic decorations tailored to make your walls tell a unique story.",
        icon: <Palette size={32} />,
        features: ["Wall Texturing", "Street Art", "Bespoke Designs"],
        color: "text-rose-500",
    },
    {
        title: "SURFACE PROTECTION",
        description: "Advanced waterproofing, wood staining, and epoxy floor coatings to protect and beautify all your important surfaces.",
        icon: <ShieldCheck size={32} />,
        features: ["Waterproofing", "Epoxy Flooring", "Wood Staining"],
        color: "text-emerald-500",
    }
];

export const ModernServices = () => {
    return (
        <div className="min-h-screen bg-white text-black pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Sub-section */}
                <div className="mb-32">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8 block">Our Capabilities</span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none"
                    >
                        PAINTING <br /> <span className="text-rose-500">SERVICES</span>
                    </motion.h1>
                    <p className="text-gray-400 text-xl font-light max-w-2xl leading-relaxed tracking-tight">
                        Delivering unparalleled craftsmanship for residential, commercial, and
                        <span className="text-black font-semibold uppercase ml-1">custom artistic projects</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-12 bg-white hover:bg-black border border-black/[0.05] rounded-[56px] overflow-hidden transition-all duration-500 flex flex-col justify-between shadow-lg"
                        >
                            <div className="relative z-10 transition-colors duration-500">
                                <div className={`mb-10 p-5 bg-gray-50 rounded-2xl w-fit shadow-sm group-hover:bg-[#111] transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3 ${service.color}`}>
                                    {service.icon}
                                </div>

                                <h2 className={`text-3xl font-black mb-6 tracking-tighter uppercase ${service.color}`}>
                                    {service.title}
                                </h2>

                                <p className="text-gray-500 text-lg mb-12 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 gap-4">
                                    {service.features.map((f) => (
                                        <div key={f} className={`flex items-center gap-4 text-[10px] font-black uppercase tracking-[3px] text-gray-800 group-hover:text-gray-200 transition-colors`}>
                                            <div className={`w-2 h-px bg-current shadow-[0_0_8px_currentColor] ${service.color}`} />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 mt-20 pt-10 border-t border-black/[0.05] group-hover:border-white/20 flex items-center justify-between text-black group-hover:text-white transition-colors">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white/60">Service {index + 1}</span>
                                <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest group/btn">
                                    LEARN MORE <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Integration Protocol */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-60 rounded-[64px] bg-black p-12 md:p-24 text-white overflow-hidden relative shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-8 origin-left transform hover:scale-105 transition-transform duration-300">
                                <span className="font-black text-3xl tracking-tighter text-white uppercase drop-shadow-md">Painter</span>
                                <span className="font-black text-3xl tracking-tighter text-yellow-500 uppercase drop-shadow-md">G</span>
                            </div>

                            <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none drop-shadow-lg">
                                LET'S <span className="text-yellow-500">PAINT</span> <br /> YOUR VISION!
                            </h3>
                            <p className="text-gray-300 text-xl font-light leading-relaxed">
                                Get in touch with us to schedule a color consultation and begin your space's transformation. Let our expert artists bring vibrant colors to your life.
                            </p>
                        </div>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 bg-white text-black font-black text-sm uppercase tracking-[0.3em] rounded-3xl shadow-xl hover:shadow-2xl hover:bg-yellow-500 transition-all text-center whitespace-nowrap"
                        >
                            Get an Estimate
                        </motion.a>
                    </div>
                    {/* Background Light Effect */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-[120px] pointer-events-none"
                    />
                </motion.div>
            </div>
        </div>
    );
};
