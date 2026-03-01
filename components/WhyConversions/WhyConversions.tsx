export default function WhyConversions() {
  const points = [
    {
      title: "Faster Housing Delivery",
      description: "Traditional new-builds face significant delays due to rising construction costs and financing pressures. Conversions bypass these hurdles, bringing quality homes to market in a fraction of the time.",
    },
    {
      title: "Unlocking Hidden Value",
      description: "We identify underutilised commercial assets and transform them into high-performing residential properties, unlocking strategic value from existing urban footprints.",
    },
    {
      title: "Strategic Investor Advantage",
      description: "Commercial-to-residential conversions offer individual investors a smarter way to participate in London's property market, with lower risk and more predictable delivery cycles.",
    },
  ];

  return (
    <section className="py-24 bg-stone-warm/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-dark/50 mb-4 block">The Strategic Opportunity</span>
          <h2 className="text-3xl md:text-5xl mb-8 leading-tight">London&apos;s Smartest Path to Housing</h2>
          <p className="text-lg text-slate-dark/80 max-w-2xl mx-auto leading-relaxed">
            London faces a significant housing shortage. While new builds struggle with complexity, commercial-to-residential conversion offers a disciplined, sustainable response to unlock supply.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col space-y-6">
              <div className="w-16 h-[1px] bg-slate-dark/20"></div>
              <h3 className="text-2xl font-serif text-slate-dark">{point.title}</h3>
              <p className="text-slate-dark/70 leading-relaxed font-sans">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
