import CtaSection from "@/components/CtaSection";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ExamplesSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
