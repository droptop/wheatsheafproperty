export default function Header() {
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Conversions", href: "#why-conversions" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-off-white/80 backdrop-blur-md border-b border-slate-dark/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-serif font-bold text-slate-dark tracking-tight">
          WheatSheaf Property
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-dark/70 hover:text-slate-dark transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-slate-dark text-off-white text-sm font-semibold hover:bg-slate-dark/90 transition-colors"
          >
            Book a Consultation
          </a>
        </nav>
        
        {/* Mobile menu could go here, keeping it minimal for now */}
      </div>
    </header>
  );
}
