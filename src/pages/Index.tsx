import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Concept } from "@/components/landing/Concept";
import { Features } from "@/components/landing/Features";
import { Showcase } from "@/components/landing/Showcase";
import { Team } from "@/components/landing/Team";
import { Faq } from "@/components/landing/Faq";
import { Outro } from "@/components/landing/Outro";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Features />
        <Showcase />
        <Team />
        <Faq />
        <Outro />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
