import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyConversions from "@/components/WhyConversions/WhyConversions";
import Sustainability from "@/components/Sustainability/Sustainability";
import Services from "@/components/Services/Services";
import FounderSnapshot from "@/components/FounderSnapshot/FounderSnapshot";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";

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

      <Footer />
    </main>
  );
}
