import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Drs Pathway";
const siteUrl = "https://drspathway.com";
const siteTitle = "Drs Pathway — Medical Licensing Guidance (KSA)";
const siteDescription =
  "Paid, step-by-step guidance for SCFHS (Mumaris+), DataFlow, Prometric orientation, and career planning in Saudi Arabia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s • Drs Pathway",
  },
  description: siteDescription,
  keywords: [
    "SCFHS",
    "Mumaris+",
    "DataFlow",
    "Prometric",
    "medical licensing",
    "Saudi Arabia",
    "KSA",
    "Drs Pathway",
    "healthcare",
    "consultancy",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/og.jpg", // optional: place 1200x630 at /public/og.jpg
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.jpg"],
    creator: "@drspathway",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }, // optional: add to /public
    ],
    apple: [{ url: "/apple-touch-icon.png" }], // optional: add to /public
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B72B9" },
    { media: "(prefers-color-scheme: dark)", color: "#0B72B9" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-bg text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
