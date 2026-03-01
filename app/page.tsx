import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyConversions from "@/components/WhyConversions/WhyConversions";
import Sustainability from "@/components/Sustainability/Sustainability";
import Services from "@/components/Services/Services";
import FounderSnapshot from "@/components/FounderSnapshot/FounderSnapshot";
import FinalCTA from "@/components/FinalCTA/FinalCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-off-white font-sans text-slate-dark antialiased">
      <Header />
      
      <HeroSection 
        headline="Strategic Commercial-to-Residential Conversions"
        subheadline="WheatSheaf Property transforms underutilised London assets into high-quality housing. We offer a disciplined, sustainable response to the capital's housing crisis."
      />
      
      <section id="why-conversions">
        <WhyConversions />
      </section>
      
      <section id="sustainability">
        <Sustainability />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="about">
        <FounderSnapshot />
      </section>
      
      <FinalCTA />
      
      <footer className="py-12 bg-off-white border-t border-slate-dark/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-serif font-bold text-slate-dark">
            WheatSheaf Property
          </div>
          <p className="text-sm text-slate-dark/40">
            © {new Date().getFullYear()} WheatSheaf Property. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-slate-dark/60">
            <a href="#" className="hover:text-slate-dark">Privacy Policy</a>
            <a href="#" className="hover:text-slate-dark">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
