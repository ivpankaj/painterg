"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Anurag Singh, Ghaziabad",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description:
      "I chose Asian Paints Beautiful Homes Painting Services during COVID and the supervisor was very cooperative with us.",
    featured: true,
  },
  {
    id: 2,
    name: "Baljit Singh, Amritsar",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    description:
      "The wallpaper suggestions and overall service quality were excellent and transformed our office beautifully.",
  },
  {
    id: 3,
    name: "Jaison Jose, Kerala",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop",
    description:
      "We are very satisfied with the colour combinations and professional service provided by the team.",
  },
  {
    id: 4,
    name: "Rahul Verma, Delhi",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    description:
      "The painters completed the project on time and maintained cleanliness throughout the work.",
  },
  {
    id: 5,
    name: "Amanpreet Kaur, Punjab",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    description:
      "Amazing experience with texture designs and colour consultation. Highly recommended service.",
  },
  {
    id: 6,
    name: "Rohit Sharma, Mumbai",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description:
      "The entire process from consultation to handover was smooth and professionally managed.",
  },
];

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-10 md:py-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="relative mb-8 flex items-center justify-center">
          <h2 className="text-center text-[26px] font-bold text-[#222] md:text-[40px]">
            Customer Testimonials
          </h2>

          {/* Desktop Buttons */}
          <div className="absolute right-0 hidden items-center gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9d9d9] bg-white transition hover:bg-[#4b1f8f] hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9d9d9] bg-white transition hover:bg-[#4b1f8f] hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`min-h-[430px] min-w-[280px] max-w-[280px] snap-start overflow-hidden md:min-w-[320px] md:max-w-[320px] ${
                item.featured
                  ? "bg-[#4b1f8f] text-white"
                  : "bg-[#eeeeee] text-[#333]"
              }`}
            >
              {/* Image */}
              <div className="relative h-[180px] w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex min-h-[250px] flex-col p-5">
                <h3
                  className={`text-[16px] italic ${
                    item.featured ? "text-white" : "text-[#555]"
                  }`}
                >
                  {item.name}
                </h3>

                <p
                  className={`mt-4 text-[15px] leading-[1.6] ${
                    item.featured ? "text-white" : "text-[#3f3f3f]"
                  }`}
                >
                  {item.description}
                </p>

                {/* Bottom */}
                {item.featured && (
                  <div className="mt-auto flex items-center justify-end gap-2 pt-6">
                    <button className="border-b border-white text-[12px] font-semibold tracking-wide">
                      CLICK TO EXPAND
                    </button>

                    <Expand size={16} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Buttons */}
        <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={() => scroll("left")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9d9d9] bg-white transition hover:bg-[#4b1f8f] hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9d9d9] bg-white transition hover:bg-[#4b1f8f] hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}