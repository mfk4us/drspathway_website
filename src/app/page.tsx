"use client";

import { useEffect } from "react";

function Num({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-9 h-9 rounded-full grid place-items-center font-semibold text-brand"
      style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-200)" }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const WHATSAPP = "https://wa.me/9665XXXXXXXX"; // TODO: replace with your real number
  const IG = "https://www.instagram.com/drspathway?igsh=bWJsdmozeWZwNWh5";
  const FB = "https://www.facebook.com/share/14Qt2FGdB9b/";
  const LI = "https://www.linkedin.com/company/drs-pathway";

  // Reveal-in-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Drs Pathway logo" className="h-10 w-10 object-contain" />
            <span className="font-extrabold text-2xl tracking-tight text-ink">Drs Pathway</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-ink/80">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#docreview" className="hover:text-brand">Doc&nbsp;Review</a>
            <a href="#pricing" className="hover:text-brand">Packages</a>
            <a href="#process" className="hover:text-brand">Process</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#contact" className="btn btn-primary">Book consultation</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="bg-hero text-white">
        <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <span className="chip">Professional medical licensing guidance (Saudi Arabia)</span>
            <h1 className="mt-4 text-4xl md:text-6xl/tight font-extrabold">
              Your Trusted Guide to SCFHS, DataFlow &amp; Prometric
            </h1>
            <p className="mt-4 text-white/85 md:text-lg">
              Drs Pathway is a paid consultancy helping healthcare professionals complete{" "}
              <b>Dataflow</b>, <b>SCFHS (Mumaris+)</b>, and <b>Prometric</b> steps with clarity and confidence.
              <br />
              <span className="inline-block mt-2">
                <b>Coming soon:</b> CHSI verification assistance for Chinese graduates.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} className="btn btn-outline">Chat on WhatsApp</a>
              <a href="#pricing" className="btn btn-primary">See packages</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/85">
              <a href={IG} target="_blank" className="link text-white/90">Instagram</a>
              <a href={FB} target="_blank" className="link text-white/90">Facebook</a>
              <a href={LI} target="_blank" className="link text-white/90">LinkedIn</a>
            </div>
          </div>

          <div className="card p-5 md:p-6 reveal">
            <h3 className="font-semibold text-lg text-ink">Executive Summary</h3>
            <p className="mt-2 text-ink/80 text-sm">
              Drs Pathway guides healthcare professionals through Saudi medical licensing —
              including Dataflow, SCFHS Mumaris+, Prometric exam orientation, and (soon) CHSI verification —
              with personalized, transparent, and affordable support.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-ink/80">
              <li className="p-3 rounded-lg" style={{ background: "var(--color-brand-100)" }}>Dataflow support</li>
              <li className="p-3 rounded-lg" style={{ background: "var(--color-brand-100)" }}>Mumaris+ registration</li>
              <li className="p-3 rounded-lg" style={{ background: "var(--color-brand-100)" }}>Prometric guidance</li>
              <li className="p-3 rounded-lg" style={{ background: "var(--color-brand-100)" }}>One-to-One Doc Review</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 section-alt">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Services Overview</h2>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <div className="card p-5 reveal">
              <Num>1</Num>
              <h3 className="mt-3 font-semibold text-lg text-ink">Licensing Guidance</h3>
              <ul className="mt-2 text-ink/70 text-sm space-y-1.5">
                <li>Dataflow verification support</li>
                <li>SCFHS Mumaris+ registration &amp; licensing</li>
                <li>Application follow-up &amp; issue resolution</li>
              </ul>
            </div>

            <div className="card p-5 reveal">
              <Num>2</Num>
              <h3 className="mt-3 font-semibold text-lg text-ink">Exam &amp; Career Support</h3>
              <ul className="mt-2 text-ink/70 text-sm space-y-1.5">
                <li>Prometric exam guidance</li>
                <li>Bi-weekly online lectures</li>
                <li>1-to-1 sessions (career planning &amp; guidance)</li>
              </ul>
            </div>

            <div id="docreview" className="card p-5 reveal">
              <Num>3</Num>
              <h3 className="mt-3 font-semibold text-lg text-ink">One-to-One Document Review</h3>
              <p className="mt-2 text-ink/70 text-sm">
                Private session to review <b>CV, degree certificates, translations, attestations, ID, experience letters</b>.
                Includes checklist, corrections, and <b>final pre-submission verification</b>.
                Available standalone, in Premium, or hourly add-on.
              </p>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-3 gap-5">
            <div className="card p-5 reveal">
              <Num>4</Num>
              <h3 className="mt-3 font-semibold text-lg text-ink">CHSI Verification (Coming Soon)</h3>
              <p className="mt-2 text-ink/70 text-sm">
                Assistance for <b>Chinese graduates</b> completing CHSI — a mandatory step for Dataflow.
              </p>
            </div>

            <div className="card p-5 reveal">
              <Num>5</Num>
              <h3 className="mt-3 font-semibold text-lg text-ink">Who We Serve</h3>
              <ul className="mt-2 text-ink/70 text-sm space-y-1.5">
                <li>Junior &amp; Senior Doctors</li>
                <li>Physiotherapists, Nurses, Pharmacists</li>
                <li>Allied Health Professionals</li>
                <li>International graduates (China, Pakistan, India, Egypt, etc.)</li>
              </ul>
            </div>

            <div className="card p-5 reveal">
              <Num>6</Num>
              <h3 className="mt-3 font-semibold text-lg text-ink">Core Values</h3>
              <p className="mt-2 text-ink/70 text-sm">
                Integrity • Expertise • Transparency • Accessibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pricing" className="py-16 section">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Packages &amp; Pricing</h2>
          <p className="mt-3 text-ink/70">Transparent, flexible, and based on your needs.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { t: "Basic", s: "Dataflow + Mumaris+ registration guidance", price: "SAR 250–400" },
              { t: "Standard", s: "Dataflow + Mumaris+ + Prometric preparation", price: "SAR 500–700" },
              { t: "Premium", s: "Full support + Document review + Mentorship (includes 1 one-to-one doc review session)", price: "SAR 800–1,200" },
            ].map((p, i) => (
              <div key={i} className="card p-5 flex flex-col reveal">
                <h3 className="font-semibold text-lg text-ink">{p.t}</h3>
                <p className="text-ink/70 text-sm">{p.s}</p>
                <div className="mt-3 text-3xl font-extrabold text-ink">{p.price}</div>
                <a href="#contact" className="mt-4 btn btn-primary">Book now</a>
              </div>
            ))}
          </div>
          <div className="mt-5 grid md:grid-cols-2 gap-5 text-sm text-ink/80">
            <div className="card p-5 reveal">
              <h4 className="font-semibold text-ink">Add-ons / Hourly</h4>
              <ul className="mt-2 space-y-1.5">
                <li><b>One-to-One Document Review (stand-alone):</b> SAR 100–150 per hour (typical session 1–2 hours)</li>
                <li><b>Mock test &amp; exam review:</b> SAR 100 per session</li>
                <li className="text-ink/60">*Prices may adjust based on complexity &amp; turnaround time</li>
              </ul>
            </div>
            <div className="card p-5 reveal">
              <h4 className="font-semibold text-ink">Payments Accepted</h4>
              <ul className="mt-2 space-y-1.5">
                <li>STC Pay</li>
                <li>Bank Transfer</li>
                <li>PayPal (for international clients)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 section-alt">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">How It Works</h2>
          <p className="mt-3 text-ink/70">A clear path from paid consultation to licensing success.</p>
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {[
              ["Paid Consultation", "Understand background, confirm documents & pathway."],
              ["Plan & Checklist", "Tailored steps, timeline, responsibilities."],
              ["Execution & Follow-ups", "Submit Dataflow, Mumaris+, Prometric; fix issues."],
              ["Final Review", "One-to-one document verification before submission."],
            ].map(([t, d], i) => (
              <div key={i} className="card p-5 reveal">
                <Num>{i + 1}</Num>
                <h3 className="mt-4 font-semibold text-ink">{t}</h3>
                <p className="mt-2 text-ink/70 text-sm">{d}</p>
              </div>
            ))}
          </div>

          {/* Optional: Document Review Workflow */}
          <div className="mt-8 card p-5 reveal">
            <h3 className="font-semibold text-ink">Document Review Workflow (Example)</h3>
            <ol className="mt-3 list-decimal pl-5 text-ink/80 space-y-1.5 text-sm">
              <li>Client books &amp; uploads documents via secure link.</li>
              <li>Pre-review: issues are marked for correction.</li>
              <li>Live one-to-one session: walkthrough of corrections &amp; next steps.</li>
              <li>Final verification before submission.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 section">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-ink">About Drs Pathway</h2>
            <p className="mt-3 text-ink/70">
              <b>Founder:</b> Dr. SAAD KHAN — <i>General Physician</i>.<br />
              Operating digitally via <b>drspathway.com</b> and active social pages @drspathway.
            </p>
            <p className="mt-3 text-ink/70">
              <b>Mission:</b> “To empower healthcare professionals to navigate the Saudi medical licensing process confidently and successfully.”
            </p>
            <p className="mt-2 text-ink/70">
              <b>Vision:</b> To become the leading medical licensing guidance platform in Saudi Arabia and the GCC region.
            </p>
            <p className="mt-2 text-ink/70">
              <b>Disclaimer:</b> “Drs Pathway provides professional guidance and documentation assistance. It is not a recruitment or licensing agency.”
            </p>
          </div>
          <div className="reveal">
            <h3 className="text-xl font-semibold text-ink">Marketing &amp; Networking</h3>
            <ul className="mt-3 text-ink/70 text-sm space-y-2">
              <li><b>Social:</b> Instagram, Facebook, LinkedIn — @drspathway</li>
              <li><b>Content:</b> Educational posts (Dataflow, Mumaris+, Prometric), reels/shorts, testimonials, weekly Q&amp;A stories</li>
              <li><b>Website:</b> SEO keywords: SCFHS registration support, Dataflow Saudi Arabia, Prometric exam help KSA</li>
              <li><b>Partners:</b> Hospitals, clinics, HR officers; WhatsApp/Telegram licensing groups</li>
            </ul>
            <div className="mt-5 p-4 rounded-xl" style={{ background: "var(--color-brand-100)", border: "1px solid var(--color-border)" }}>
              <p className="text-sm text-ink/70">
                <b>Core Values:</b> Integrity • Expertise • Transparency • Accessibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 section-alt">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="card p-5 reveal">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We will contact you soon.");
              }}
            >
              <div className="grid gap-3">
                <input className="px-4 py-3 rounded-xl border bg-surface" style={{ borderColor: "var(--color-border)" }} placeholder="Full name" required />
                <input className="px-4 py-3 rounded-xl border bg-surface" style={{ borderColor: "var(--color-border)" }} placeholder="Email" type="email" required />
                <input className="px-4 py-3 rounded-xl border bg-surface" style={{ borderColor: "var(--color-border)" }} placeholder="WhatsApp number" required />
                <select className="px-4 py-3 rounded-xl border bg-surface" style={{ borderColor: "var(--color-border)" }} required defaultValue="">
                  <option value="" disabled>Profession</option>
                  <option>Doctor</option>
                  <option>Physiotherapist</option>
                  <option>Nurse</option>
                  <option>Pharmacist</option>
                  <option>Allied Health</option>
                </select>
                <textarea
                  className="px-4 py-3 rounded-xl border bg-surface"
                  style={{ borderColor: "var(--color-border)" }}
                  rows={4}
                  placeholder="Write a short note about your goal and what you need help with (Dataflow, Mumaris+, Prometric, etc.)"
                />
                <button className="btn" type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="card p-5 reveal">
            <div className="space-y-4 text-ink/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg" style={{ background: "var(--color-brand-100)" }}>🌐</div>
                <a className="link" href="https://drspathway.com" target="_blank">drspathway.com</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg" style={{ background: "var(--color-brand-100)" }}>💬</div>
                <a className="link" href={WHATSAPP} target="_blank">WhatsApp us</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg" style={{ background: "var(--color-brand-100)" }}>✉️</div>
                <a className="link" href="mailto:info@drspathway.com">info@drspathway.com</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg" style={{ background: "var(--color-brand-100)" }}>📱</div>
                <div className="flex gap-4">
                  <a href={IG} target="_blank" className="link">Instagram</a>
                  <a href={FB} target="_blank" className="link">Facebook</a>
                  <a href={LI} target="_blank" className="link">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="mt-6 divider">
              <p className="pt-4 text-xs text-ink/60">
                For privacy reasons, we do not publicly disclose a physical location. Services are provided digitally.
              </p>
              <p className="pt-2 text-xs text-ink/60">
                By messaging, you agree this is a professional consultancy, not a recruitment/licensing agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-10 pb-12 border-t section" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[1200px] mx-auto px-4 text-sm text-ink/70">
          © {new Date().getFullYear()} Drs Pathway. All rights reserved.
        </div>
      </footer>
    </main>
  );
}