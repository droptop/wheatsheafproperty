import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyConversions from "@/components/WhyConversions";
import Sustainability from "@/components/Sustainability";
import Services from "@/components/Services";
import FounderSnapshot from "@/components/FounderSnapshot";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen pt-20 overflow-x-hidden selection:bg-stone-warm selection:text-slate-dark">
      <Header />
      
      <HeroSection 
        headline="Unlocking London's Potential through Strategic Conversion"
        subheadline="Addressing the housing crisis by transforming underutilised commercial assets into high-quality residential spaces. A practical, sustainable solution for the modern investor."
        ctaText="Book a Consultation"
        ctaUrl="#contact"
        backgroundImageUrl="https://images.pexels.com/photos/10964647/pexels-photo-10964647.jpeg"
      />

      <div id="why-conversions">
        <WhyConversions />
      </div>

      <div id="sustainability">
        <Sustainability />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="about">
        <FounderSnapshot />
      </div>

      <FinalCTA />
      
      <footer className="py-12 bg-off-white border-t border-slate-dark/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-slate-dark/40 font-medium tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Wheatsheaf Property. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
