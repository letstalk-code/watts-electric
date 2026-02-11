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
  title: "Watts Electric | Website Update",
  description: "Watch your 60-second website update now. Click to view the interactive preview.",
  openGraph: {
    title: "Watts Electric - Website Update",
    description: "Watch your 60-second website update now. Click to view the interactive preview.",
    type: "website",
    url: "https://watts-electric-five.vercel.app/quick-video",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Watts Electric Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Watts Electric - Website Update",
    description: "Watch your 60-second website update now.",
    images: ["/preview.png"],
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
