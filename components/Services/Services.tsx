export default function Services() {
  const services = [
    {
      title: "Property Sourcing",
      points: [
        "Identification of high-potential commercial properties in London",
        "Off-market and underutilised asset discovery",
        "Location and market analysis",
        "Financial viability screening",
      ],
    },
    {
      title: "Feasibility & Strategy",
      points: [
        "Conversion viability assessments",
        "Planning pathway guidance",
        "Investor-focused return projections",
        "Strategic market entry",
      ],
    },
    {
      title: "Project Oversight",
      points: [
        "End-to-end coordination from acquisition through conversion",
        "Alignment with investor objectives",
        "Structured, disciplined delivery",
        "Compliance and quality assurance",
      ],
    },
  ];

  return (
    <section className="py-24 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl mb-6">Expertise Across the Property Lifecycle</h2>
          <p className="text-lg text-slate-dark/70">
            A strategic, disciplined approach to identifying and unlocking value in London&apos;s urban landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-heritage-stone/10 p-10 border border-slate-dark/5 flex flex-col items-start transition-shadow hover:shadow-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-dark/40 mb-4">Service {index + 1}</span>
              <h3 className="text-2xl font-serif mb-6 text-slate-dark">{service.title}</h3>
              <ul className="space-y-4 text-slate-dark/70">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-dark/30 mt-2 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
