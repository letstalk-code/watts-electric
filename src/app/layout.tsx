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
  title: "Watts Electric | Licensed Electrician",
  description: "Serving Pasco & Pinellas. Reliable, expert electrical service. Watch our update.",
  openGraph: {
    title: "Watts Electric | Licensed Electrician",
    description: "Reliable, expert electrical service. Watch our update.",
    type: "website",
    url: "https://watts-electric-five.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watts Electric | Licensed Electrician",
    description: "Expert electrical service.",
  }
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
