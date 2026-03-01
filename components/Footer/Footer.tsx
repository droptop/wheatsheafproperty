import React from "react";
import Image from "next/image";
import Logo from "../Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Market Context", href: "#why-conversions" },
    { name: "Services", href: "#services" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-off-white/60 py-16 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Footer Logo */}
          <div className="flex flex-col items-center">
            <Logo showCrest={true} crestPosition="top" crestSize="medium" className="scale-125 md:scale-150" />
          </div>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {footerLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase font-bold tracking-[0.2em] hover:text-off-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Horizontal Line */}
          <div className="w-full max-w-4xl h-px bg-white/10"></div>
          
          {/* Bottom Footer Info */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium space-y-4 md:space-y-0">
            <div>
              &copy; {currentYear} Wheatsheaf Property. All Rights Reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-off-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-off-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
