import type { Metadata, Viewport } from "next";
import { Spectral, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { THEME_COLOR } from "@/lib/brand-data";
import { PHILOSOPHY_TAGLINE, PHILOSOPHY_WELCOME } from "@/lib/philosophy-data";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kodama · Brand System",
  description: `Kodama — ${PHILOSOPHY_WELCOME.headline} The brand system for a quieter internet. ${PHILOSOPHY_TAGLINE}`,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spectral.variable} ${outfit.variable} ${jetbrains.variable} font-body antialiased bg-kodama-sand text-kodama-bark`}
      >
        {children}
      </body>
    </html>
  );
}
