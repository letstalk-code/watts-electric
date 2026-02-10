import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Watts Electric, LLC | Licensed Electrician Serving Pasco & Pinellas",
  description:
    "Licensed, bonded & insured electrical contractor serving Pasco & Pinellas counties. Residential, commercial, emergency service. Free estimates. Call 727-484-8618.",
  keywords: [
    "electrician",
    "electrical contractor",
    "Pasco County",
    "Pinellas County",
    "residential electrician",
    "commercial electrician",
    "emergency electrical service",
    "free estimate",
    "licensed electrician",
  ],
  openGraph: {
    title: "Watts Electric, LLC | Licensed Electrician",
    description:
      "Licensed, bonded & insured. Residential, commercial, emergency service. Free estimates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
