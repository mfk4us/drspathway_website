import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "CHSI Verification Support for Chinese Degrees | Drs Pathway",
    template: "%s | CHSI Verification – Drs Pathway",
  },
  description:
    "Step-by-step CHSI academic verification guidance for Chinese university degrees used in DataFlow and Gulf healthcare licensing, including Chinese and English reports and sending results to DataFlow or regulators.",
  keywords: [
    "CHSI",
    "CHSI verification",
    "Chinese degree verification",
    "China Higher Education Student Information",
    "Dataflow CHSI",
    "GCC healthcare licensing",
    "Chinese medical degree",
    "Chinese university degree verification",
    "Drs Pathway CHSI support",
  ],
  alternates: {
    canonical: "/chsi-verification",
  },
  openGraph: {
    type: "article",
    url: "https://drspathway.com/chsi-verification",
    title: "CHSI Verification Support for Chinese Degrees | Drs Pathway",
    description:
      "Doctor-led support for CHSI academic verification of Chinese degrees, including identity verification, Chinese and English reports, and sending results to DataFlow or Gulf regulators.",
    siteName: "Drs Pathway",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Drs Pathway – CHSI verification support for Chinese degrees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHSI Verification Support | Drs Pathway",
    description:
      "Guidance for CHSI verification of Chinese university degrees for DataFlow and Gulf healthcare licensing.",
  },
};

