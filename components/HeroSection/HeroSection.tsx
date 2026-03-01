interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaUrl?: string;
  backgroundImageUrl?: string;
}

export default function HeroSection({
  headline = "Addressing London's Housing Crisis through Strategic Conversion",
  subheadline = "With new builds facing mounting delays and costs, WheatSheaf Property unlocks underused commercial assets to deliver high-quality residential spaces faster and more sustainably.",
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
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-slate-dark/40 backdrop-blur-[1px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-off-white mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-accent/90 mb-10 max-w-2xl font-sans">
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
        </div>
      </div>
    </section>
  );
}
