"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rohit Sharma, Gurugram",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description:
      "Painterg completely transformed our apartment with premium texture finishes and smooth wall painting. The team was professional, punctual and maintained complete cleanliness during the project.",
    featured: true,
  },
  {
    id: 2,
    name: "Anjali Verma, Noida",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    description:
      "The colour consultation provided by Painterg was amazing. Their experts helped us choose modern shades that made our home look luxurious and elegant.",
  },
  {
    id: 3,
    name: "Karan Mehta, Delhi",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop",
    description:
      "Very satisfied with the waterproofing and exterior painting service. The finish quality and professionalism exceeded our expectations.",
  },
  {
    id: 4,
    name: "Priya Malhotra, Faridabad",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    description:
      "Painterg completed our office painting project before deadline and the results were outstanding. Highly recommended for commercial painting work.",
  },
  {
    id: 5,
    name: "Amit Chauhan, Ghaziabad",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    description:
      "Loved the texture wall designs and premium finish. Their painters are highly skilled and the pricing was also very reasonable.",
  },
  {
    id: 6,
    name: "Neha Kapoor, South Delhi",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description:
      "From free site inspection to final handover, the complete process was smooth and hassle-free. Painterg is one of the best painting services in Delhi NCR.",
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9d9d9] bg-white transition hover:bg-[#2FA084] hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9d9d9] bg-white transition hover:bg-[#2FA084] hover:text-white"
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
                  ? "bg-[#2FA084] text-white"
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

         
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Buttons */}
        <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={() => scroll("left")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9d9d9] bg-white transition hover:bg-[#2FA084] hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9d9d9] bg-white transition hover:bg-[#2FA084] hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}