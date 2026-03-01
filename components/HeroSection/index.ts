import type { RegisteredComponent } from "@builder.io/sdk-react-nextjs";
import HeroSection from "./HeroSection";

const heroSectionRegistration: RegisteredComponent = {
  component: HeroSection,
  name: "HeroSection",
  inputs: [
    { name: "headline", type: "string", defaultValue: "Welcome to Wheatsheaf Property" },
    { name: "subheadline", type: "string", defaultValue: "Premium property services" },
    { name: "ctaText", type: "string", defaultValue: "View Properties" },
    { name: "ctaUrl", type: "url", defaultValue: "/properties" },
    { name: "backgroundImageUrl", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"] },
  ],
};

export default heroSectionRegistration;
