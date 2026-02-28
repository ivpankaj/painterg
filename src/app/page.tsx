import MainLayout from "@/components/MainLayout";
import React from "react";
import { Metadata } from "next";
import { ModernHero } from "@/components/ModernHero";
import { TechMarquee } from "@/components/TechMarquee";
import { BentoSkills } from "@/components/BentoSkills";
import { WorkHighlight } from "@/components/WorkHighlight";
import { ModernContact } from "@/components/ModernContact";

export const metadata: Metadata = {
  title: "PainterG | Transform Your Spaces with Color",
  description: "Experience the art of premium painting with PainterG. Specializing in residential, commercial, and artistic painting services.",
  keywords: ["PainterG", "Painting Services", "House Painting", "Wall Textures", "Interior Design"],
  alternates: {
    canonical: "https://painterg.cookmytech.site/",
  },
  openGraph: {
    title: "PainterG | Transform Your Spaces with Color",
    description: "Experience the art of premium painting with PainterG. Specializing in residential, commercial, and artistic painting services.",
    url: "https://painterg.cookmytech.site/",
    images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "PainterG Header Art" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PainterG | Transform Your Spaces with Color",
    description: "Experience the art of premium painting with PainterG.",
    images: ["/ivpankaj.png"],
  },
};

const Page = () => {
  return (
    <MainLayout>
      <div className="bg-white min-h-screen">
        <ModernHero />
        <TechMarquee />
        <BentoSkills />
        <WorkHighlight />
        <ModernContact />
      </div>
    </MainLayout>
  );
};

export default Page;
