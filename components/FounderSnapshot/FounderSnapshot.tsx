import Image from "next/image";

export default function FounderSnapshot() {
  const values = [
    {
      label: "Landlord Experience",
      description: "A hands-on understanding of property management and the day-to-day realities of being a landlord.",
    },
    {
      label: "Engineering Discipline",
      description: "A background in a top-tier engineering firm provides a unique perspective on building systems, risk, and technical performance.",
    },
    {
      label: "Investor-First Thinking",
      description: "We align all decisions with your strategic objectives, ensuring every conversion is a sound, high-performing investment.",
    },
  ];

  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] bg-heritage-stone overflow-hidden relative shadow-lg">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fe9e3d213bbe8421cbde2cf74c69891d8?format=webp&width=800&height=1200"
                alt="Architectural model representing WheatSheaf Property's technical rigor"
                fill
                className="object-cover transition-all duration-700 scale-110 hover:scale-115"
              />
            </div>
            {/* Minimal Detail */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 border-r border-b border-slate-dark/5 -z-10"></div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-slate-dark/40 uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Our Foundation</span>
            <h2 className="text-3xl md:text-5xl mb-8 leading-tight">Rooted in Technical Rigor</h2>
            <p className="text-xl text-slate-dark/70 mb-12 leading-relaxed">
              WheatSheaf Property was built to differentiate from purely marketing-driven developers. We bring practical building knowledge and engineering discipline to the London conversion market.
            </p>

            <div className="space-y-10">
              {values.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="text-xl font-serif text-slate-dark">{item.label}</h3>
                  <p className="text-slate-dark/60 font-sans leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
