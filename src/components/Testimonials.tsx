"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

const testimonials = [
    {
        name: "Alex Johnson",
        username: "@alexj_home",
        body: "PainterG transformed our living room! The attention to detail and color matching was absolutely flawless.",
        img: "https://avatar.vercel.sh/alex",
    },
    {
        name: "Sarah Williams",
        username: "@sarah_w",
        body: "Working with PainterG was a breeze. They understood our vision perfectly and the end result exceeded our expectations.",
        img: "https://avatar.vercel.sh/sarah",
    },
    {
        name: "David Chen",
        username: "@davidc_bldg",
        body: "I was impressed by their efficiency. They completely repainted our office space over the weekend with zero business disruption.",
        img: "https://avatar.vercel.sh/david",
    },
    {
        name: "Emily Davis",
        username: "@emily_d",
        body: "Highly recommend PainterG for any interior work. They are professional, communicative, and very skilled painters.",
        img: "https://avatar.vercel.sh/emily",
    },
    {
        name: "Michael Brown",
        username: "@mike_b",
        body: "The custom mural they designed for our cafe is stunning. Our customers love the new vibrant art and atmosphere.",
        img: "https://avatar.vercel.sh/michael",
    },
    {
        name: "Lisa Wilson",
        username: "@lisa_w",
        body: "PainterG is a true professional service. They helped us choose the perfect weather-resistant paints for our exterior.",
        img: "https://avatar.vercel.sh/lisa",
    },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width={32} height={32} alt={name} src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300">{body}</blockquote>
        </figure>
    );
};

export function Testimonials() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden py-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
                What People Say
            </h2>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
        </div>
    );
}
