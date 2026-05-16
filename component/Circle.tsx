"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Get In Touch\nWith PainterG Experts",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Free\nConsultation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Painting Job\nStarts",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Post-Painting\nClean-Up",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "On-Time Site\nHandover",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function PaintingSteps() {
  return (
    <section className="w-full bg-[#f5f5f5] py-8 md:py-10">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-5 lg:px-6">
        {/* Heading */}
        <h2 className="text-center text-[24px] font-light leading-tight text-[#2d2d2d] md:text-[40px]">
          What we can do for you , even more
        </h2>

        {/* Desktop Layout */}
        <div className="mt-10 hidden items-start justify-center lg:flex">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center"
            >
              {/* Step */}
              <div className="flex w-[170px] flex-col items-center text-center">
                {/* Image */}
                <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 whitespace-pre-line text-[16px] font-normal leading-[1.35] text-[#444]">
                  {step.title}
                </h3>
              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="mx-2 mt-[-35px]">
                  <ArrowRight
                    size={28}
                    strokeWidth={1.4}
                    className="text-[#8ca09f]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile + Tablet */}
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:hidden">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full sm:h-[115px] sm:w-[115px]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 whitespace-pre-line text-[14px] leading-[1.4] text-[#444] sm:text-[15px]">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}