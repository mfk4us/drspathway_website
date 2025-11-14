import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SCFHS Mumaris+ & SMLE Exam Registration Support | Drs Pathway",
    template: "%s | SCFHS Registration – Drs Pathway",
  },
  description:
    "Doctor‑led SCFHS and SMLE exam registration support for doctors, nurses, pharmacists, dentists, and allied health professionals planning to work in Saudi Arabia. Full guidance on Mumaris+, Dataflow sequence, exam booking, and licensing roadmap.",
  keywords: [
    "SCFHS",
    "SMLE",
    "Saudi Medical Licensing Exam",
    "Mumaris+",
    "SCFHS registration",
    "Saudi healthcare licensing",
    "SMLE exam help",
    "SCFHS exam process",
    "Drs Pathway SCFHS",
    "Saudi medical license",
    "GCC medical licensing",
  ],
  alternates: {
    canonical: "/scfhs-mumaris-licensing",
  },
  openGraph: {
    type: "article",
    url: "https://drspathway.com/scfhs-mumaris-licensing",
    title: "SCFHS Mumaris+ & SMLE Exam Registration Support | Drs Pathway",
    description:
      "End‑to‑end support for SCFHS / SMLE exam registration, Mumaris+ setup, Dataflow alignment, classification steps, and licensing roadmap for Saudi Arabia.",
    siteName: "Drs Pathway",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Drs Pathway – SCFHS Mumaris+ exam & registration support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SCFHS & SMLE Exam Registration Support | Drs Pathway",
    description:
      "Doctor‑led guidance for SCFHS / SMLE registration, Mumaris+ account setup, exam booking, and Saudi licensing steps.",
  },
};

