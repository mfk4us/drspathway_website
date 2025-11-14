import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Dataflow Verification Support for Saudi Arabia & GCC | Drs Pathway",
    template: "%s | Dataflow Verification – Drs Pathway",
  },
  description:
    "Doctor-led Dataflow Primary Source Verification (PSV) support for healthcare professionals going to Saudi Arabia, UAE, Qatar, Oman, Bahrain, and Kuwait — from document checklist and account setup to final positive report.",
  keywords: [
    "Dataflow",
    "Dataflow verification",
    "Primary Source Verification",
    "PSV",
    "Dataflow Saudi Arabia",
    "Dataflow GCC",
    "SCFHS Dataflow",
    "DHA Dataflow",
    "HAAD Dataflow",
    "MOH Dataflow",
    "GCC healthcare licensing",
    "Drs Pathway Dataflow support",
  ],
  alternates: {
    canonical: "/dataflow-verification",
  },
  openGraph: {
    type: "article",
    url: "https://drspathway.com/dataflow-verification",
    title: "Dataflow Verification Support for Saudi Arabia & GCC | Drs Pathway",
    description:
      "Step-by-step, doctor-led guidance for Dataflow Primary Source Verification (PSV) for doctors, nurses, pharmacists and allied health professionals targeting Saudi Arabia and other GCC countries.",
    siteName: "Drs Pathway",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Drs Pathway – Dataflow verification support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dataflow Verification Support for GCC | Drs Pathway",
    description:
      "Doctor-led Dataflow verification and PSV guidance for Saudi Arabia and GCC healthcare professionals.",
  },
};

