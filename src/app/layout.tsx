import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capital Gains Tax Calculator USA 2026 - Free Online Tax Estimator | TaxGainsCalc",
  description: "Free capital gains tax calculator for USA 2026. Calculate short-term and long-term capital gains tax on stocks, real estate, and investments. Accurate 2025-2026 tax rates.",
  keywords: "capital gains tax calculator, capital gains calculator, capital gains tax rates, long-term capital gains, short-term capital gains, capital gains tax 2026, investment tax calculator, stock tax calculator, real estate capital gains",
  authors: [{ name: "TaxGainsCalc" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://taxgainscalc.com/",
  },
  openGraph: {
    title: "Capital Gains Tax Calculator USA 2026 - Free Online Tax Estimator",
    description: "Free capital gains tax calculator for USA 2026. Calculate short-term and long-term capital gains tax on stocks, real estate, and investments. Accurate 2025-2026 federal tax rates.",
    url: "https://taxgainscalc.com/",
    siteName: "TaxGainsCalc",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://taxgainscalc.com/favicon.png",
        width: 1024,
        height: 1024,
        alt: "TaxGainsCalc - Capital Gains Tax Calculator USA 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Gains Tax Calculator USA 2026 - Free Online Tax Estimator",
    description: "Free capital gains tax calculator for USA 2026. Calculate short-term and long-term capital gains tax on stocks, real estate, and investments.",
    images: ["https://taxgainscalc.com/favicon.png"],
    creator: "@taxgainscalc",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
