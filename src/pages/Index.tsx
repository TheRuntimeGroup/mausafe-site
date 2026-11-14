import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { GetStarted } from "@/components/landing/GetStarted";
import { DownloadApp } from "@/components/landing/DownloadApp";
import { Team } from "@/components/landing/Team";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <GetStarted />
        <DownloadApp />
        <Team />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
