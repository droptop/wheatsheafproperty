export default function WhyConversions() {
  const points = [
    {
      title: "Faster Housing Delivery",
      description: "Conversions bypass many of the lengthy delays associated with new build construction, bringing high-quality homes to the London market in significantly reduced timeframes.",
    },
    {
      title: "Unlocking Underused Assets",
      description: "We specialise in identifying commercial properties that are no longer serving their original purpose and transforming them into valuable residential assets.",
    },
    {
      title: "Investor-Focused Strategy",
      description: "Our strategic approach identifies hidden value in existing urban fabric, providing a financially attractive and lower-risk opportunity for individual investors.",
    },
  ];

  return (
    <section className="py-24 bg-stone-warm/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">A Practical Response to the London Housing Crisis</h2>
          <p className="text-lg text-slate-dark/80 max-w-2xl mx-auto">
            London faces a significant housing shortage. Commercial-to-residential conversion is the most practical way to unlock buildings and bring homes to market faster.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="w-12 h-[2px] bg-slate-dark/30 mb-2"></div>
              <h3 className="text-xl md:text-2xl font-serif">{point.title}</h3>
              <p className="text-slate-dark/70 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
