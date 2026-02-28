"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Box, Cpu, Database, Activity, Palette, Paintbrush, PaintBucket, Sparkles, Layers } from "lucide-react";

const projects = [
    {
        title: "THE GRAND VILLA",
        subtitle: "EXTERIOR EXCELLENCE",
        description: "Complete exterior repainting and masonry coating for a 10,000 sq ft grand villa.",
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/services",
        tech: [
            { name: "Masonry Coating", Icon: PaintBucket },
            { name: "Exterior Paint", Icon: Paintbrush },
            { name: "Sealant", Icon: Layers }
        ]
    },
    {
        title: "MODERN LOFT INTERIOR",
        subtitle: "URBAN LIVING",
        description: "Custom texture painting and high-contrast color scheme for an open-concept living space.",
        image: "https://images.pexels.com/photos/7060799/pexels-photo-7060799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/services",
        tech: [
            { name: "Interior Matte", Icon: Palette },
            { name: "Custom Textures", Icon: Paintbrush },
            { name: "Accent Colors", Icon: Sparkles }
        ]
    },
    {
        title: "CITY HQ PAINTING",
        subtitle: "COMMERCIAL SPACE",
        description: "Large scale interior painting project for a modern 5-story corporate headquarters.",
        image: "https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/services",
        tech: [
            { name: "Commercial Grade", Icon: PaintBucket },
            { name: "Epoxy Finish", Icon: Sparkles },
            { name: "Scale Execution", Icon: Layers }
        ]
    }
];

const lab = [
    {
        title: "VIBRANT MURALS",
        description: "Custom wall art and intricate murals painted by our top artists for unique interior spaces.",
        icon: <Palette size={24} />,
    },
    {
        title: "EPOXY FINISHES",
        description: "Durable and visually stunning epoxy floor coatings tailored for showrooms and garages.",
        icon: <Activity size={24} />,
    }
];

export const ModernProjects = () => {
    return (
        <div className="min-h-screen bg-white text-black pb-32 px-4 sm:px-6 overflow-hidden w-full max-w-[100vw]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-32">
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-8 block">Finished Works</span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-6xl lg:text-9xl font-black mb-6 lg:mb-10 tracking-tighter leading-none"
                    >
                        PROJECT <br /> <span className="text-blue-500 uppercase">Gallery</span>
                    </motion.h1>
                    <div className="w-24 h-1 bg-black rounded-full" />
                </div>

                {/* Project List */}
                <div className="space-y-24 md:space-y-40">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
                        >
                            <div className="lg:w-1/2 w-full">
                                <div className="relative aspect-[16/10] bg-gray-50 border border-black/[0.03] rounded-[48px] overflow-hidden shadow-2xl shadow-black/[0.02]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                                </div>
                            </div>

                            <div className="lg:w-1/2 flex flex-col justify-center">
                                <span className="text-[10px] font-black uppercase tracking-[4px] text-gray-400 mb-6 block">
                                    {project.subtitle}
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 tracking-tighter group-hover:text-gray-500 transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light max-w-xl">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-12">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="flex items-center gap-2 text-[10px] px-4 py-2 rounded-full bg-white border border-black/[0.03] text-black font-black uppercase tracking-widest shadow-sm">
                                            <t.Icon size={12} className="opacity-40" />
                                            {t.name}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={project.link}
                                    className="w-fit flex items-center gap-3 px-10 py-5 bg-black text-white font-black text-xs uppercase tracking-widest rounded-3xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
                                >
                                    View Case Study <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 md:mt-60 border-t border-black/[0.03] pt-16 md:pt-32">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block">Specialized</span>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter">TECHNIQUES</h3>
                        </div>
                        <p className="text-gray-400 text-lg font-light max-w-sm">
                            Showcasing unique texture blending and custom mural solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {lab.map((p, i) => (
                            <div key={i} className="p-8 md:p-12 bg-gray-50/50 border border-black/[0.03] rounded-[32px] md:rounded-[48px] hover:bg-black hover:text-white transition-all duration-500 group">
                                <div className="mb-10 p-5 bg-white rounded-2xl w-fit group-hover:bg-white/10 transition-colors text-black group-hover:text-white shadow-sm">
                                    {p.icon}
                                </div>
                                <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{p.title}</h4>
                                <p className="text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed font-light">{p.description}</p>
                                <div className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black group-hover:text-white">
                                    Status: ACTIVE <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
