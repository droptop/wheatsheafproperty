export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-slate-dark text-off-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight max-w-2xl">
              Ready to Unlock Hidden Value in London?
            </h2>
            <p className="text-xl text-off-white/70 mb-12 max-w-xl leading-relaxed">
              Contact WheatSheaf Property to schedule a consultation and discuss your investment objectives with our technical lead.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center">
                  <span className="text-stone-warm">M</span>
                </div>
                <p className="text-off-white/80 font-medium">info@wheatsheafproperty.com</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center">
                  <span className="text-stone-warm">L</span>
                </div>
                <p className="text-off-white/80 font-medium">London, United Kingdom</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/5 p-12 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-serif mb-8 text-stone-warm">Book a Consultation</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-off-white/40">Full Name</label>
                  <input type="text" id="name" className="w-full bg-transparent border-b border-off-white/20 py-3 focus:outline-none focus:border-stone-warm transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-off-white/40">Email Address</label>
                  <input type="email" id="email" className="w-full bg-transparent border-b border-off-white/20 py-3 focus:outline-none focus:border-stone-warm transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-off-white/40">Brief Description of Objectives</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-off-white/20 py-3 focus:outline-none focus:border-stone-warm transition-colors resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-stone-warm text-slate-dark font-bold uppercase tracking-[0.2em] text-sm hover:bg-heritage-stone transition-all duration-300">
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
