import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wheatsheaf Property",
  description: "Wheatsheaf Property — London commercial to residential conversion specialists",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
