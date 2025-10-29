"use client";
/* Fresh, Tailwind-free single-file homepage for Drs Pathway
   - Pure CSS (styled-jsx) + semantic HTML
   - Modern blue/teal palette
   - Responsive, accessible, fast
   - Anchored sections: Home, About, Services, Packages, Experts, Testimonials, Process, Blog, Contact
*/

export default function Home() {
  const WHATSAPP = "https://wa.me/966598172331"; // TODO: put real number
  const IG = "https://www.instagram.com/drspathway?igsh=bWJsdmozeWZwNWh5";
  const FB = "https://www.facebook.com/share/14Qt2FGdB9b/";
  const LI = "https://www.linkedin.com/company/drs-pathway";

  return (
    <main>
      {/* ===== Header ===== */}
      <header className="site-header" role="banner">
        <div className="shell">
          <a href="#home" className="brand" aria-label="Drs Pathway — Home">
            <img src="/logo.png" width={40} height={40} alt="Drs Pathway logo" className="logo-img" />
            <span className="brand-text">Drs Pathway</span>
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#experts">Experts</a>
            <a href="#process">How it works</a>
            <a href="#blog">Blog</a>
            <a href="#contact" className="btn btn--primary">Get started</a>
          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="home" className="hero" role="region" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Medical Licensing • Saudi Arabia</p>
            <h1 id="hero-title" className="display">
              Your trusted guide to medical registration in Saudi Arabia
            </h1>
            <p className="lead">
              Step‑by‑step support for healthcare professionals navigating <b>Dataflow</b>,{" "}
              <b>SCFHS Mumaris+</b>, <b>Prometric</b>, and <b>CHSI</b> (coming soon).
            </p>
            <div className="cta-row">
              <a href="#packages" className="btn btn--primary">View packages</a>
              <a href="#contact" className="btn btn--ghost">Book consultation</a>
            </div>
            <div className="social">
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

          <aside className="hero-card" aria-label="Quick intro">
            <h3>Quick intro</h3>
            <p>
              Dr’s Pathway, founded by <b>Dr. Saad Khan</b>, empowers healthcare professionals
              to achieve Saudi medical licensing with confidence. Personalized guidance that
              simplifies complex processes, saving time and reducing stress.
            </p>
            <ul className="chips">
              <li>Licensing Guidance</li>
              <li>Exam & Career Support</li>
              <li>Document Review</li>
              <li>CHSI (soon)</li>
            </ul>
          </aside>
        </div>
        <div className="hero-bg" aria-hidden="true" />
      </section>

      {/* ===== About ===== */}
      <section id="about" className="band band--light" aria-labelledby="about-title">
        <div className="shell grid-2">
          <div>
            <h2 id="about-title">About Dr’s Pathway</h2>
            <p>
              Founded by <b>Dr. Saad Khan (MBBS)</b> — trained at <b>Nishtar Hospital, Multan</b>,
              served at <b>Saudi German Hospital, Jeddah</b>, and currently practicing in KSA.
              We empower healthcare professionals to navigate licensing confidently,
              transparently, and successfully.
            </p>
            <ul className="values">
              <li>Integrity</li>
              <li>Expertise</li>
              <li>Transparency</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <div className="card">
              <h3>What we do</h3>
              <ul className="list">
                <li>Step‑by‑step guidance: Dataflow, SCFHS, Prometric</li>
                <li>Personalized one‑to‑one sessions & document checks</li>
                <li>Clear instructions, follow‑ups, and issue resolution</li>
              </ul>
              <a className="link" href="#services">See services →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className="band band--dark" aria-labelledby="services-title">
        <div className="shell">
          <h2 id="services-title">Our Services</h2>
          <div className="cards-3">
            <article className="card">
              <h3>Licensing Guidance</h3>
              <ul className="list">
                <li>Dataflow verification support</li>
                <li>SCFHS Mumaris+ registration & licensing</li>
                <li>Application follow‑up & issue resolution</li>
              </ul>
            </article>
            <article className="card">
              <h3>Exam & Career Support</h3>
              <ul className="list">
                <li>Prometric exam guidance</li>
                <li>Bi‑weekly online lectures</li>
                <li>One‑to‑one mentoring</li>
              </ul>
            </article>
            <article className="card">
              <h3>One‑to‑One Document Review</h3>
              <p>
                Private session to review CV, certificates, translations, attestations, ID, and experience letters.
                Includes checklist, corrections, and final pre‑submission verification.
              </p>
            </article>
          </div>

          <div className="cards-3 mt">
            <article className="card">
              <h3>CHSI Verification (Soon)</h3>
              <p>Guidance for Chinese graduates completing CHSI verification.</p>
            </article>
            <article className="card">
              <h3>Who We Serve</h3>
              <ul className="list">
                <li>Junior & Senior Doctors</li>
                <li>Physiotherapists • Nurses • Pharmacists</li>
                <li>Allied Health • International graduates</li>
              </ul>
            </article>
            <article className="card">
              <h3>Ready to begin?</h3>
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
            <article className="card pricing-card">
              <h3>Basic</h3>
              <p className="muted">Dataflow + Mumaris+ registration guidance</p>
              <div className="price">SAR 250–400</div>
              <a href="#contact" className="btn btn--primary">Get started</a>
            </article>
            <article className="card pricing-card featured">
              <div className="flag">Most Popular</div>
              <h3>Standard</h3>
              <p className="muted">Basic + Prometric preparation</p>
              <div className="price">SAR 500–700</div>
              <a href="#contact" className="btn btn--primary">Choose Standard</a>
            </article>
            <article className="card pricing-card">
              <h3>Premium</h3>
              <p className="muted">Full support + Document review + Mentorship</p>
              <div className="price">SAR 800–1,200</div>
              <a href="#contact" className="btn btn--primary">Go Premium</a>
            </article>
          </div>

          <div className="cards-2 mt">
            <article className="card">
              <h4>Add‑ons / Hourly</h4>
              <ul className="list">
                <li><b>One‑to‑One Document Review</b>: SAR 100–150 / hour (typical 1–2 hours)</li>
                <li><b>Mock test & exam review</b>: SAR 100 / session</li>
              </ul>
            </article>
            <article className="card">
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
              <article key={i} className="card expert">
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
          <div className="cards-2">
            <blockquote className="card quote">
              <p>“Thanks to Dr’s Pathway, I completed my SCFHS registration smoothly and started my practice in Saudi Arabia. Highly recommend!”</p>
              <cite>— Client Name</cite>
            </blockquote>
            <blockquote className="card quote">
              <p>“The one‑to‑one document review session was a game‑changer. Everything was accurate and ready for submission.”</p>
              <cite>— Client Name</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section id="process" className="band" aria-labelledby="process-title">
        <div className="shell">
          <h2 id="process-title">How It Works</h2>
          <ol className="steps">
            <li>
              <span className="step-num">1</span>
              <div>
                <h4>Book a Consultation</h4>
                <p>Online via website or WhatsApp.</p>
              </div>
            </li>
            <li>
              <span className="step-num">2</span>
              <div>
                <h4>Document Upload & Review</h4>
                <p>Upload documents securely for a thorough pre‑check.</p>
              </div>
            </li>
            <li>
              <span className="step-num">3</span>
              <div>
                <h4>One‑to‑One Guidance</h4>
                <p>Live session to correct & verify documents.</p>
              </div>
            </li>
            <li>
              <span className="step-num">4</span>
              <div>
                <h4>Follow‑Up Support</h4>
                <p>We keep you updated until completion.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== Blog / Insights ===== */}
      <section id="blog" className="band band--dark" aria-labelledby="blog-title">
        <div className="shell">
          <h2 id="blog-title">Insights</h2>
          <p className="lead invert">Educational content to help you prepare.</p>
          <div className="cards-3">
            {[
              ["Step‑by‑Step Guide to Dataflow Verification", "Learn the exact documents and sequence to avoid rejection."],
              ["Tips for SCFHS Mumaris+ Registration", "Common pitfalls and how to fix them."],
              ["Prometric Exam Preparation Strategies", "Practical study plan and mock‑test approach."],
            ].map(([t, d], i) => (
              <article key={i} className="card">
                <h3>{t}</h3>
                <p className="muted">{d}</p>
                <a className="link" href="#contact">Request full guide →</a>
              </article>
            ))}
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

          <form className="card form" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We’ll contact you shortly."); }}>
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
              <li><a href="#blog">Insights</a></li>
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
      <style jsx global>{`
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
          position:sticky; top:0; z-index:50;
          background:rgba(10,16,32,0.6);
          backdrop-filter: blur(10px);
          border-bottom:1px solid var(--border);
        }
        .brand{ display:flex; align-items:center; gap:.6rem; padding:.8rem 0; }
        .logo{ display:none; }
        .logo-img{ width:40px; height:40px; border-radius:10px; object-fit:contain; display:block; }
        .brand-text{ font-weight:900; letter-spacing:.2px; }

        .nav{ display:flex; align-items:center; gap:1rem; }
        .nav a{ padding:.5rem .6rem; color:var(--muted); }
        .nav a:hover{ color:#fff; }
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
        .band--dark{ background: #0B1322; }
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
        }
      `}</style>
    </main>
  );
}
