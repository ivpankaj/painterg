import MainLayout from "@/components/MainLayout";
import { ModernAbout } from "@/components/ModernAbout";

export const metadata = {
  title: "About | PainterG - Professional Painters",
  description:
    "Learn more about PainterG — Masters in transforming houses into beautiful homes with our exceptional painting services.",
  keywords: ["About PainterG", "Professional Painters", "Painting Company History", "Color Experts"],
  alternates: {
    canonical: "https://painterg.cookmytech.site/about",
  },
  openGraph: {
    title: "About | PainterG - Professional Painters",
    description: "Learn more about PainterG — Masters in transforming houses into beautiful homes with our exceptional painting services.",
    url: "https://painterg.cookmytech.site/about",
    images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "PainterG - About" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | PainterG",
    description: "Learn more about PainterG — Masters in transforming houses into beautiful homes.",
    images: ["/ivpankaj.png"],
  },
};

export default function AboutPage() {
  return (
    <MainLayout>
      <ModernAbout />
    </MainLayout>
  );
}
