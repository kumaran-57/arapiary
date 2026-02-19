import React from "react"
import type { Metadata } from "next";
import { Playfair_Display, Lato, Noto_Sans_Tamil } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/lang/context";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "500", "700"],
  variable: "--font-tamil",
});

export const metadata: Metadata = {
  title: "AR APIARY | Pure Organic Honey - தூய இயற்கை தேன்",
  description:
    "AR APIARY - Premium organic honey from Tamil Nadu. Traditional beekeeping, 100% pure, chemical-free honey. தமிழ்நாட்டின் சிறந்த இயற்கை தேன்.",
  keywords: [
    "AR APIARY",
    "organic honey",
    "Tamil Nadu honey",
    "sidr honey",
    "natural honey",
    "தேன்",
    "இயற்கை தேன்",
    "தமிழ்நாடு தேன்",
  ],
  openGraph: {
    title: "AR APIARY | Pure Organic Honey - தூய இயற்கை தேன்",
    description:
      "Premium organic honey from Tamil Nadu. Traditional beekeeping methods, 100% pure and chemical-free.",
    type: "website",
  },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} ${notoTamil.variable}`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
