import MainLayout from "@/components/MainLayout";
import { ModernServices } from "@/components/ModernServices";

export const metadata = {
  title: "Services | PainterG - Painting Solutions",
  description:
    "Explore the professional painting services offered by PainterG — Expertise in interior, exterior, commercial, and custom decorative painting.",
  keywords: ["Painting Services", "Hire Painters Noida", "Best Painting Contractors", "Wall Textures", "Exterior Painting"],
  alternates: {
    canonical: "https://painterg.cookmytech.site/services",
  },
  openGraph: {
    title: "Services | PainterG - Painting Solutions",
    description: "Explore the professional painting services offered by PainterG.",
    url: "https://painterg.cookmytech.site/services",
    images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "PainterG - Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | PainterG",
    description: "Explore the professional painting services offered by PainterG.",
    images: ["/ivpankaj.png"],
  },
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <ModernServices />
    </MainLayout>
  );
}
