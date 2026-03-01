export default function Sustainability() {
  const values = [
    {
      title: "Reduced Embodied Carbon",
      description: "Retrofit and conversion are the most sustainable ways to build. By reusing existing structures, we significantly reduce the carbon footprint compared to demolition and reconstruction.",
    },
    {
      title: "Net Zero & Energy Upgrades",
      description: "We bring underperforming buildings up to the highest modern standards for energy efficiency, supporting London's net-zero commitments while improving asset performance.",
    },
    {
      title: "Community Sensitivity",
      description: "Our projects respect and enhance the surrounding neighbourhood, preserving local architectural character and strengthening the urban fabric for long-term benefit.",
    },
  ];

  return (
    <section className="py-24 bg-slate-dark text-off-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Responsible Development</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight max-w-xl">
              Building for a Sustainable Future
            </h2>
            <p className="text-xl text-off-white/70 max-w-xl mb-12 leading-relaxed">
              For Wheatsheaf Property, sustainability is not an addition—it is the strategy. We believe that conversion is the responsible way to deliver the housing London needs.
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-12">
            {values.map((item, index) => (
              <div key={index} className="border-l border-accent/20 pl-10 py-2 group hover:border-accent transition-colors duration-500">
                <h3 className="text-2xl font-serif mb-4 text-accent">{item.title}</h3>
                <p className="text-off-white/60 leading-relaxed max-w-md font-sans group-hover:text-off-white/80 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
