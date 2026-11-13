import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Showcase } from "@/components/landing/Showcase";
import { Team } from "@/components/landing/Team";
import { Outro } from "@/components/landing/Outro";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Team />
        <Outro />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
