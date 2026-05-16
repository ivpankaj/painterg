"use client";

import {
  Monitor,
  Presentation,
  Palette,
  Sofa,
  Paintbrush,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: Monitor,
    title: "Book Free Site Visit",
    description:
      "Schedule a free inspection with Painterg and our team will connect with you for project discussion and site analysis.",
  },

  {
    icon: Presentation,
    title: "Consultation & Estimation",
    description:
      "Our experts provide detailed consultation, project planning and the best quotation based on your painting requirements.",
  },

  {
    icon: Palette,
    title: "Choose Colours & Texture",
    description:
      "Select from modern colour combinations, texture finishes and premium wall designs with expert guidance.",
  },

  {
    icon: Sofa,
    title: "Site Preparation",
    description:
      "Before painting starts, our team covers furniture and floors properly to maintain complete cleanliness and safety.",
  },

  {
    icon: Paintbrush,
    title: "Professional Painting",
    description:
      "Painterg painters execute the project using premium materials, modern tools and high-quality finishing techniques.",
  },

  {
    icon: Sparkles,
    title: "Final Handover",
    description:
      "After completion, we clean the site properly and ensure a smooth final handover with premium wall finishing.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#EEEEEE] py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[24px] font-black text-[#1E293B] md:text-[34px]">
            How <span className="text-[#2FA084]">Painterg</span> Works
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-[1.7] text-[#475569]">
            Professional interior painting, exterior painting,
            waterproofing and texture wall finishes across Delhi NCR
            with modern tools and experienced painters.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-[10px] border border-[#d7d7d7] bg-white p-5 transition-colors hover:border-[#2FA084]"
              >
                {/* Top */}
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-[8px] bg-[#1E293B]">
                    <Icon
                      strokeWidth={1.8}
                      className="h-[20px] w-[20px] text-white"
                    />
                  </div>

                  {/* Number */}
                  <div className="text-[28px] font-black leading-none text-[#2FA084]">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-[17px] font-bold leading-snug text-[#1E293B]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.7] text-[#475569]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="h-[44px] rounded-[8px] bg-[#1E293B] px-5 text-[13px] font-bold text-white transition-colors hover:bg-[#2FA084]">
            Get Free Quote
          </button>

          <a
            href="tel:+917048976431"
            className="flex h-[44px] items-center justify-center rounded-[8px] border border-[#1E293B] px-5 text-[13px] font-bold text-[#1E293B] transition-colors hover:bg-[#1E293B] hover:text-white"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}