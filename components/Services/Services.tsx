import ScrollReveal from '../ScrollReveal';

export default function Services() {
  const services = [
    {
      title: "Property Sourcing",
      points: [
        "Identification of high-potential commercial properties",
        "Off-market and underutilised asset discovery",
        "Rigorous location and market analysis",
        "Initial financial viability screening",
      ],
    },
    {
      title: "Feasibility & Strategy",
      points: [
        "Conversion viability assessments",
        "Planning pathway guidance",
        "Investor-focused return projections",
        "Strategic asset performance optimisation",
      ],
    },
    {
      title: "Project Oversight",
      points: [
        "End-to-end coordination: acquisition to conversion",
        "Alignment with investor objectives",
        "Structured, disciplined delivery",
        "Technical systems and risk management",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-off-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-24 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-dark/40 mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl mb-8 leading-tight">A Strategic Approach to Property Lifecycle</h2>
          <p className="text-lg text-slate-dark/70 leading-relaxed">
            We identify and unlock value in London&apos;s urban landscape through a disciplined, technical, and investor-focused methodology.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className="bg-white p-12 border border-slate-dark/5 shadow-sm hover:shadow-md transition-all duration-300 h-full"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-slate-dark/20 mb-6 block">0{index + 1}</span>
              <h3 className="text-2xl font-serif mb-10 text-slate-dark">{service.title}</h3>
              <ul className="space-y-6 text-slate-dark/70 font-sans">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-dark/20 mt-2 shrink-0"></span>
                    <span className="leading-tight">{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
