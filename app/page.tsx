import Image from "next/image";
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
        subheadline="Wheatsheaf Property transforms underutilised London assets into high-quality housing. We offer a disciplined, sustainable response to the capital's housing crisis."
        backgroundImageUrl="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F85058dad036f4219870a9555a2369cf4?format=webp&width=800&height=1200"
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
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 opacity-60">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F9c3e0c6022b8415497b03943566cf3b5?format=webp&width=800&height=1200"
                alt="Wheatsheaf Property Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-xl font-serif text-slate-dark uppercase font-light tracking-widest">
              Wheatsheaf <span className="normal-case font-normal text-slate-dark/40">Property</span>
            </div>
          </div>
          <p className="text-sm text-slate-dark/40">
            © {new Date().getFullYear()} Wheatsheaf Property. All rights reserved.
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
