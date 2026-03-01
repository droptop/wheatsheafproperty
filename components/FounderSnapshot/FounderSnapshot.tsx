export default function FounderSnapshot() {
  const points = [
    {
      label: "Landlord Experience",
      description: "Practical, hands-on understanding of property management and investor requirements.",
    },
    {
      label: "Engineering Foundation",
      description: "Rigorous technical background ensuring disciplined, risk-aware delivery and asset performance.",
    },
    {
      label: "Investor-Focused Mindset",
      description: "Committed to high-quality residential outcomes that deliver strategic value for our partners.",
    },
  ];

  return (
    <section className="py-24 bg-stone-warm/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] bg-heritage-stone overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg" 
                alt="Founder of WheatSheaf Property"
                className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
              />
            </div>
            {/* Minimal Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-slate-dark/10 -z-10"></div>
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <span className="text-slate-dark uppercase tracking-widest text-sm mb-4 block">Founder Credibility</span>
            <h2 className="text-3xl md:text-5xl mb-8 leading-tight">Strategic Leadership, Rooted in Experience</h2>
            <p className="text-lg text-slate-dark/70 mb-10 leading-relaxed max-w-xl">
              WheatSheaf Property was founded with a singular purpose: to bring technical rigor and investor-aligned strategy to the London conversion market. Our leadership combines extensive landlord experience with a background in engineering to ensure every project is grounded in reality.
            </p>
            
            <div className="space-y-8 max-w-lg">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-serif text-slate-dark mb-1">{point.label}</h3>
                    <p className="text-slate-dark/60">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
