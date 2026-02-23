import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mraayush.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Aayush Agarwal - Senior Backend & AI Systems Engineer",
  description: "Portfolio of Aayush Agarwal, Senior Backend & AI Systems Engineer with 5+ years of expertise in cloud architecture, AI/ML systems, LLM integration, Voice AI, and engineering leadership.",
  keywords: [
    "Aayush Agarwal", "Software Engineer", "Backend Engineer", "AI Engineer",
    "Cloud Architecture", "AWS", "Node.js", "React", "Next.js", "LLM",
    "Voice AI", "Agentic AI", "Full Stack Developer", "Team Lead",
    "Avoca AI", "HyperVerge", "Portfolio",
  ],
  authors: [{ name: "Aayush Agarwal", url: baseUrl }],
  creator: "Aayush Agarwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Aayush Agarwal - Senior Backend & AI Systems Engineer",
    description: "5+ years building scalable AI systems, cloud infrastructure, and leading engineering teams. Expertise in Voice AI, LLMs, AWS, and full-stack development.",
    siteName: "Aayush Agarwal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Agarwal - Senior Backend & AI Systems Engineer",
    description: "5+ years building scalable AI systems, cloud infrastructure, and leading engineering teams.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ceSR0BHLDh8jrD8HB7WDRFsSrpMg3WztV3NANxqsgug",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
