import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WheatSheaf Property",
  description: "WheatSheaf Property — London commercial to residential conversion specialists",
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
