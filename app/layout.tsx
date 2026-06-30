import type { Metadata, Viewport } from "next";
import { Spectral, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  DARK_THEME_COLOR,
  KODAMA_APPLE_TOUCH,
  KODAMA_FAVICON,
  KODAMA_FAVICON_32,
  KODAMA_MARK,
  THEME_COLOR,
} from "@/lib/brand-data";
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
    icon: [
      { url: KODAMA_MARK.src, type: "image/svg+xml" },
      { url: KODAMA_FAVICON_32, sizes: "32x32", type: "image/png" },
      { url: KODAMA_FAVICON, sizes: "any" },
    ],
    apple: KODAMA_APPLE_TOUCH,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: THEME_COLOR },
    { media: "(prefers-color-scheme: dark)", color: DARK_THEME_COLOR },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem("kodama-theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${spectral.variable} ${outfit.variable} ${jetbrains.variable} font-body antialiased bg-kodama-sand text-kodama-bark`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