export default function ScfhsMumarisLicensingPage() {
  return (
    <main className="page">
      {/* Hero / Intro */}
      <section className="band--brand" id="scfhs-hero">
        <div className="shell">
          <div>
            <p className="eyebrow">Saudi Medical Licensing Exam · SCFHS / SMLE</p>
            <h1 className="display">
              Saudi Medical Licensing Exam (SMLE) &amp; SCFHS Registration Support
            </h1>
            <p className="lead">
              We help you understand which SCFHS / SMLE exam you need, complete registration correctly, and follow a clear roadmap from exam booking to full Saudi licensing through Mumaris+.
            </p>

            <div className="cta-row">
              <a href="#license-cta" className="btn btn--primary">
                Get exam &amp; registration help
              </a>
              <a href="#prep-flow" className="btn btn--ghost">
                See full process
              </a>
            </div>

            <ul className="values">
              <li>SCFHS / SMLE exam &amp; registration guidance</li>
              <li>Aligned with Saudi exam &amp; licensing rules</li>
              <li>Support on Mumaris+ &amp; Dataflow steps</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Overview */}
      <section className="band--dark">
        <div className="shell grid-2">
          <div>
            <h2>Why the SCFHS / SMLE exam matters</h2>
            <p className="small">
              Like many Gulf countries, Saudi Arabia requires healthcare professionals to clear a
              <strong> licensing exam</strong> before they can practice. For physicians this is the{" "}
              <strong>SMLE</strong>, and for other specialties there are dedicated SCFHS exams.
            </p>
            <p className="small mt">
              With thousands of candidates competing every year for limited posts, the exams are
              <strong> tough and highly competitive</strong>. Having a clear licensing roadmap and
              understanding each step ahead of time makes a big difference to your score — and your career.
            </p>
          </div>

          <div className="card">
            <h3 className="small">What you get through Drs Pathway</h3>
            <ul className="list small">
              <li>Explanation of SCFHS / SMLE exam options for your profession</li>
              <li>Clarification of Dataflow, Mumaris+ and licensing sequence</li>
              <li>Guidance on documents needed for registration and booking</li>
              <li>Optional one‑to‑one call to review your plan and timing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process / Flow */}
      <section className="band--light" id="prep-flow">
        <div className="shell">
          <h2>How the SCFHS / SMLE exam &amp; registration flow works</h2>
          <p className="small">
            Follow these steps to move from first enquiry to sitting your exam and updating your
            Mumaris+ profile with the result.
          </p>

          <ol className="steps">
            <li>
              <div className="step-num">1</div>
              <div>
                <h3>Share your profile and target</h3>
                <p className="small">
                  Tell us your profession, years of experience, and where you are in the Saudi
                  journey so far. We check your eligibility and which SCFHS / SMLE path fits you.
                </p>
              </div>
            </li>
            <li>
              <div className="step-num">2</div>
              <div>
                <h3>Plan your exam &amp; licensing pathway</h3>
                <p className="small">
                  We outline the sequence for you: Dataflow (if needed), SCFHS / SMLE exam,
                  classification and registration in Mumaris+, and job timing in Saudi Arabia.
                </p>
              </div>
            </li>
            <li>
              <div className="step-num">3</div>
              <div>
                <h3>Registration &amp; account setup</h3>
                <p className="small">
                  We guide you through creating or updating your Mumaris+ account, linking your
                  Dataflow profile when applicable, and preparing documents needed for exam booking.
                </p>
              </div>
            </li>
            <li>
              <div className="step-num">4</div>
              <div>
                <h3>Book and prepare for the exam</h3>
                <p className="small">
                  Once you are ready, we support you in choosing the right exam window, booking your
                  exam slot, and organising your exam timeline around your work and family life.
                </p>
              </div>
            </li>
            <li>
              <div className="step-num">5</div>
              <div>
                <h3>Post‑exam licensing steps</h3>
                <p className="small">
                  After the result, we help you connect it inside Mumaris+, understand your
                  classification, and plan the next career move in Saudi — whether residency,
                  specialist post, or allied health position.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Why study with us */}
      <section className="band--light">
        <div className="shell grid-2">
          <div>
            <h2>Get SCFHS exam &amp; registration help with Drs Pathway</h2>
            <p className="small">
              Many candidates search multiple websites for exam details, registration rules, and licensing steps.
              Drs Pathway keeps your <strong>exam registration and licensing journey in one place</strong>.
            </p>
            <p className="small mt">
              Our guidance is shaped by clinicians familiar with Saudi practice and the realities of
              working in KSA. The goal is to help you <strong>navigate SCFHS systems smoothly and enter Saudi healthcare</strong>.
            </p>
          </div>

          <div className="card">
            <h3 className="small">Why candidates choose us</h3>
            <ul className="list small">
              <li>Doctor‑led review of your licensing plan and exam timeline</li>
              <li>Practical tips on balancing work, family, and exam dates</li>
              <li>Guidance on re‑attempt strategy if needed</li>
              <li>Connection to licensing and Dataflow support when you are ready</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Licensing CTA */}
      <section className="band--dark" id="license-cta">
        <div className="shell grid-2">
          <div>
            <h2>Apply for your SCFHS / SMLE license and secure your future in Saudi Arabia</h2>
            <p className="small">
              Passing the exam is only one part of the journey. We help you connect your exam
              results with <strong>Mumaris+</strong>, understand classification and registration
              categories, and plan your next career steps in Saudi Arabia.
            </p>
            <p className="small mt">
              Whether you are just starting preparation or already close to exam date, you can plug
              into Drs Pathway for <strong>structured support</strong>.
            </p>
          </div>

          <div className="card">
            <h3 className="small">Start your SCFHS journey</h3>
            <ul className="list small">
              <li>Share your profession and years of experience</li>
              <li>Tell us your target timeline for Saudi relocation</li>
              <li>Receive a simple roadmap for exam + licensing steps</li>
            </ul>
            <a href="/#contact" className="btn btn--primary" style={{ marginTop: "12px" }}>
              Apply for SCFHS / SMLE guidance
            </a>
            <p className="small muted" style={{ marginTop: "10px" }}>
              We currently respond within 1–2 business days. For urgent cases, mention your exam
              date or job deadline in your message.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
