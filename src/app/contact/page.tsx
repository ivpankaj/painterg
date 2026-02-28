import MainLayout from "@/components/MainLayout";
import { ModernContact } from "@/components/ModernContact";

export const metadata = {
  title: "Contact | PainterG - Get a Quote",
  description:
    "Let's transform your space. Get in touch with PainterG for premium painting services, consultations, and color advice.",
  keywords: ["Contact PainterG", "Hire Painter", "Painting Quote", "Professional Painting Estimates"],
  alternates: {
    canonical: "https://painterg.cookmytech.site/contact",
  },
  openGraph: {
    title: "Contact | PainterG - Get a Quote",
    description: "Let's transform your space. Get in touch with PainterG for premium painting services.",
    url: "https://painterg.cookmytech.site/contact",
    images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "Contact PainterG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | PainterG",
    description: "Get in touch with PainterG for premium painting services.",
    images: ["/ivpankaj.png"],
  },
};

export default function Contact() {
  return (
    <MainLayout>
      <ModernContact />
    </MainLayout>
  );
}
