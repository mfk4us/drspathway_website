 "use client";
import { useEffect, useState } from "react";
/* Fresh, Tailwind-free single-file homepage for Drs Pathway
   - Pure CSS (styled-jsx) + semantic HTML
   - Modern blue/teal palette
   - Responsive, accessible, fast
   - Anchored sections: Home, About, Services, Packages, Experts, Testimonials, Process, Blog, Contact
*/

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const WHATSAPP = "https://wa.me/966598172331"; // TODO: put real number
  const IG = "https://www.instagram.com/drspathway?igsh=bWJsdmozeWZwNWh5";
  const FB = "https://www.facebook.com/share/14Qt2FGdB9b/";
  const LI = "https://www.linkedin.com/company/drs-pathway";

  useEffect(() => {
    // Mark the DOM ready so CSS shows content before JS as a safety
    document.documentElement.classList.add('reveal-ready');

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      // Fallback: show all
      els.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* ===== Header ===== */}
      <header className="site-header" role="banner">
        <div className="shell header-row">
          <a href="#home" className="brand" aria-label="Drs Pathway — Home">
            <img src="/logo.png" width={40} height={40} alt="Drs Pathway logo" className="logo-img" />
            <span className="brand-text">Drs Pathway</span>
          </a>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Primary">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#packages" onClick={() => setMenuOpen(false)}>Packages</a>
            <a href="#experts" onClick={() => setMenuOpen(false)}>Experts</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>Get started</a>
          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="home" className="hero" role="region" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Guiding Your Medical Licensing Journey</p>
            <h1 id="hero-title" className="display">
              Your trusted guide to medical registration in Saudi Arabia
            </h1>
            <p className="lead">
              Step‑by‑step support for healthcare professionals navigating <b>Dataflow</b>,{" "}
              <b>SCFHS Mumaris+</b>, <b>Prometric</b>, and <b>China Higher Education Student Information (CHSI)</b> — coming soon.
            </p>
            <div className="cta-row">
              <a href="#packages" className="btn btn--primary">View packages</a>
              <a href="#contact" className="btn btn--ghost">Book consultation</a>
            </div>
          </div>

          <aside className="hero-card reveal" aria-label="Quick intro">
            <h3>Quick intro</h3>
            <p>
              We guide healthcare professionals through every step of Saudi medical licensing —
              from <b>Dataflow</b> and <b>SCFHS Mumaris+</b> to <b>Prometric</b> prep and <b>China Higher Education Student Information (CHSI)</b> — coming soon.
              Clear checklists, one‑to‑one support, and fast follow‑ups keep you moving without stress.
            </p>
            <ul className="chips">
              <li>Licensing Guidance</li>
              <li>Exam & Career Support</li>
              <li>Document Review</li>
              <li>China Higher Education Student Information (CHSI) — coming soon</li>
            </ul>
          </aside>
        </div>
        <div className="hero-bg" aria-hidden="true" />
      </section>


      {/* ===== Services ===== */}
      <section id="services" className="band band--dark" aria-labelledby="services-title">
        <div className="shell">
          <h2 id="services-title">Our Services</h2>
          <div className="cards-3">
            <article className="card reveal">
              <h3 className="icon-title">
                <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 4h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6l-4 3v-3H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                  <path d="M9 8h6M9 11h6"/>
                </svg>
                <span>Licensing Guidance</span>
              </h3>
              <ul className="list">
                <li>Dataflow verification support</li>
                <li>SCFHS Mumaris+ registration & licensing</li>
                <li>Application follow‑up & issue resolution</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3 className="icon-title">
                <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 8l9-4 9 4-9 4-9-4z"/>
                  <path d="M21 10v4c-2.5 2-6 3-9 3s-6.5-1-9-3v-4"/>
                  <path d="M7 12v4"/>
                </svg>
                <span>Exam & Career Support</span>
              </h3>
              <ul className="list">
                <li>Prometric exam guidance</li>
                <li>Bi‑weekly online lectures</li>
                <li>One‑to‑one mentoring</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3 className="icon-title">
                <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z"/>
                  <path d="M14 2v5h5"/>
                  <path d="M9 14l2 2 4-4"/>
                </svg>
                <span>One‑to‑One Document Review</span>
              </h3>
              <p>
                Private session to review CV, certificates, translations, attestations, ID, and experience letters.
                Includes checklist, corrections, and final pre‑submission verification.
              </p>
            </article>
          </div>

          <div className="cards-3 mt">
            <article className="card reveal">
              <h3 className="icon-title">
                <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M2.5 12h19"/>
                  <path d="M12 3c3 3 3 15 0 18c-3-3-3-15 0-18z"/>
                  <path d="M15 8v4h3"/>
                </svg>
                <span>China Higher Education Student Information (CHSI) — coming soon</span>
              </h3>
              <p>Guidance for Chinese graduates completing China Higher Education Student Information (CHSI) verification.</p>
            </article>
            <article className="card reveal">
              <h3 className="icon-title">
                <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="8" cy="10" r="3"/>
                  <circle cx="16" cy="10" r="3"/>
                  <path d="M4 19v-1a5 5 0 0 1 5-5h0"/>
                  <path d="M20 19v-1a5 5 0 0 0-5-5h0"/>
                </svg>
                <span>Who We Serve</span>
              </h3>
              <ul className="list">
                <li>Junior & Senior Doctors</li>
                <li>Physiotherapists • Nurses • Pharmacists</li>
                <li>Allied Health • International graduates</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3 className="icon-title">
                <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 19c-1.5-1.5 1-4 3-4 0 2.5-2.5 4-3 4z"/>
                  <path d="M15 9l-6 6"/>
                  <path d="M12 7l5-5 2 2-5 5-2-2z"/>
                  <path d="M7 12l-2-2 5-5 2 2"/>
                  <circle cx="18" cy="6" r="1.5"/>
                </svg>
                <span>Ready to begin?</span>
              </h3>
              <p>Book a one‑to‑one consultation and we’ll map your exact pathway.</p>
              <a href="#contact" className="btn btn--primary">Book consultation</a>
            </article>
          </div>
        </div>
      </section>



      {/* ===== Packages ===== */}
      <section id="packages" className="band band--light" aria-labelledby="packages-title">
        <div className="shell">
          <h2 id="packages-title">Packages & Pricing</h2>
          <div className="pricing">
            <article className="card pricing-card reveal">
              <svg className="i-lg-stroke" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="14" height="14" rx="2"/>
                <rect x="7" y="7" width="14" height="14" rx="2"/>
              </svg>
              <h3>Basic</h3>
              <p className="muted">Dataflow + Mumaris+ registration guidance</p>
              <div className="price">SAR 250–400</div>
              <a href="#contact" className="btn btn--primary">Get started</a>
            </article>
            <article className="card pricing-card featured reveal">
              <div className="flag">Most Popular</div>
              <svg className="i-lg-stroke" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"/>
                <path d="M12 9l1.2 2.4 2.6.4-1.9 1.9.5 2.7L12 15.6l-2.4 1.8.5-2.7-1.9-1.9 2.6-.4L12 9z"/>
              </svg>
              <h3>Standard</h3>
              <p className="muted">Basic + Prometric preparation</p>
              <div className="price">SAR 500–700</div>
              <a href="#contact" className="btn btn--primary">Choose Standard</a>
            </article>
            <article className="card pricing-card reveal">
              <svg className="i-lg-stroke" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 8l4 3 5-6 5 6 4-3v9H3V8z"/>
                <path d="M3 17h18"/>
              </svg>
              <h3>Premium</h3>
              <p className="muted">Full support + Document review + Mentorship</p>
              <div className="price">SAR 800–1,200</div>
              <a href="#contact" className="btn btn--primary">Go Premium</a>
            </article>
          </div>

          <div className="cards-2 mt">
            <article className="card reveal">
              <h4>Add‑ons / Hourly</h4>
              <ul className="list">
                <li><b>One‑to‑One Document Review</b>: SAR 100–150 / hour (typical 1–2 hours)</li>
                <li><b>Mock test &amp; exam review</b>: SAR 100 / session</li>
              </ul>
            </article>
            <article className="card reveal">
              <h4>Payments Accepted</h4>
              <ul className="list">
                <li>STC Pay</li>
                <li>Bank Transfer</li>
                <li>PayPal (international)</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section id="process" className="band" aria-labelledby="process-title">
        <div className="shell">
          <h2 id="process-title">How It Works</h2>
          <ol className="steps">
            <li className="reveal">
              <span className="step-num">1</span>
              <div>
                <h4 className="icon-title sm">
                  <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="17" rx="2"/>
                    <path d="M8 2v4M16 2v4M3 9h18"/>
                    <path d="M9 14l2 2 4-4"/>
                  </svg>
                  <span>Book a Consultation</span>
                </h4>
                <p>Online via website or WhatsApp.</p>
              </div>
            </li>
            <li className="reveal">
              <span className="step-num">2</span>
              <div>
                <h4 className="icon-title sm">
                  <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 18a4 4 0 1 1 .7-7.95A6 6 0 1 1 18 17H7z"/>
                    <path d="M12 14v-6"/>
                    <path d="M9.5 11.5L12 9l2.5 2.5"/>
                  </svg>
                  <span>Document Upload &amp; Review</span>
                </h4>
                <p>Upload documents securely for a thorough pre‑check.</p>
              </div>
            </li>
            <li className="reveal">
              <span className="step-num">3</span>
              <div>
                <h4 className="icon-title sm">
                  <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 14a5 5 0 0 1 5-5h6a5 5 0 0 1 0 10H9l-4 3v-3a5 5 0 0 1-2-5z"/>
                    <path d="M7 9a4 4 0 0 1 4-4h5a4 4 0 0 1 0 8"/>
                  </svg>
                  <span>One‑to‑One Guidance</span>
                </h4>
                <p>Live session to correct &amp; verify documents.</p>
              </div>
            </li>
            <li className="reveal">
              <span className="step-num">4</span>
              <div>
                <h4 className="icon-title sm">
                  <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 7v5h4"/>
                    <path d="M8.5 12.5l2 2 4-4"/>
                  </svg>
                  <span>Follow‑Up Support</span>
                </h4>
                <p>We keep you updated until completion.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== Experts ===== */}
      <section id="experts" className="band band--brand" aria-labelledby="experts-title">
        <div className="shell">
          <h2 id="experts-title">Meet Our Experts</h2>
          <p className="lead invert">We collaborate with experienced professionals so every client gets the best guidance.</p>
          <div className="cards-3">
            {[
              { name: "Dr. Saad Khan", role: "Founder & Lead Consultant", expertise: "General Physician • Saudi Licensing & Document Review" },
              { name: "Dr. Rabbia Naz", role: "Consultant", expertise: "SCFHS & Prometric Specialist" },
              { name: "Dr. Muhammad", role: "Career Planning Expert", expertise: "Career Pathways & Exam Strategy" },
            ].map((x, i) => (
              <article key={i} className="card expert reveal">
                <div className="avatar" aria-hidden="true" />
                <h3>{x.name}</h3>
                <p className="muted">{x.role}</p>
                <p>{x.expertise}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section id="testimonials" className="band band--light" aria-labelledby="testimonials-title">
        <div className="shell">
          <h2 id="testimonials-title">Success Stories</h2>
          <div className="stats reveal">
            <div className="stat">
              <div className="num">180+</div>
              <div className="label">Successful registrations</div>
            </div>
            <div className="stat">
              <div className="num">95%</div>
              <div className="label">Client satisfaction</div>
            </div>
            <div className="stat">
              <div className="num">350+</div>
              <div className="label">One‑to‑one consultations</div>
            </div>
          </div>
          <div className="cards-2">
            <blockquote className="card quote reveal">
              <p>“Thanks to Dr’s Pathway, I completed my SCFHS registration smoothly and started my practice in Saudi Arabia. Highly recommend!”</p>
              <cite>— Client Name</cite>
            </blockquote>
            <blockquote className="card quote reveal">
              <p>“The one‑to‑one document review session was a game‑changer. Everything was accurate and ready for submission.”</p>
              <cite>— Client Name</cite>
            </blockquote>
          </div>
        </div>
      </section>


      {/* ===== Founder / About ===== */}
      <section id="about" className="band band--light" aria-labelledby="about-title">
        <div className="shell founder-grid">
          <div className="founder-visual">
            <div className="avatar-lg" aria-hidden="true" />
            <p className="muted small" style={{marginTop:8}}>Replace with real photo at <code>/public/founder.jpg</code> (size ~800×1000).</p>
          </div>

          <div className="founder-copy">
            <h2 id="about-title">About Dr’s Pathway</h2>
            <p>
              Dr’s Pathway is led by <b>Dr. Saad Khan (MBBS)</b> — Graduated from <b>Shandong First Medical University</b>; trained at <b>Nishtar Hospital, Multan</b>, with further experience at <b>Saudi German Hospital, Jeddah</b>, and currently practicing in KSA. We provide clear, step‑by‑step guidance so healthcare professionals can complete <b>Dataflow</b>, <b>SCFHS Mumaris+</b>, and <b>Prometric</b> requirements with confidence. <b>China Higher Education Student Information (CHSI)</b> support for Chinese graduates is launching soon.
            </p>

            <div className="badge-row">
              <span className="badge">Integrity</span>
              <span className="badge">Expertise</span>
              <span className="badge">Transparency</span>
              <span className="badge">Accessibility</span>
            </div>

            <div className="cards-2 mt">
              <article className="card">
                <h3 className="icon-title">
                  <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 4h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6l-4 3v-3H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                    <path d="M9 8h6M9 11h6"/>
                  </svg>
                  <span>What we do</span>
                </h3>
                <ul className="list">
                  <li>Step‑by‑step guidance: Dataflow, SCFHS, Prometric</li>
                  <li>Personalized one‑to‑one sessions &amp; document checks</li>
                  <li>Clear instructions, follow‑ups, and issue resolution</li>
                </ul>
              </article>

              <article className="card">
                <h3 className="icon-title">
                  <svg className="i-stroke" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3 6 6 .9-4.4 4.3 1 6-5.6-3-5.6 3 1-6L3 8.9 9 8z"/>
                  </svg>
                  <span>Founder Highlights</span>
                </h3>
                <ul className="list">
                  <li>Hands‑on guidance across Saudi licensing pathways</li>
                  <li>Clinical background spanning Pakistan &amp; Saudi Arabia</li>
                  <li>Clear checklists, practical tips, and timely follow‑ups</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>


      {/* ===== FAQs ===== */}
      <section id="faqs" className="band band--light" aria-labelledby="faqs-title">
        <div className="shell">
          <h2 id="faqs-title">Frequently Asked Questions</h2>
          <p className="muted" style={{marginTop: 4}}>Quick answers to common questions about licensing, timelines, and our services.</p>

          <div className="faqs">
            <details className="faq reveal">
              <summary>
                How long does the Saudi licensing process usually take?
              </summary>
              <div className="answer">
                Timelines vary by profession and document readiness. Typical ranges are <b>6–10 weeks</b> end‑to‑end if documents are correct. Delays usually come from Dataflow verification or missing attestations. We help you prevent those delays with checklists and pre‑review.
              </div>
            </details>

            <details className="faq reveal">
              <summary>
                What documents do I need for Dataflow and SCFHS Mumaris+?
              </summary>
              <div className="answer">
                Core items include <b>passport</b>, <b>degree certificates</b>, <b>transcripts</b>, <b>professional license</b> (if applicable), <b>experience letters</b>, and <b>valid ID</b>. We give you a tailored checklist and review each item before submission.
              </div>
            </details>

            <details className="faq reveal">
              <summary>
                Do you offer one‑to‑one document review only?
              </summary>
              <div className="answer">
                Yes. Our <b>One‑to‑One Document Review</b> is available as a stand‑alone hourly service (SAR 100–150/hr) and is included in the Premium package.
              </div>
            </details>

            <details className="faq reveal">
              <summary>
                Can you guarantee my SCFHS approval?
              </summary>
              <div className="answer">
                No consultancy can guarantee approval. We provide expert guidance, complete checklists, and proactive follow‑ups to maximize your chance of success.
              </div>
            </details>

            <details className="faq reveal">
              <summary>
                Do you help with Prometric exam preparation?
              </summary>
              <div className="answer">
                Yes. We offer guidance on exam registration, study plans, and <b>mock test & exam review</b> sessions to get you exam‑ready.
              </div>
            </details>

            <details className="faq reveal">
              <summary>
                What about Chinese graduates—do you support CHSI?
              </summary>
              <div className="answer">
                <b>China Higher Education Student Information (CHSI)</b> support is coming soon. We’ll publish instructions and provide one‑to‑one assistance once live.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="band band--brand" aria-labelledby="contact-title">
        <div className="shell grid-2">
          <div>
            <h2 id="contact-title" className="invert">Contact Us</h2>
            <p className="lead invert">We’ll get back to you within 24 hours.</p>
            <div className="contact-ctas">
              <div className="badges">
                <span className="badge">Secure & Confidential</span>
                <span className="badge">Response in 24h</span>
              </div>
              <div className="cta-row">
                <a className="btn btn--primary" href={WHATSAPP} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                <a className="btn btn--ghost" href="mailto:info@drspathway.com">Email Us</a>
              </div>
              <p className="muted invert small" style={{marginTop:12}}>
                We operate fully online. No physical location disclosed.
              </p>
              <p className="muted invert small">
                Dr’s Pathway provides professional guidance and documentation assistance (not a recruitment or licensing agency).
              </p>
            </div>
          </div>

          <form className="card form reveal" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We’ll contact you shortly."); }}>
            <label>
              <span>Full name</span>
              <input required placeholder="Full name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" required placeholder="name@example.com" />
            </label>
            <label>
              <span>WhatsApp number</span>
              <input required placeholder="+966…" />
            </label>
            <label>
              <span>Profession</span>
              <select required defaultValue="">
                <option value="" disabled>Choose…</option>
                <option>Doctor</option>
                <option>Physiotherapist</option>
                <option>Nurse</option>
                <option>Pharmacist</option>
                <option>Allied Health</option>
              </select>
            </label>
            <label>
              <span>How can we help?</span>
              <textarea rows={4} placeholder="Dataflow, Mumaris+, Prometric, CHSI…" />
            </label>
            <button className="btn btn--primary" type="submit">Send</button>
          </form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="site-footer" role="contentinfo">
        <div className="shell footer-grid">
          <div className="f-col brand-col">
            <a href="#home" className="brand" aria-label="Drs Pathway — Home">
              <img src="/logo.png" width={40} height={40} alt="Drs Pathway logo" className="logo-img" />
              <span className="brand-text">Drs Pathway</span>
            </a>
            <p className="muted small">Your trusted guide to medical registration in Saudi Arabia.</p>
            <div className="f-social">
              <a href={IG} target="_blank" rel="noreferrer" aria-label="Instagram (opens in a new tab)">
                <span className="sr-only">Instagram</span>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.8A5.2 5.2 0 1 1 6.8 13 5.2 5.2 0 0 1 12 7.8zm0 2A3.2 3.2 0 1 0 15.2 13 3.2 3.2 0 0 0 12 9.8zM18 6.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                </svg>
              </a>
              <a href={FB} target="_blank" rel="noreferrer" aria-label="Facebook (opens in a new tab)">
                <span className="sr-only">Facebook</span>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.5 1.7-1.5H17V5.1C16.5 5 15.3 5 14 5c-2.4 0-4 1.4-4 4v2.9H7.5v3H10v8z"/>
                </svg>
              </a>
              <a href={LI} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)">
                <span className="sr-only">LinkedIn</span>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0h4.8v2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V22h-5v-6.4c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.44 1.65-2.44 3.36V22h-5V8z"/>
                </svg>
              </a>
            </div>
          </div>

          <nav className="f-col" aria-label="Footer — Explore">
            <h4>Explore</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#experts">Experts</a></li>
            </ul>
          </nav>

          <nav className="f-col" aria-label="Footer — Services">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Dataflow Guidance</a></li>
              <li><a href="#services">SCFHS (Mumaris+)</a></li>
              <li><a href="#services">Prometric Support</a></li>
              <li><a href="#services">Document Review</a></li>
              <li><a href="#services">CHSI (Soon)</a></li>
            </ul>
          </nav>

          <div className="f-col cta-col">
            <h4>Start your pathway</h4>
            <p className="muted small">Tell us your profession and current stage — we’ll guide you step by step.</p>
            <div className="cta-row">
              <a className="btn btn--primary" href="#contact">Get Started</a>
              <a className="btn btn--ghost" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="shell footer-bottom-row">
            <div className="muted small">© {new Date().getFullYear()} Drs Pathway. All rights reserved.</div>
            <div className="muted small">Guidance & documentation assistance — not a recruitment or licensing agency.</div>
          </div>
        </div>
      </footer>

      {/* ===== Styles ===== */}
      <style>{`
        /* FAQs */
        .faqs{ display:grid; gap:12px; margin-top:12px; }
        .faq{ background:#0c1529; border:1px solid var(--border); border-radius:12px; padding:0; box-shadow: var(--shadow); }
        .faq > summary{ cursor:pointer; list-style:none; padding:14px 16px; font-weight:800; color:#eaf2ff; position:relative; }
        .faq > summary::-webkit-details-marker{ display:none; }
        .faq > summary::after{
          content:""; position:absolute; right:16px; top:50%; width:10px; height:10px; border-right:2px solid #cfe0ff; border-bottom:2px solid #cfe0ff; transform: translateY(-50%) rotate(45deg); transition: transform .2s ease;
        }
        .faq[open] > summary::after{ transform: translateY(-50%) rotate(-135deg); }
        .faq .answer{ padding:0 16px 16px; color:#cfe0ff; }
        /* Reveal on scroll animation */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(.37,.01,.63,.99), transform 0.7s cubic-bezier(.37,.01,.63,.99);
        }
        .reveal.in {
          opacity: 1;
          transform: none;
        }
        /* Hero background animation */
        .hero-bg {
          animation: heroBgFadeIn 1.3s cubic-bezier(.37,.01,.63,.99);
        }
        @keyframes heroBgFadeIn {
          from { opacity: 0; }
          to { opacity: .9; }
        }
        /* Card hover effect */
        .card {
          transition: box-shadow .3s cubic-bezier(.37,.01,.63,.99), transform .13s cubic-bezier(.37,.01,.63,.99);
        }
        .card:hover {
          box-shadow: 0 16px 40px -8px rgba(46,124,246,0.16);
          transform: translateY(-2px) scale(1.012);
        }
        /* Button sheen effect */
        .btn--primary {
          position: relative;
          overflow: hidden;
        }
        .btn--primary::before {
          content: "";
          position: absolute;
          left: -50%; top: 0; width: 40%; height: 100%;
          background: linear-gradient(110deg,rgba(255,255,255,0) 60%,rgba(255,255,255,.18) 100%);
          transform: skewX(-18deg) translateX(-100%);
          transition: transform .6s cubic-bezier(.37,.01,.63,.99);
          pointer-events: none;
        }
        .btn--primary:hover::before {
          transform: skewX(-18deg) translateX(210%);
        }
        /* Social icon micro-interaction */
        .social a, .f-social a {
          transition: transform .16s cubic-bezier(.37,.01,.63,.99), background .22s cubic-bezier(.37,.01,.63,.99);
        }
        .social a:active, .f-social a:active {
          transform: scale(.95) translateY(1px);
        }
        /* Icon titles */
        .icon-title{ display:flex; align-items:center; gap:.55rem; margin:0 0 .35rem 0; }
        .icon-title.sm{ font-size:1rem; }
        .i{ width:20px; height:20px; display:block; fill:#cfe0ff; }
        .i-lg{ width:28px; height:28px; margin-bottom:6px; fill:#cfe0ff; }
        /* Outline icon style */
        .i-stroke{ width:20px; height:20px; display:block; fill:none; stroke:#cfe0ff; stroke-width:1.75; stroke-linecap:round; stroke-linejoin:round; }
        .i-lg-stroke{ width:32px; height:32px; display:block; fill:none; stroke:#cfe0ff; stroke-width:1.75; stroke-linecap:round; stroke-linejoin:round; margin: 0 auto 6px; }
        /* Accessible screen-reader-only text */
        .sr-only{ position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }

        /* Social icon styling */
        .icon{ width:22px; height:22px; display:block; fill:#cfe0ff; transition: fill .2s ease, transform .12s ease; }
        .social a, .f-social a{ display:inline-grid; place-items:center; width:36px; height:36px; border-radius:8px; border:1px solid rgba(255,255,255,.15); background:rgba(255,255,255,.06); }
        .social a:hover .icon, .f-social a:hover .icon{ fill:#ffffff; }
        .social a:hover, .f-social a:hover{ transform: translateY(-1px); background: rgba(255,255,255,.1); }
        .social{ gap:.6rem; }
        .f-social{ gap:.6rem; }
        /* Contact CTAs */
        .contact-ctas .badges{ display:flex; gap:.5rem; flex-wrap:wrap; margin: 6px 0 10px; }
        .badge{ background: rgba(255,255,255,.1); border:1px solid var(--border); color:#e8f2ff; padding:.3rem .6rem; border-radius:999px; font-size:.72rem; font-weight:800; }

        /* Founder */
        .founder-grid{ display:grid; grid-template-columns:1fr; gap:24px; }
        @media(min-width: 980px){ .founder-grid{ grid-template-columns: .9fr 1.1fr; gap:40px; align-items:center; } }
        .founder-visual{ display:grid; justify-items:center; }
        .avatar-lg{ width:100%; max-width:420px; aspect-ratio:4/5; border-radius:18px; border:1px solid var(--border);
          background: linear-gradient(135deg, rgba(46,124,246,.28), rgba(20,184,166,.18)); box-shadow: var(--shadow); }
        .founder-copy h2{ margin-top:0; }
        .badge-row{ display:flex; flex-wrap:wrap; gap:.5rem; margin-top:10px; }
        .badge-row .badge{ background:#0a1d3a; border:1px solid rgba(255,255,255,.08); color:#e8f1ff; }

        /* Footer */
        .site-footer{ border-top:1px solid var(--border); background:#0A1220; }
        .footer-grid{ display:grid; grid-template-columns:1fr; gap:22px; padding:28px 0; }
        @media(min-width: 900px){ .footer-grid{ grid-template-columns: 1.2fr .8fr .8fr 1fr; } }
        .f-col h4{ margin:0 0 .6rem 0; font-weight:900; }
        .f-col ul{ list-style:none; padding:0; margin:0; display:grid; gap:.4rem; }
        .f-col a{ color:#b8c8e6; }
        .f-col a:hover{ color:#fff; }
        .brand-col .brand{ padding:0; }
        .f-social{ display:flex; gap:10px; margin-top:10px; }

        .footer-bottom{ border-top:1px solid var(--border); background:#09101e; }
        .footer-bottom-row{ display:flex; gap:12px; align-items:center; justify-content:space-between; padding:12px 0; flex-wrap:wrap; }
        :root{
          --bg:#0B1220;           /* page background */
          --surface:#0E1626;      /* headers/sections */
          --panel:#0F1B31;        /* cards on dark */
          --ink:#EAF2FF;          /* main text */
          --muted:#A7B7D8;        /* muted text */
          --border:rgba(255,255,255,0.12);

          --blue-500:#2E7CF6;
          --blue-600:#1F5CCB;
          --blue-700:#1548A8;
          --blue-800:#0F377F;
          --teal-400:#20DFC9;
          --teal-500:#14B8A6;

          --grad-hero: radial-gradient(1200px 600px at 10% -10%, rgba(46,124,246,0.35), transparent 60%),
                       radial-gradient(900px 500px at 90% 10%, rgba(20,184,166,0.25), transparent 60%),
                       linear-gradient(160deg, #0A1224 0%, #0C1C34 60%, #0C2144 100%);

          --radius:16px;
          --shadow:0 12px 28px -12px rgba(0,0,0,.5);
        }

        html,body{ height:100%; background:#0A1020; }
        body{ margin:0; color:var(--ink); font:16px/1.5 system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif; }
        *,*::before,*::after{ box-sizing:border-box; }
        a{ color:inherit; text-decoration:none; }

        .shell{ max-width:1200px; margin:0 auto; padding:0 20px; }

        /* Header */
        .site-header{
          position:sticky; top:0; z-index:100;
          background:rgba(10,16,32,0.55);
          backdrop-filter: blur(10px);
          border-bottom:1px solid var(--border);
        }
        .header-row{ display:flex; align-items:center; justify-content:space-between; gap:16px; padding:.6rem 0; }
        .brand{ display:flex; align-items:center; gap:.65rem; }
        .logo-img{ width:40px; height:40px; border-radius:10px; object-fit:contain; display:block; }
        .brand-text{ font-weight:900; letter-spacing:.2px; }

        .nav-toggle{ display:inline-grid; place-items:center; width:40px; height:40px; border-radius:10px; border:1px solid rgba(255,255,255,.18); background:rgba(255,255,255,.06); color:#e6eeff; }
        .nav-toggle svg{ width:22px; height:22px; fill:currentColor; }

        .nav{ position:fixed; inset:64px 0 auto 0; /* below sticky header */
              display:none; flex-direction:column; gap:.5rem; padding:12px 20px 16px; 
              background:#0B1220; border-bottom:1px solid var(--border); }
        .nav.open{ display:flex; }
        .nav a{ padding:.65rem .6rem; color:var(--muted); border-radius:10px; }
        .nav a:hover{ color:#fff; background:rgba(255,255,255,.06); }
        .nav .btn{ margin-top:6px; }

        @media(min-width: 980px){
          .nav-toggle{ display:none; }
          .nav{ position:static; display:flex !important; flex-direction:row; align-items:center; gap:1rem; background:transparent; border:0; padding:0; }
          .nav .btn{ margin-top:0; }
          .nav a{ background:transparent; }
        }
        .btn{
          display:inline-flex; align-items:center; justify-content:center;
          padding:.8rem 1.1rem; border-radius:12px; font-weight:800; letter-spacing:.2px;
          border:1px solid transparent;
          transition: transform .12s ease, background .3s ease, box-shadow .3s ease;
        }
        .btn--primary{
          background:linear-gradient(90deg, var(--blue-800), var(--blue-600), var(--blue-500));
          color:#fff; box-shadow:0 8px 24px rgba(46,124,246,.25);
        }
        .btn--primary:hover{ transform: translateY(-1px); }
        .btn--ghost{
          background:transparent; color:#fff; border-color:rgba(255,255,255,.25);
        }
        .btn--ghost:hover{ background:rgba(255,255,255,.06); }

        /* Hero */
        .hero{ position:relative; background:var(--grad-hero); padding:72px 0; }
        .hero-bg{ position:absolute; inset:0; pointer-events:none; background:
          radial-gradient(900px 500px at -10% 100%, rgba(21,72,168,.2), transparent 60%),
          radial-gradient(900px 500px at 110% 100%, rgba(32,223,201,.15), transparent 60%);
          mix-blend: screen;
          opacity:.9;
        }
        .hero-grid{ position:relative; display:grid; grid-template-columns:1fr; gap:24px; }
        @media(min-width: 900px){ .hero-grid{ grid-template-columns:1.15fr .85fr; gap:40px; } }
        .eyebrow{ color:var(--teal-400); font-weight:900; letter-spacing:.12em; text-transform:uppercase; font-size:.76rem; }
        .display{ font-size: clamp(2rem, 4vw, 3rem); line-height:1.15; margin:.5rem 0 0; }
        .lead{ color:#dbe7ff; max-width: 50ch; margin-top: 10px; }

        .cta-row{ display:flex; gap:.75rem; margin-top: 18px; flex-wrap: wrap; }
        .social{ display:flex; gap:1rem; margin-top: 14px; color:#c6d6ff; }
        .social a{ color:#cfe0ff; }
        .social a:hover{ color:white; text-decoration:underline; text-underline-offset:3px; }

        .hero-card{
          position:relative; z-index:1;
          background: rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.15);
          border-radius: var(--radius);
          padding: 18px;
          box-shadow: var(--shadow);
        }
        .chips{ display:flex; flex-wrap:wrap; gap:.5rem; padding:0; margin:12px 0 0; list-style:none; }
        .chips li{
          padding:.35rem .7rem; border-radius:999px; font-weight:700; font-size:.75rem;
          background: rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2);
        }

        /* Section bands */
        .band{ padding:64px 0; background: var(--surface); border-top:1px solid var(--border); }
        .band--light{ background: #0D1527; }
        .band--dark{ background: var(--grad-hero); }
        .band--brand{ background: linear-gradient(180deg, #0B1424 0%, #0C1C34 60%, #0C2344 100%); }

        .grid-2{ display:grid; gap:24px; grid-template-columns:1fr; }
        @media(min-width: 900px){ .grid-2{ grid-template-columns:1.1fr .9fr; gap:40px; } }

        .card{
          background: #0c1529;
          border:1px solid var(--border);
          border-radius: var(--radius);
          padding: 18px;
          box-shadow: var(--shadow);
        }
        .list{ padding-left: 18px; margin: 10px 0 0; }
        .list li{ margin: 6px 0; }

        .values{ display:flex; flex-wrap:wrap; gap:.5rem; padding:0; margin: 12px 0 0; list-style:none; }
        .values li{
          padding:.35rem .7rem; border-radius:999px; font-weight:800; font-size:.72rem;
          color:#e8f1ff; background:#0a1d3a; border:1px solid rgba(255,255,255,.08);
        }

        .cards-3{ display:grid; grid-template-columns:1fr; gap:16px; }
        .cards-2{ display:grid; grid-template-columns:1fr; gap:16px; }
        @media(min-width: 800px){ .cards-3{ grid-template-columns: repeat(3, 1fr); } .cards-2{ grid-template-columns: repeat(2, 1fr); } }
        .mt{ margin-top: 18px; }

        /* Pricing */
        .pricing{ display:grid; gap:16px; grid-template-columns: 1fr; }
        @media(min-width: 900px){ .pricing{ grid-template-columns: repeat(3, 1fr); } }
        .pricing-card{ text-align:center; }
        .pricing-card .price{ margin:10px 0 12px; font-size: clamp(1.6rem, 3vw, 2rem); font-weight:900; }
        .pricing-card .muted{ color: var(--muted); }
        .pricing-card.featured{ outline: 2px solid var(--blue-600); box-shadow: 0 10px 36px rgba(46,124,246,.25); position:relative; }
        .pricing-card .flag{
          position:absolute; top:-10px; right:12px; background:var(--blue-600); color:#fff; font-size:.7rem; font-weight:900;
          padding:.25rem .5rem; border-radius:999px; letter-spacing:.08em; text-transform:uppercase;
        }

        /* Experts */
        .expert .avatar{
          height:120px; border-radius:12px; margin-bottom:10px;
          background: linear-gradient(135deg, rgba(46,124,246,.35), rgba(20,184,166,.25));
          border:1px solid var(--border);
        }

        /* Quotes */
        .quote p{ color:#e6eeff; }
        .quote cite{ display:block; margin-top:8px; color:var(--muted); font-style:normal; }

        /* Stats (Success counters) */
        .stats{ display:grid; grid-template-columns:1fr; gap:12px; margin: 6px 0 18px; }
        @media(min-width: 800px){ .stats{ grid-template-columns: repeat(3, 1fr); } }
        .stat{ background:#0b182f; border:1px solid var(--border); border-radius:12px; padding:16px; text-align:center; box-shadow: var(--shadow); }
        .stat .num{ font-size: clamp(1.8rem, 4vw, 2.4rem); font-weight:900; line-height:1; background: linear-gradient(90deg, var(--blue-500), var(--teal-500)); -webkit-background-clip:text; background-clip:text; color: transparent; }
        .stat .label{ margin-top:6px; color: var(--muted); font-weight:700; letter-spacing:.2px; }

        /* Steps */
        .steps{ list-style:none; padding:0; margin:18px 0 0; display:grid; gap:12px; }
        .steps li{ display:flex; gap:12px; background:#0b182f; border:1px solid var(--border); border-radius:12px; padding:12px; }
        .step-num{
          width:36px; height:36px; border-radius:999px; display:grid; place-items:center;
          background: linear-gradient(135deg, var(--blue-700), var(--blue-500)); color:#fff; font-weight:900;
        }

        /* Links */
        .link{ color:#d1e3ff; }
        .link:hover{ color:#fff; text-decoration: underline; text-underline-offset:3px; }
        .invert{ color:#e8f2ff; }

        .muted{ color: var(--muted); }
        .small{ font-size: .85rem; }

        /* Forms */
        .form{ display:grid; gap:10px; }
        .form label{ display:grid; gap:6px; font-weight:700; color:#dfe8ff; }
        .form input, .form select, .form textarea{
          background:#0b162b; color:#eaf2ff; border:1px solid var(--border); border-radius:12px; padding:.75rem .9rem;
          outline:none; transition: border .2s ease, box-shadow .2s ease;
        }
        .form input:focus, .form select:focus, .form textarea:focus{
          border-color: var(--blue-500); box-shadow: 0 0 0 3px rgba(46,124,246,.25);
        }

        /* Footer */
        .site-footer{ border-top:1px solid var(--border); background:#0A1220; }
        .site-footer .shell{ padding:18px 20px; display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .footer-nav{ display:flex; gap:14px; }
        .footer-nav a{ color:#b8c8e6; }
        .footer-nav a:hover{ color:#fff; }

        /* Reduce motion */
        @media (prefers-reduced-motion: reduce){
          .btn, .form input, .form select, .form textarea{ transition: none; }
          .reveal, .reveal.in { transition: none !important; }
          .hero-bg { animation: none !important; }
          .card, .card:hover { transition: none !important; }
          .btn--primary::before, .btn--primary:hover::before { transition: none !important; }
          .social a, .f-social a { transition: none !important; }
        }
      `}</style>
    </main>
  );
}
