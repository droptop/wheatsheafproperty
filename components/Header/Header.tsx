import Logo from "../Logo";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "Market Context", href: "#why-conversions" },
    { name: "Services", href: "#services" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-32 md:h-44 flex items-center justify-between transition-all duration-300">
        <Logo showCrest={true} crestPosition="top" crestSize="medium" className="scale-100" />

        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase font-bold tracking-[0.2em] text-off-white/60 hover:text-off-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 bg-accent text-brand-dark text-xs uppercase font-bold tracking-[0.25em] hover:bg-accent/90 transition-colors"
          >
            Book a Consultation
          </a>
        </nav>
        
        <button className="lg:hidden text-off-white text-sm font-bold uppercase tracking-widest">
          Menu
        </button>
      </div>
    </header>
  );
}
