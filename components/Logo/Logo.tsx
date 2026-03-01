import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  light?: boolean;
  showCrest?: boolean;
  crestPosition?: "top" | "left";
  crestSize?: "small" | "medium" | "large";
}

export default function Logo({
  className = "",
  light = false,
  showCrest = false,
  crestPosition = "top",
  crestSize = "medium"
}: LogoProps) {
  const colorClass = light ? "text-off-white" : "text-accent";
  const lineColorClass = light ? "bg-off-white/40" : "bg-accent";

  const sizeClasses = {
    small: "w-8 h-8 md:w-10 md:h-10",
    medium: "w-12 h-12 md:w-16 md:h-16",
    large: "w-24 h-24 md:w-32 md:h-32"
  };

  const Crest = (
    <div className={`relative ${sizeClasses[crestSize]}`}>
      <Image
        src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F68e1762d009042af9d3d84d1500d6d88?format=webp&width=800&height=1200"
        alt="Wheatsheaf Crest"
        fill
        className="object-contain"
      />
    </div>
  );

  return (
    <Link
      href="/"
      className={`flex group ${crestPosition === "top" ? "flex-col items-center gap-1 md:gap-1.5" : "flex-row items-center gap-4"} ${className}`}
    >
      {showCrest && Crest}
      <div className="flex flex-col items-center">
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
      </div>
    </Link>
  );
}
