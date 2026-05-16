"use client";

import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Wall Textures",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description:
      "High-quality textured designs to get a modern facelift for your homes and other spaces.",
  },
  {
    id: 2,
    title: "Wallpapers",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    description:
      "Designer wallpapers with attractive patterns which works wonders in elevating house walls.",
  },
  {
    id: 3,
    title: "Waterproofing",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    description:
      "Devised modern waterproofing techniques to make your home water resistant for years to come.",
  },
  {
    id: 4,
    title: "Wood Finishes",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    description:
      "Preserve the beauty of your wood with a touch of style and luxury that goes hand in hand.",
  },
];

export default function HelpSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-8 md:py-10">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-5 lg:px-6">
        {/* Heading */}
        <h2 className="mb-8 text-[26px] font-bold text-[#1d1d1d] md:mb-10 md:text-[40px]">
          We help you with
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((item) => (
            <div key={item.id} className="w-full">
              {/* Image */}
              <div className="relative h-[180px] w-full overflow-hidden md:h-[190px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="text-[18px] font-bold text-[#1f1f1f]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] leading-[1.7] text-[#444]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}