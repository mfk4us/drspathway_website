import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drspathway.com"),
  title: {
    default: "Drs Pathway — Medical Licensing Guidance (Saudi Arabia)",
    template: "%s | Drs Pathway",
  },
  description:
    "Professional, paid consultancy guiding healthcare professionals through Saudi medical licensing — Dataflow, SCFHS (Mumaris+), Prometric, and CHSI (coming soon).",
  keywords: [
    "SCFHS",
    "Mumaris+",
    "Dataflow",
    "Prometric",
    "Saudi medical licensing",
    "KSA doctor license",
    "CHSI verification",
    "medical licensing guidance",
    "Drs Pathway",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://drspathway.com/",
    siteName: "Drs Pathway",
    title: "Drs Pathway — Medical Licensing Guidance (Saudi Arabia)",
    description:
      "Step‑by‑step support for healthcare professionals navigating Dataflow, SCFHS Mumaris+, Prometric, and CHSI.",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Drs Pathway — Medical Licensing Guidance in Saudi Arabia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drs Pathway — Medical Licensing Guidance (Saudi Arabia)",
    description:
      "Professional consultancy for Dataflow, SCFHS, Prometric, and CHSI (coming soon).",
    images: ["/og-cover.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Drs Pathway",
    url: "https://drspathway.com/",
    brand: "Drs Pathway",
    slogan: "Your trusted guide to medical registration in Saudi Arabia",
    sameAs: [
      "https://www.instagram.com/drspathway",
      "https://www.facebook.com/share/14Qt2FGdB9b/",
      "https://www.linkedin.com/company/drs-pathway",
    ],
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    offers: {
      "@type": "Offer",
      category: "Consulting",
      url: "https://drspathway.com/#packages",
      description:
        "Packages for licensing guidance: Basic, Standard, Premium. Add‑ons: one‑to‑one document review; mock tests.",
    },
    isAccessibleForFree: false,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Basic — Dataflow + Mumaris+ guidance",
          priceCurrency: "SAR",
        },
        {
          "@type": "Offer",
          name: "Standard — + Prometric preparation",
          priceCurrency: "SAR",
        },
        {
          "@type": "Offer",
          name: "Premium — Full support + Doc review + Mentorship",
          priceCurrency: "SAR",
        },
      ],
    },
  };

  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#0B1424" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
