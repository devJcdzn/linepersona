import CtaSection from "@/components/CtaSection";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Wrapper } from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ExamplesSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </Wrapper>
  );
}
