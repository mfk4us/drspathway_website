import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
    "Professional, paid consultancy guiding healthcare professionals through Saudi & GCC medical licensing — Dataflow verification, SCFHS (Mumaris+), exam registration and CHSI support.",
  keywords: [
    "Drs Pathway",
    "Saudi medical licensing",
    "GCC healthcare licensing",
    "SCFHS",
    "Mumaris+",
    "Dataflow verification",
    "Dataflow Saudi Arabia",
    "Dataflow GCC",
    "Saudi Medical Licensing Exam",
    "SMLE",
    "Prometric exam registration",
    "CHSI verification",
    "doctor license Saudi Arabia",
    "nurse license Saudi Arabia",
    "pharmacist license Saudi Arabia",
    "medical licensing consultancy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://drspathway.com/",
    siteName: "Drs Pathway",
    title: "Drs Pathway — Medical Licensing Guidance (Saudi Arabia)",
    description:
      "Step‑by‑step, doctor‑led support for Dataflow verification, SCFHS Mumaris+, exam registration and CHSI verification for Saudi Arabia and the wider GCC.",
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
      "Doctor‑led consultancy for Dataflow, SCFHS Mumaris+, exam registration and CHSI verification for Saudi and GCC healthcare professionals.",
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
  other: {
    "geo.region": "SA-02",
    "geo.placename": "Jeddah",
    "geo.position": "21.4858;39.1925",
    ICBM: "21.4858, 39.1925",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://drspathway.com/#org",
        "name": "Drs Pathway",
        "url": "https://drspathway.com/",
        "logo": "https://drspathway.com/logo.png",
        "sameAs": [
          "https://www.instagram.com/drspathway",
          "https://www.facebook.com/share/14Qt2FGdB9b/",
          "https://www.linkedin.com/company/drs-pathway"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://drspathway.com/#service",
        "name": "Drs Pathway – Medical Licensing Guidance",
        "url": "https://drspathway.com/",
        "brand": "Drs Pathway",
        "slogan": "Your trusted guide to medical registration in Saudi Arabia and the GCC",
        "areaServed": [
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Qatar" },
          { "@type": "Country", "name": "Oman" },
          { "@type": "Country", "name": "Bahrain" },
          { "@type": "Country", "name": "Kuwait" }
        ],
        "isAccessibleForFree": false,
        "offers": {
          "@type": "Offer",
          "category": "Consulting",
          "url": "https://drspathway.com/#packages",
          "description":
            "Paid guidance for Dataflow verification, SCFHS Mumaris+ registration, exam registration and CHSI support."
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Licensing guidance packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Basic — Dataflow + Mumaris+ guidance",
              "priceCurrency": "SAR"
            },
            {
              "@type": "Offer",
              "name": "Standard — Dataflow + Mumaris+ + exam registration",
              "priceCurrency": "SAR"
            },
            {
              "@type": "Offer",
              "name": "Premium — Full support, document review and mentorship",
              "priceCurrency": "SAR"
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://drspathway.com/#website",
        "url": "https://drspathway.com/",
        "name": "Drs Pathway",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://drspathway.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L32Y1ZQ221"
          strategy="beforeInteractive"
        />
        <Script
          id="ga4-init"
          strategy="beforeInteractive"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L32Y1ZQ221');
            `,
          }}
        />

        <script
          type="application/ld+json"
          suppressHydrationWarning
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              .site-header .mobile-nav-toggle {
                display: none;
              }

              @media (max-width: 768px) {
                .site-header .header-row {
                  padding: 10px 0;
                }
                .site-header .brand-text {
                  font-size: 0.95rem;
                }
                .site-header .mobile-nav-toggle {
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 999px;
                  border: 1px solid rgba(148, 163, 255, 0.6);
                  padding: 6px 10px;
                  background: rgba(15, 23, 42, 0.96);
                  cursor: pointer;
                  box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
                }
                .site-header .mobile-nav-toggle span {
                  display: block;
                  width: 18px;
                  height: 2px;
                  background: #e5e7eb;
                  border-radius: 999px;
                  box-shadow: 0 5px 0 #e5e7eb, 0 -5px 0 #e5e7eb;
                }
                .site-header .nav {
                  display: none !important;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 18px;
                  width: 100%;
                  padding: 16px 0 12px;
                }
                .site-header .nav.is-open {
                  display: flex !important;
                }
                .site-header .nav a {
                  width: 100%;
                  text-align: left;
                }
              }

              @media (min-width: 769px) {
                .site-header .mobile-nav-toggle {
                  display: none !important;
                }
                .site-header .nav {
                  display: flex !important;
                }
              }
            `,
          }}
        />
        <meta name="theme-color" content="#0B1424" />
      </head>
      <body>
        <header
          className="site-header"
          role="banner"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "rgba(7, 11, 25, 0.96)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <div
            className="shell header-row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 0",
              gap: "20px",
            }}
          >
            <a
              href="/"
              className="brand"
              aria-label="Drs Pathway — Home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "#ffffff",
                fontWeight: 800,
              }}
            >
              <img
                src="/logo.png"
                width={40}
                height={40}
                alt="Drs Pathway logo"
                className="logo-img"
                style={{ borderRadius: "10px" }}
              />
              <span className="brand-text">Drs Pathway</span>
            </a>

            <button
              type="button"
              className="mobile-nav-toggle"
              aria-label="Toggle navigation"
              aria-expanded="false"
            >
              <span />
            </button>

            <nav
              className="nav"
              aria-label="Primary"
              style={{
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/#home"
                style={{ color: "#ffffff", textDecoration: "none", fontWeight: 600 }}
              >
                Home
              </a>
              <a
                href="/#about"
                style={{ color: "#ffffff", textDecoration: "none", fontWeight: 600 }}
              >
                About
              </a>
              <a
                href="/#services"
                style={{ color: "#ffffff", textDecoration: "none", fontWeight: 600 }}
              >
                Services
              </a>
              <a
                href="/#packages"
                style={{ color: "#ffffff", textDecoration: "none", fontWeight: 600 }}
              >
                Packages
              </a>
              <a
                href="/#experts"
                style={{ color: "#ffffff", textDecoration: "none", fontWeight: 600 }}
              >
                Experts
              </a>
              <a
                href="/#process"
                style={{ color: "#ffffff", textDecoration: "none", fontWeight: 600 }}
              >
                How it works
              </a>
              <a
                href="/#contact"
                className="btn btn--primary"
                style={{
                  textDecoration: "none",
                  padding: "0.55rem 1.2rem",
                  borderRadius: "999px",
                  fontWeight: 700,
                  boxShadow: "0 0 30px rgba(76, 132, 255, 0.6)",
                }}
              >
                Get started
              </a>
            </nav>
          </div>
        </header>

        {children}
        <footer
          className="site-footer"
          style={{
            padding: "24px 0 32px",
            background: "#050815",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginTop: "40px",
          }}
        >
          <div
            className="shell"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              color: "#9ca3af",
              fontSize: "0.85rem",
            }}
          >
            <span>© Drs Pathway. All rights reserved.</span>
            <span>
              Guidance &amp; documentation assistance — not a recruitment or licensing agency.
            </span>
          </div>
        </footer>
        <Script
          id="mobile-nav-toggle-init"
          strategy="afterInteractive"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  if (typeof window === 'undefined') return;
                  var header = document.querySelector('.site-header');
                  if (!header) return;
                  var toggle = header.querySelector('.mobile-nav-toggle');
                  var nav = header.querySelector('.nav');
                  if (!toggle || !nav) return;
                  toggle.addEventListener('click', function () {
                    var isOpen = nav.classList.toggle('is-open');
                    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                  });
                } catch (e) {
                  console.error('Mobile nav toggle error', e);
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
