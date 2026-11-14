import { Intro } from "@/components/landing/Intro";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { FeatureExplorer } from "@/components/landing/FeatureExplorer";
import { Journey } from "@/components/landing/Journey";
import { DownloadApp } from "@/components/landing/DownloadApp";
import { Team } from "@/components/landing/Team";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <FeatureExplorer />
        <Journey />
        <DownloadApp />
        <Team />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