export default function DataflowVerificationPage() {
  return (
    <main className="page">
      {/* Hero / Intro */}
      <section className="band--brand">
        <div className="shell">
          <div>
            <p className="eyebrow">Dataflow Verification · GCC Countries</p>
            <h1 className="display">
              Dataflow Verification Support for Saudi Arabia &amp; GCC
            </h1>
            <p className="lead">
              We help doctors, nurses, pharmacists, and allied health professionals complete{" "}
              <strong>Dataflow Primary Source Verification (PSV)</strong> smoothly for Saudi Arabia, UAE,
              Qatar, Oman, Bahrain, and Kuwait — from the first login to your final positive report.
            </p>

            <div className="cta-row">
              <a href="#df-contact" className="btn btn--primary">
                Book Dataflow consultation
              </a>
              <a href="#df-process" className="btn btn--ghost">
                See how Dataflow works
              </a>
            </div>

            <ul className="values">
              <li>Doctor-led guidance</li>
              <li>GCC licensing focus</li>
              <li>WhatsApp updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What is Dataflow */}
      <section className="band--dark">
        <div className="shell grid-2">
          <div>
            <p className="eyebrow">Understanding the basics</p>
            <h2>What is Dataflow Verification?</h2>
            <p className="small">
              Dataflow is a <strong>background verification service</strong> used by Gulf healthcare regulators to
              check that your <strong>education, registration, and experience documents</strong> are genuine. Your
              degree, license, and experience letters are verified directly from the original issuing authority —
              this is called <strong>Primary Source Verification (PSV)</strong>.
            </p>
            <p className="small mt">
              A positive Dataflow report is usually required{" "}
              <strong>before you can sit your licensing exam</strong> or complete registration with SCFHS, DHA,
              HAAD, MOH, QCHP, OMSB, and other GCC bodies.
            </p>
          </div>

          <div className="card">
            <div className="icon-title sm">
              <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="12" rx="2" />
                <path d="M4 11h16" />
              </svg>
              <h3>Why is Dataflow required?</h3>
            </div>
            <ul className="list small">
              <li>Prevents fake or altered certificates from entering the system</li>
              <li>Protects patient safety and hospital quality standards</li>
              <li>Ensures your profile meets the regulator’s minimum criteria</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GCC relevance & PSV */}
      <section className="band--light">
        <div className="shell grid-2">
          <div>
            <h2>Dataflow in GCC Countries</h2>
            <p className="small">
              Gulf Cooperation Council (GCC) regulators rely on Dataflow to validate healthcare professionals
              before granting licenses. Requirements differ slightly by country and profession, but the core idea
              is the same: <strong>verify your story directly from the source</strong>.
            </p>
            <ul className="list small mt">
              <li>Saudi Arabia – SCFHS uses Dataflow for most healthcare categories</li>
              <li>UAE – DHA, HAAD, and MOH link Dataflow to exam and license steps</li>
              <li>Qatar, Oman, Bahrain, Kuwait – country councils confirm credentials via PSV</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="small" style={{ fontWeight: 800 }}>
              What is Primary Source Verification (PSV)?
            </h3>
            <p className="small">
              PSV means your documents are checked directly from the <strong>primary issuer</strong> — your
              university, council, or hospital — not from photocopies or scans only. This reduces fraud and gives
              regulators confidence that your qualifications are real and current.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="df-process" className="band--dark">
        <div className="shell">
          <h2>How Drs Pathway Supports Your Dataflow</h2>
          <ol className="steps">
            <li>
              <div className="step-num">1</div>
              <div>
                <h3>Profile review &amp; country mapping</h3>
                <p className="small">
                  We review your CV, degrees, licenses, and experience to confirm which regulator and Dataflow
                  package you need for Saudi Arabia, UAE, or other GCC countries.
                </p>
              </div>
            </li>
            <li>
              <div className="step-num">2</div>
              <div>
                <h3>Document checklist &amp; corrections</h3>
                <p className="small">
                  You receive a detailed checklist with naming, dates, and attestation requirements. We flag issues
                  early — mismatched names, missing stamps, incomplete experience letters — so your case does not
                  get delayed.
                </p>
              </div>
            </li>
            <li>
              <div className="step-num">3</div>
              <div>
                <h3>Dataflow account &amp; application setup</h3>
                <p className="small">
                  We guide you through creating or accessing your Dataflow account, choosing the correct package,
                  and filling in your employment and education history accurately.
                </p>
              </div>
            </li>
            <li>
              <div className="step-num">4</div>
              <div>
                <h3>Submission &amp; follow-up</h3>
                <p className="small">
                  Once submitted, we help you understand tracking statuses, respond to queries, and follow up when
                  an issuing authority is slow to reply.
                </p>
              </div>
            </li>
            <li>
              <div className="step-num">5</div>
              <div>
                <h3>Next steps after positive Dataflow</h3>
                <p className="small">
                  After you receive a positive report, we help you connect it to your SCFHS Mumaris+ account or
                  other regulator profile and plan your exam and licensing steps.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Who we help */}
      <section className="band--light">
        <div className="shell">
          <h2>Who We Help With Dataflow</h2>
          <div className="cards-3 mt">
            <article className="card">
              <h3>Doctors &amp; Dentists</h3>
              <p className="small">
                MBBS, MD, MS, DNB, BDS, and MDS holders planning to work as residents, specialists, or consultants
                in Saudi Arabia and other GCC countries.
              </p>
            </article>
            <article className="card">
              <h3>Nurses &amp; Allied Health</h3>
              <p className="small">
                BSc Nursing, GNM, physiotherapists, lab technicians, radiographers, pharmacists, and other allied
                health professionals.
              </p>
            </article>
            <article className="card">
              <h3>Fresh graduates &amp; career shifters</h3>
              <p className="small">
                New graduates or professionals moving from one GCC country to another who need to understand how
                experience is counted and which path fits their profile.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Countries strip */}
      <section className="band--dark">
        <div className="shell">
          <h2>Dataflow Support For These Regulators</h2>
          <ul className="values">
            <li>Saudi Arabia – SCFHS</li>
            <li>UAE – DHA, HAAD, MOH</li>
            <li>Qatar – QCHP</li>
            <li>Oman – OMSB</li>
            <li>Bahrain – NHRA</li>
            <li>Kuwait – MOH &amp; councils</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="band--light">
        <div className="shell">
          <h2>Dataflow FAQs</h2>
          <div className="faqs">
            <details className="faq">
              <summary>How long does Dataflow usually take?</summary>
              <div className="answer">
                <p className="small">
                  Timelines vary by country, profession, and how quickly your university or hospital responds.
                  Most cases complete in <strong>30–45 days</strong>, but complex cases or very old experience
                  letters can take longer.
                </p>
              </div>
            </details>

            <details className="faq">
              <summary>What happens after my Dataflow report is positive?</summary>
              <div className="answer">
                <p className="small">
                  After a positive report, you usually link it to your regulator account (for example, SCFHS
                  Mumaris+ or DHA account). Then you move to the exam or licensing step. We help you plan these
                  next steps.
                </p>
              </div>
            </details>

            <details className="faq">
              <summary>What if there is a negative or “unable to verify” remark?</summary>
              <div className="answer">
                <p className="small">
                  We review the remark, check what the issuing authority answered, and help you understand options
                  such as re-submission, correction, or providing additional documents depending on the case.
                </p>
              </div>
            </details>

            <details className="faq">
              <summary>Can Drs Pathway guarantee my Dataflow result?</summary>
              <div className="answer">
                <p className="small">
                  No genuine consultancy can guarantee a positive Dataflow report, because the final decision
                  depends on your university, council, and hospital responses. We focus on preparing your file
                  properly and reducing avoidable delays.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="df-contact" className="band--dark">
        <div className="shell grid-2">
          <div>
            <h2>Ready to start your Dataflow?</h2>
            <p className="small">
              Share your current status — new application, re-submission, or country transfer — and we will map
              your path for Saudi Arabia or other GCC countries.
            </p>
            <ul className="list small mt">
              <li>One-to-one online consultation</li>
              <li>Clear written checklist after the call</li>
              <li>WhatsApp support for quick questions</li>
            </ul>
          </div>

          <div className="card">
            <form>
              <label>
                Full name
                <input type="text" name="name" placeholder="Your full name" />
              </label>
              <label>
                WhatsApp number
                <input type="tel" name="phone" placeholder="+966…" />
              </label>
              <label>
                Profession
                <input type="text" name="profession" placeholder="Doctor, nurse, pharmacist…" />
              </label>
              <label>
                Target country
                <select name="country">
                  <option value="">Select a country</option>
                  <option value="saudi">Saudi Arabia</option>
                  <option value="uae">United Arab Emirates</option>
                  <option value="qatar">Qatar</option>
                  <option value="oman">Oman</option>
                  <option value="bahrain">Bahrain</option>
                  <option value="kuwait">Kuwait</option>
                </select>
              </label>
              <label>
                Brief background
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us your current status with Dataflow…"
                />
              </label>
              <div style={{ marginTop: "14px" }}>
                <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>
                  Request Dataflow consultation
                </button>
              </div>
            </form>
            <p className="small muted" style={{ marginTop: "10px" }}>
              We currently respond within 1–2 business days. For urgent cases, mention your deadline in the message
              box.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
