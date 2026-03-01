export default function Sustainability() {
  const items = [
    {
      title: "Reduced Embodied Carbon",
      description: "Retrofitting existing structures significantly reduces the environmental impact compared to demolition and new construction.",
    },
    {
      title: "Net Zero Alignment",
      description: "Our projects directly support London's commitment to achieving a net-zero building stock by 2030.",
    },
    {
      title: "Modern Energy Upgrades",
      description: "We bring underperforming buildings up to the highest modern standards for insulation, ventilation, and energy efficiency.",
    },
  ];

  return (
    <section className="py-24 bg-slate-dark text-off-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <span className="text-stone-warm uppercase tracking-widest text-sm mb-4 block">Sustainability & Net Zero Commitment</span>
            <h2 className="text-3xl md:text-5xl mb-8 leading-tight max-w-xl">
              Building the Future Without Costing the Earth
            </h2>
            <p className="text-lg text-off-white/70 max-w-xl mb-8">
              Retrofit and conversion is the most sustainable way to meet our housing needs. By preserving the existing urban fabric, we reduce waste and energy consumption while enhancing long-term building performance.
            </p>
          </div>
          <div className="lg:w-1/2 w-full grid gap-8">
            {items.map((item, index) => (
              <div key={index} className="border-l border-stone-warm/30 pl-8 py-2">
                <h3 className="text-xl md:text-2xl font-serif mb-3 text-stone-warm">{item.title}</h3>
                <p className="text-off-white/60 leading-relaxed max-w-md">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
