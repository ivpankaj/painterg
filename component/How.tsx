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
    title: "Schedule an appointment",
    description:
      "Fill the form online and with your details, following which, you will receive a call from our customer care executive to schedule an appointment for our Asian Paints Beautiful Homes Painting Service.",
  },
  {
    icon: Presentation,
    title: "Product & site consultation",
    description:
      "Our Asian Paints Beautiful Homes Painting Service Associate will get in touch with you. The associate will assist with all your queries, and provide a product and site consultation.",
  },
  {
    icon: Palette,
    title: "Selection of colour",
    description:
      "Asian Paints Beautiful Homes Painting Service offers a curated selection of our favourite beautiful homes painting colours for you to choose from. Our expert will help you finalize the colours.",
  },
  {
    icon: Sofa,
    title: "Work start day",
    description:
      "Post finalizing the colours, we prepare the site by laying plastic over the floors & furniture in the required space. Disinfection of the site is also carried out before the final handover.",
  },
  {
    icon: Paintbrush,
    title: "Site Execution",
    description:
      "We use a well-established execution process with a robust project management framework to ensure a high quality, on time execution of your home interior design!",
  },
  {
    icon: Sparkles,
    title: "Site handover",
    description:
      "Once the site is ready, we do a post-painting clean-up & home disinfection service and will give you a walkthrough of how to take care of your walls.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#f5f5f5] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-center text-[28px] font-bold text-black md:text-[40px]">
          How it works?
        </h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:mt-14 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                {/* Icon */}
                <div className="flex h-[52px] w-[52px] min-w-[52px] items-center justify-center">
                  <Icon
                    strokeWidth={1.6}
                    className="h-[42px] w-[42px] text-[#7551A8]"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[20px] font-bold leading-snug text-[#2d2d2d]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-[1.55] text-[#555]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}