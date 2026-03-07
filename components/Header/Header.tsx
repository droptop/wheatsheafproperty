"use client";

import { useState, useEffect } from "react";
import Logo from "../Logo";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Market Context", href: "#why-conversions" },
    { name: "Services", href: "#services" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-32 md:h-44 flex items-center justify-between transition-all duration-300 relative">
          <Logo
            showCrest={true}
            crestPosition="top"
            crestSize="medium"
            className="scale-100 lg:static absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:order-first"
          />

          <div className="lg:hidden" /> {/* Placeholder to balance the button when logo is absolute */}

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
              className="px-8 py-4 bg-accent text-brand-dark font-semibold text-lg hover:bg-accent/90 transition-colors duration-300 text-center"
            >
              Book a Consultation
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-off-white text-sm font-bold uppercase tracking-widest z-[110] px-2 py-1"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Full Page Mobile Menu Overlay - Outside the header container to ensure it expands correctly */}
      <div className={`
        lg:hidden fixed inset-0 bg-[#0A0A0A] transition-all duration-500 ease-in-out z-[90] overflow-y-auto
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
      `}>
        <div className={`
          flex flex-col items-center justify-center min-h-full pt-44 pb-20 gap-8 px-6 transition-all duration-500
          ${isMenuOpen ? "scale-100 translate-y-0" : "scale-90 -translate-y-10"}
        `}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl xs:text-3xl uppercase font-bold tracking-[0.3em] text-off-white hover:text-accent transition-colors text-center"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-8 py-5 bg-accent text-brand-dark font-bold text-lg hover:bg-accent/90 transition-colors duration-300 text-center w-full max-w-[280px] uppercase tracking-widest"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </>
  );
}
