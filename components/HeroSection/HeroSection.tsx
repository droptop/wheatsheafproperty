import ScrollReveal from '../ScrollReveal';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaUrl?: string;
  backgroundImageUrl?: string;
}

export default function HeroSection({
  headline = "Addressing London's Housing Crisis through Strategic Conversion",
  subheadline = "With new builds facing mounting delays and costs, Wheatsheaf Property unlocks underused commercial assets to deliver high-quality residential spaces faster and more sustainably.",
  ctaText = "Book a Consultation",
  ctaUrl = "#contact",
  backgroundImageUrl = "https://images.pexels.com/photos/10964647/pexels-photo-10964647.jpeg",
}: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Multi-layered overlay for maximum readability */}
        <div className="absolute inset-0 bg-brand-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <ScrollReveal className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-off-white mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-off-white/80 mb-10 max-w-2xl font-sans leading-relaxed">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ctaUrl}
              className="px-8 py-4 bg-accent text-brand-dark font-semibold text-lg hover:bg-accent/90 transition-colors duration-300 text-center"
            >
              {ctaText}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
