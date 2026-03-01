export default function WhyConversions() {
  const points = [
    {
      title: "Faster Housing Delivery",
      description: "Traditional new-builds face significant delays due to rising construction costs and financing pressures. Conversions bypass these hurdles, bringing quality homes to market in a fraction of the time.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <circle cx="12" cy="13" r="3" />
          <polyline points="12 11 12 13 13 13" />
        </svg>
      ),
    },
    {
      title: "Unlocking Hidden Value",
      description: "We identify underutilised commercial assets and transform them into high-performing residential properties, unlocking strategic value from existing urban footprints.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <circle cx="7.5" cy="15.5" r="5.5" />
          <path d="M21 2L11.4 11.6" />
          <path d="M15.5 7.5l3 3" />
          <path d="M17.5 5.5l3 3" />
        </svg>
      ),
    },
    {
      title: "Strategic Investor Advantage",
      description: "Commercial-to-residential conversions offer individual investors a smarter way to participate in London's property market, with lower risk and more predictable delivery cycles.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-accent/5">
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
              <div className="mb-2">
                {point.icon}
              </div>
              <h3 className="text-2xl font-serif text-slate-dark">{point.title}</h3>
              <p className="text-slate-dark/70 leading-relaxed font-sans">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
