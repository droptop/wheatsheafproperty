export default function Header() {
  const navLinks = [
    { name: "Market Context", href: "#why-conversions" },
    { name: "Services", href: "#services" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-off-white/90 backdrop-blur-md border-b border-slate-dark/5">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-serif font-bold text-slate-dark tracking-tight leading-none">
          WheatSheaf <span className="font-light block md:inline text-slate-dark/40">Property</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase font-bold tracking-[0.2em] text-slate-dark/60 hover:text-slate-dark transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 bg-slate-dark text-off-white text-xs uppercase font-bold tracking-[0.25em] hover:bg-slate-dark/90 transition-colors"
          >
            Book a Consultation
          </a>
        </nav>
        
        <button className="lg:hidden text-slate-dark text-sm font-bold uppercase tracking-widest">
          Menu
        </button>
      </div>
    </header>
  );
}
