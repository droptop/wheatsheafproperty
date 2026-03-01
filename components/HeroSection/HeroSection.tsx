interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaUrl?: string;
  backgroundImageUrl?: string;
}

export default function HeroSection({
  headline,
  subheadline,
  ctaText,
  ctaUrl,
  backgroundImageUrl,
}: HeroSectionProps) {
  return (
    <section
      style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : undefined}
    >
      {headline && <h1>{headline}</h1>}
      {subheadline && <p>{subheadline}</p>}
      {ctaText && ctaUrl && <a href={ctaUrl}>{ctaText}</a>}
    </section>
  );
}
