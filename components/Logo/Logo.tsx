import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  const colorClass = light ? "text-off-white" : "text-accent";
  const lineColorClass = light ? "bg-off-white/40" : "bg-accent";

  return (
    <Link href="/" className={`flex flex-col items-center group ${className}`}>
      <div className={`text-2xl md:text-3xl font-serif tracking-[0.15em] leading-tight uppercase font-normal ${colorClass}`}>
        Wheatsheaf
      </div>
      <div className="flex items-center gap-3 w-full px-1 mt-1">
        <div className={`h-[1px] flex-1 ${lineColorClass}`}></div>
        <div className={`text-[9px] md:text-[11px] font-serif tracking-[0.3em] uppercase font-medium ${colorClass}`}>
          Property
        </div>
        <div className={`h-[1px] flex-1 ${lineColorClass}`}></div>
      </div>
    </Link>
  );
}
