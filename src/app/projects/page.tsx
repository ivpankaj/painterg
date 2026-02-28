import MainLayout from "@/components/MainLayout";
import { ModernProjects } from "@/components/ModernProjects";

export const metadata = {
  title: "Gallery | PainterG - Painting Projects",
  description:
    "Explore the beautiful transformations by PainterG — Showcasing our best residential, commercial, and mural painting projects.",
  keywords: ["PainterG Gallery", "Painting Projects", "House Transformations", "Commercial Painting Work"],
  alternates: {
    canonical: "https://painterg.cookmytech.site/projects",
  },
  openGraph: {
    title: "Gallery | PainterG - Painting Projects",
    description: "Explore the beautiful transformations by PainterG.",
    url: "https://painterg.cookmytech.site/projects",
    images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "PainterG - Gallery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | PainterG",
    description: "Explore the beautiful transformations by PainterG.",
    images: ["/ivpankaj.png"],
  },
};

export default function ProjectPage() {
  return (
    <MainLayout>
      <ModernProjects />
    </MainLayout>
  );
}