export default function ChsiVerificationPage() {
  return (
    <main className="page">
      {/* Hero */}
      <section className="band--brand">
        <div className="shell">
          <p className="eyebrow">CHSI Verification Support</p>
          <h1 className="display">CHSI Verification for Chinese Degrees &amp; Gulf Licensing</h1>
          <p className="lead">
            We help you complete CHSI academic verification for your Chinese degree and connect it correctly
            to your DataFlow file and Gulf healthcare licensing requirements.
          </p>

          <div className="cta-row">
            <a href="#chsi-help" className="btn btn--primary">
              Get CHSI verification help
            </a>
            <a href="#chsi-steps" className="btn btn--ghost">
              See how CHSI works
            </a>
          </div>
        </div>
      </section>

      {/* What is CHSI & when you need it */}
      <section className="band--dark">
        <div className="shell grid-2">
          <div>
            <p className="eyebrow">Understanding CHSI</p>
            <h2>What is CHSI academic verification?</h2>
            <p className="small">
              CHSI (China Higher Education Student Information) is the official platform used in China to
              verify university and college degrees. For many Gulf regulators and DataFlow, CHSI is the
              <strong> primary source</strong> for confirming that your Chinese degree is genuine and correctly
              recorded.
            </p>
            <p className="small mt">
              If you studied in China and are now applying for <strong>Dataflow, SCFHS, DHA, HAAD, MOH, QCHP,
              OMSB</strong> or other Gulf authorities, you will often be asked for a CHSI verification report
              in Chinese and sometimes an official English translation.
            </p>
          </div>

          <aside className="card">
            <h3 className="small">Who usually needs CHSI verification?</h3>
            <ul className="list small">
              <li>Doctors, dentists, and specialists who completed degrees in China</li>
              <li>Nurses, pharmacists, and allied health professionals with Chinese qualifications</li>
              <li>Candidates doing DataFlow for GCC licensing with a Chinese degree</li>
              <li>Applicants asked by DataFlow or a regulator to provide CHSI reports</li>
            </ul>
            <p className="small muted" style={{ marginTop: "8px" }}>
              Even if your degree is recognised in your home country, regulators may still request CHSI
              verification as part of primary source verification.
            </p>
          </aside>
        </div>
      </section>

      {/* CHSI Steps */}
      <section className="band--light" id="chsi-steps">
        <div className="shell">
          <h2>CHSI Verification — Step‑by‑Step</h2>
          <p className="small">
            This is the same step‑by‑step flow we use when helping candidates complete CHSI verification for
            DataFlow or Gulf health authorities. You can follow it yourself, or request support from Drs
            Pathway at any stage.
          </p>

          <ol className="steps">
            <li>
              <div className="step-num">1</div>
              <div>
                <h3>Create your CHSI account</h3>
                <p className="small">
                  Visit <strong>www.chsi.com.cn</strong>, create an account with your Chinese mobile number and
                  passport / ID details, and save your login information for later use.
                </p>
              </div>
            </li>

            <li>
              <div className="step-num">2</div>
              <div>
                <h3>Complete identity verification</h3>
                <p className="small">
                  Upload a hand‑held passport photo following CHSI rules, make sure your face and passport data are
                  clearly visible, then wait for identity approval inside the portal.
                </p>
              </div>
            </li>

            <li>
              <div className="step-num">3</div>
              <div>
                <h3>Find your education record</h3>
                <p className="small">
                  Search for your record using your university name and degree / student number, confirm your name,
                  programme, and graduation date, and if no record appears contact your university or CHSI to update
                  it.
                </p>
              </div>
            </li>

            <li>
              <div className="step-num">4</div>
              <div>
                <h3>Generate the Chinese report</h3>
                <p className="small">
                  Once your record is visible, request the Chinese‑language verification report, review all details
                  before you confirm, and note that in most cases this Chinese report is free.
                </p>
              </div>
            </li>

            <li>
              <div className="step-num">5</div>
              <div>
                <h3>Order the English report</h3>
                <p className="small">
                  After the Chinese report is ready, apply for the official English version, pay around{" "}
                  <strong>30 Yuan</strong> via Alipay, WeChat Pay, or other CHSI options, then download and save the
                  English report PDF.
                </p>
              </div>
            </li>

            <li>
              <div className="step-num">6</div>
              <div>
                <h3>Send the report to DataFlow or your regulator</h3>
                <p className="small">
                  Use the <strong>发送 (Send)</strong> / report‑sending option inside CHSI, choose DataFlow or the
                  authority that requested your report, and keep both the report and sending confirmation for your
                  licensing file.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Common issues */}
      <section className="band--dark">
        <div className="shell grid-2">
          <div>
            <h2>Common CHSI problems we see</h2>
            <p className="small">
              Many candidates face small issues that delay their DataFlow or licensing file. With the right
              steps and clear communication with CHSI and the university, most problems can be fixed.
            </p>
            <ul className="list small mt">
              <li>Name on CHSI does not match passport or DataFlow application</li>
              <li>Old or incorrect university records inside CHSI</li>
              <li>Difficulty paying the English report fee from outside China</li>
              <li>Not sure which report format the regulator is asking for</li>
            </ul>
          </div>

          <aside className="card">
            <h3 className="small">How Drs Pathway can support you</h3>
            <ul className="list small">
              <li>Clarifying exactly which CHSI report your case needs</li>
              <li>Explaining how CHSI links to your DataFlow and licensing file</li>
              <li>Reviewing screenshots or documents when something is unclear</li>
              <li>Helping you prepare a clean package for Gulf regulators</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Help CTA */}
      <section className="band--light" id="chsi-help">
        <div className="shell grid-2">
          <div>
            <h2>Need help with CHSI verification?</h2>
            <p className="small">
              If you face any issue during CHSI verification — identity approval, university record mismatch,
              payment for the English report, or sending the report — our team can guide you through the
              correct steps.
            </p>
            <p className="small mt">
              Share your current status, documents, and the request you received from DataFlow or the
              regulator, and we will map what you need to do next.
            </p>
          </div>

          <div className="card">
            <p className="small">
              Ready to talk to someone about your CHSI case? Send us your details and we will get back to you.
            </p>
            <a href="/#contact" className="btn btn--primary" style={{ marginTop: "12px" }}>
              Contact Drs Pathway for CHSI help
            </a>
            <p className="small muted" style={{ marginTop: "10px" }}>
              We usually respond within 1–2 business days. For urgent cases, mention your deadline or
              regulator reference number.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
