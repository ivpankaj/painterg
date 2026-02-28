"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Paintbrush, PaintBucket, Pipette, Sparkles, Droplets, Droplet, Layers } from "lucide-react";

const tech = [
    { name: "Interior Painting", Icon: Paintbrush, color: "text-blue-500" },
    { name: "Exterior Paint", Icon: PaintBucket, color: "text-rose-500" },
    { name: "Color Consult", Icon: Palette, color: "text-green-500" },
    { name: "Wall Texturing", Icon: Layers, color: "text-cyan-500" },
    { name: "Custom Murals", Icon: Paintbrush, color: "text-purple-500" },
    { name: "Residential", Icon: Sparkles, color: "text-yellow-500" },
    { name: "Commercial", Icon: Layers, color: "text-orange-500" },
    { name: "Waterproofing", Icon: Droplets, color: "text-teal-500" },
    { name: "Staining", Icon: Pipette, color: "text-amber-600" },
    { name: "Drywall Repair", Icon: Layers, color: "text-red-500" },
    { name: "Cabinet Painting", Icon: Paintbrush, color: "text-indigo-500" },
    { name: "Furniture Polish", Icon: Sparkles, color: "text-pink-500" },
    { name: "Faux Finishes", Icon: Palette, color: "text-lime-500" },
    { name: "Epoxy Flooring", Icon: Droplet, color: "text-emerald-500" },
    { name: "Wallpapering", Icon: Layers, color: "text-fuchsia-500" },
    { name: "Plastering", Icon: Palette, color: "text-violet-500" },
    { name: "Trim & Molding", Icon: Layers, color: "text-sky-500" },
    { name: "Deck Staining", Icon: PaintBucket, color: "text-rose-600" },
];

export const TechMarquee = () => {
    return (
        <div className="py-16 bg-white border-y border-black/[0.03] overflow-hidden">
            <div className="flex whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 50,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex items-center gap-12 md:gap-24 px-6 md:px-12"
                    >
                        {tech.map((item, idx) => (
                            <div key={`${item.name}-${idx}`} className="flex items-center gap-6 group hover:scale-105 transition-transform duration-300">
                                <item.Icon
                                    size={32}
                                    className={`${item.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                                />
                                <span className={`text-3xl md:text-5xl font-black ${item.color} uppercase transition-colors cursor-default tracking-tighter drop-shadow-sm`}>
                                    {item.name}
                                </span>
                                <span className="text-gray-300 font-light text-2xl">/</span>
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
