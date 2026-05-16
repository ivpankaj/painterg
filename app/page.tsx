import TestimonialCarousel from "@/component/Carousel";
import PaintingSteps from "@/component/Circle";
import Footer from "@/component/Footer";
import NerolacPage from "@/component/Header";
import HowItWorks from "@/component/How";
import NxtGenSteps from "@/component/Middle";
import GetInTouch from "@/component/Three";
import HelpSection from "@/component/Whathelp";

export default function Home() {
  return (
    <>
      <NerolacPage />
      <HelpSection />
      <NxtGenSteps />
      <PaintingSteps />
      <GetInTouch />

      <HowItWorks />
      <TestimonialCarousel />

      <Footer />
    </>
  );
}
