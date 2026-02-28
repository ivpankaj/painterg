import MainLayout from "@/components/MainLayout";
import { BentoSkills } from "@/components/BentoSkills";
import { TechMarquee } from "@/components/TechMarquee";

export const metadata = {
    title: "Materials | PainterG",
    description: "The premium paints, tools, and materials used by PainterG for exquisite finishes.",
    keywords: ["PainterG Materials", "Premium Paints", "Painting Equipment", "High Quality Finishes"],
    alternates: {
        canonical: "https://painterg.cookmytech.site/stack",
    },
    openGraph: {
        title: "Materials | PainterG",
        description: "The premium paints, tools, and materials used by PainterG.",
        url: "https://painterg.cookmytech.site/stack",
        images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "PainterG - Materials" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Materials | PainterG",
        description: "The premium paints, tools, and materials used by PainterG.",
        images: ["/ivpankaj.png"],
    },
};

export default function StackPage() {
    return (
        <MainLayout>
            <div className="bg-white">
                <BentoSkills />
                <TechMarquee />
            </div>
        </MainLayout>
    );
}
