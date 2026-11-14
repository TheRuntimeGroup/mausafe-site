import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { DownloadApp } from "@/components/landing/DownloadApp";
import { Team } from "@/components/landing/Team";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DownloadApp />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
