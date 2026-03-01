export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-slate-dark text-off-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight max-w-4xl mx-auto">
          Ready to Unlock Hidden Value in London's Property Market?
        </h2>
        <p className="text-xl text-off-white/70 mb-12 max-w-2xl mx-auto">
          Contact WheatSheaf Property to schedule a consultation and discuss your investment objectives.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="mailto:info@wheatsheafproperty.com" 
            className="px-10 py-5 bg-stone-warm text-slate-dark font-bold text-lg hover:bg-heritage-stone transition-colors duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
