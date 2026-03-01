import Image from "next/image";
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
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F9c3e0c6022b8415497b03943566cf3b5?format=webp&width=800&height=1200"
              alt="WheatSheaf Property Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-xl md:text-2xl font-serif font-bold text-off-white tracking-tight leading-none">
            WheatSheaf <span className="font-light block md:inline text-off-white/40">Property</span>
          </div>
        </Link>

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
