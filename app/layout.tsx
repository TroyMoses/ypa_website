import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Youth Platform Africa - Empowering Africa through Sustainable Agribusiness",
  description:
    "Leading Pan-African agribusiness organization committed to empowering individuals and driving sustainable change across the continent.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
