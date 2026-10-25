"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  // Interactive Living Assessment Simulator State
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    spaceType: "apartment",
    sleepIssue: "noise",
    airLighting: "dim",
    budget: "under50",
  });
  const [calculated, setCalculated] = useState(false);

  const calculateScore = () => {
    setCalculated(true);
  };

  return (
    <>
      {/* Site Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand-wrap">
            <div className="brand-icon">A</div>
            <div className="brand-text">
              <span className="brand-title">Amelioras</span>
              <span className="brand-tag">Living Better · Shared Prosperity</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#about" className="nav-link">Our Model</a>
            <a href="#offerings" className="nav-link">Offerings</a>
            <a href="#assessment" className="nav-link">Living Assessment</a>
            <a href="#prosperity" className="nav-link">Public Balance Sheet</a>
            <a href="#partners" className="nav-link">Churches & Nonprofits</a>
            <a href="#governance" className="nav-link">Governance</a>
          </nav>

          <div className="nav-actions">
            <a href="#assessment" className="btn btn-primary">
              Assess Your Space
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span>🌱 For-Profit Impact · Reinvestment Driven</span>
              </div>
              <h1 className="hero-title">
                Practical upgrades for people who want to live better.
              </h1>
              <p className="hero-lede">
                Amelioras helps individuals and families move out of conditions that feel inadequate
                through accessible improvements to living environments, daily routines, and household
                friction points.
              </p>
              <div className="hero-actions">
                <a href="#assessment" className="btn btn-primary">
                  Start Living Assessment →
                </a>
                <a href="#partners" className="btn btn-outline">
                  Partner with Us (Churches &amp; Nonprofits)
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <h4>60%+</h4>
                  <p>Surplus Reinvested in Communities</p>
                </div>
                <div className="stat-item">
                  <h4>100%</h4>
                  <p>Public-Facing Balance Sheet</p>
                </div>
                <div className="stat-item">
                  <h4>Tenant-Safe</h4>
                  <p>No Structural Alteration Required</p>
                </div>
              </div>
            </div>

            {/* Assessment Preview Interactive Mockup */}
            <div className="assessment-mockup">
              <div className="mockup-header">
                <div>
                  <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-strong)", fontWeight: 700 }}>
                    Diagnostics Engine
                  </div>
                  <h3 style={{ fontSize: "18px", color: "var(--primary)", fontWeight: 700 }}>
                    Living Score Diagnostic
                  </h3>
                </div>
                <div className="mockup-score-badge">
                  <span>Score: 68/100</span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ padding: "14px", borderRadius: "8px", background: "var(--bg-subtle)", border: "1px solid var(--line)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                    <span>Sleep Environment &amp; Acoustics</span>
                    <span style={{ color: "var(--gold)" }}>Friction Detected</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    Traffic noise and ambient morning light disrupting REM cycle by 42 minutes.
                  </p>
                </div>

                <div style={{ padding: "14px", borderRadius: "8px", background: "var(--bg-subtle)", border: "1px solid var(--line)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                    <span>Daily Routine Flow</span>
                    <span style={{ color: "var(--accent-strong)" }}>Moderate</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    Morning entryway bottleneck causing delayed departures and daily friction.
                  </p>
                </div>

                <div style={{ padding: "16px", borderRadius: "10px", background: "var(--accent-soft)", border: "1px solid rgba(20, 184, 166, 0.3)" }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent-strong)", textTransform: "uppercase", marginBottom: "4px" }}>
                    Tier I Recommendation
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--primary)" }}>
                    Magnetic blackout seal &amp; entry catchall caddy
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", fontSize: "12px", color: "var(--text-muted)" }}>
                    <span>Est. Cost: $34</span>
                    <span>Expected Stress Drop: 28%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: The Problem and Our Model */}
        <section id="about" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">The Ameliora Philosophy</span>
              <h2 className="section-title">The middle ground between luxury design and emergency relief.</h2>
              <p className="section-desc">
                From the Latin <em>ameliorare</em> — to make better. We exist for the millions of people who are not in crisis shelter, but who go to sleep and wake up in living spaces that drain their energy, dignity, and calm.
              </p>
            </div>

            <div className="grid-3">
              <div className="card">
                <div className="card-icon-box" style={{ background: "rgba(217, 119, 6, 0.12)", color: "var(--gold)" }}>
                  ⚖️
                </div>
                <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "var(--primary)" }}>For-Profit by Design</h3>
                <p style={{ fontSize: "15px", color: "var(--text-muted)" }}>
                  We choose a for-profit structure because it allows us to bid on government contracts, partner with housing authorities, achieve scale, and generate self-sustaining cash flow without relying on donations.
                </p>
              </div>

              <div className="card">
                <div className="card-icon-box" style={{ background: "var(--emerald-soft)", color: "var(--emerald)" }}>
                  🔄
                </div>
                <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "var(--primary)" }}>Shared Prosperity</h3>
                <p style={{ fontSize: "15px", color: "var(--text-muted)" }}>
                  The company is built so prosperity can be shared rather than extracted. The majority of operating surplus is channeled directly back into product subsidies, community partner accounts, and lower cost floors.
                </p>
              </div>

              <div className="card">
                <div className="card-icon-box" style={{ background: "var(--accent-soft)", color: "var(--accent-strong)" }}>
                  🤝
                </div>
                <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "var(--primary)" }}>Genuine Collaborators</h3>
                <p style={{ fontSize: "15px", color: "var(--text-muted)" }}>
                  Nonprofits and churches are co-delivering partners. They hold board seats, refer families, deploy benevolence budgets with greater efficacy, and co-design offerings rooted in trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Offerings */}
        <section id="offerings" className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Core System</span>
              <h2 className="section-title">Practical, tiered pathways to living better.</h2>
              <p className="section-desc">
                We break improvements down into manageable, budget-aware tiers so nobody is intimidated or excluded.
              </p>
            </div>

            <div className="grid-3">
              <div className="card" style={{ borderTop: "4px solid var(--accent)" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent-strong)", textTransform: "uppercase" }}>Tier I</span>
                <h3 style={{ fontSize: "22px", margin: "8px 0 12px", color: "var(--primary)" }}>Immediate Friction Reducers</h3>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "18px" }}>
                  Budget: Under $50. Quick interventions with outsized psychological return.
                </p>
                <ul style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Circadian bulb swaps (2700K warm transitions)</li>
                  <li>Acoustic draft seals and sound-softening textiles</li>
                  <li>Single-touch entryway drop zones and cord management</li>
                  <li>Airflow and micro-ventilation positioning</li>
                </ul>
              </div>

              <div className="card" style={{ borderTop: "4px solid var(--primary)" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase" }}>Tier II</span>
                <h3 style={{ fontSize: "22px", margin: "8px 0 12px", color: "var(--primary)" }}>Targeted Living Kits</h3>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "18px" }}>
                  Budget: $50–$350. Curated bundles engineered for comfort and durability.
                </p>
                <ul style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li><strong>The Restful Sanctuary:</strong> Magnetic blackout shades, dual-density noise barriers, ergonomic pillows</li>
                  <li><strong>The Clean Air &amp; Calm Kit:</strong> True HEPA purification, humidity monitor, clean hydration filters</li>
                  <li><strong>The Morning Flow Kit:</strong> Visual routine boards, modular prep organizers, task lights</li>
                </ul>
              </div>

              <div className="card" style={{ borderTop: "4px solid var(--gold)" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase" }}>Tier III</span>
                <h3 style={{ fontSize: "22px", margin: "8px 0 12px", color: "var(--primary)" }}>Vetted Service Facilitation</h3>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "18px" }}>
                  Budget: $150+. Fair-wage coordination for hands-on domestic upgrades.
                </p>
                <ul style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Landlord-safe wall shelving and secure storage anchoring</li>
                  <li>Dignity-first professional spatial decluttering</li>
                  <li>Minor weatherization, insulation, and door fitting</li>
                  <li>Accessibility adjustments for seniors and mobility needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Interactive Assessment Tool */}
        <section id="assessment" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Interactive Diagnostic</span>
              <h2 className="section-title">Sample the Living Assessment</h2>
              <p className="section-desc">
                Experience how our structured diagnostic evaluates physical space, daily routines, comfort factors, and real-world budget constraints.
              </p>
            </div>

            <div style={{ maxWidth: "760px", margin: "0 auto", background: "white", padding: "40px", borderRadius: "16px", border: "1px solid var(--line)", boxShadow: "var(--shadow-md)" }}>
              {!calculated ? (
                <div>
                  <div style={{ marginBottom: "28px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 700, color: "var(--text-light)", marginBottom: "8px" }}>
                      <span>STEP {step} OF 3</span>
                      <span>DIAGNOSTIC QUESTIONNAIRE</span>
                    </div>
                    <div style={{ height: "6px", background: "var(--line)", borderRadius: "3px", overflow: "hidden" }}>
                      <div style={{ width: `${(step / 3) * 100}%`, height: "100%", background: "var(--accent-strong)", transition: "width 0.3s ease" }}></div>
                    </div>
                  </div>

                  {step === 1 && (
                    <div>
                      <h3 style={{ fontSize: "20px", color: "var(--primary)", marginBottom: "16px" }}>
                        1. What best describes your primary living friction point?
                      </h3>
                      <div style={{ display: "grid", gap: "12px", marginBottom: "24px" }}>
                        {[
                          { id: "noise", label: "Acoustics & Noise", desc: "Outside traffic, neighbor disturbances, appliance humming" },
                          { id: "sleep", label: "Restless Sleep & Light", desc: "Inability to get dark, comfortable, or temperature-regulated sleep" },
                          { id: "clutter", label: "Spatial Clutter & Bottlenecks", desc: "Nowhere to put daily essentials; morning prep is chaotic" },
                          { id: "air", label: "Stale Air & Environmental Dryness", desc: "Allergies, dust, lack of fresh air circulation" },
                        ].map((opt) => (
                          <label
                            key={opt.id}
                            onClick={() => setAnswers({ ...answers, sleepIssue: opt.id })}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              padding: "16px",
                              borderRadius: "8px",
                              border: `1.5px solid ${answers.sleepIssue === opt.id ? "var(--accent-strong)" : "var(--line)"}`,
                              background: answers.sleepIssue === opt.id ? "var(--accent-soft)" : "white",
                              cursor: "pointer",
                            }}
                          >
                            <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "15px" }}>{opt.label}</span>
                            <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{opt.desc}</span>
                          </label>
                        ))}
                      </div>
                      <button onClick={() => setStep(2)} className="btn btn-primary" style={{ width: "100%" }}>
                        Next Step →
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h3 style={{ fontSize: "20px", color: "var(--primary)", marginBottom: "16px" }}>
                        2. What is your current housing status?
                      </h3>
                      <div style={{ display: "grid", gap: "12px", marginBottom: "24px" }}>
                        {[
                          { id: "rental", label: "Rental Apartment / Home", desc: "Modifications must be completely non-destructive and landlord-safe" },
                          { id: "owned", label: "Owned Home or Condo", desc: "Permanent minor alterations and mounting are permitted" },
                          { id: "shared", label: "Shared Living / Multi-Family", desc: "High density; privacy and sound isolation are key priorities" },
                        ].map((opt) => (
                          <label
                            key={opt.id}
                            onClick={() => setAnswers({ ...answers, spaceType: opt.id })}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              padding: "16px",
                              borderRadius: "8px",
                              border: `1.5px solid ${answers.spaceType === opt.id ? "var(--accent-strong)" : "var(--line)"}`,
                              background: answers.spaceType === opt.id ? "var(--accent-soft)" : "white",
                              cursor: "pointer",
                            }}
                          >
                            <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "15px" }}>{opt.label}</span>
                            <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{opt.desc}</span>
                          </label>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: "12px" }}>
                        <button onClick={() => setStep(1)} className="btn btn-outline" style={{ flex: 1 }}>
                          ← Back
                        </button>
                        <button onClick={() => setStep(3)} className="btn btn-primary" style={{ flex: 2 }}>
                          Next Step →
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h3 style={{ fontSize: "20px", color: "var(--primary)", marginBottom: "16px" }}>
                        3. What is your realistic monthly or one-time upgrade budget?
                      </h3>
                      <div style={{ display: "grid", gap: "12px", marginBottom: "24px" }}>
                        {[
                          { id: "under50", label: "Micro-Budget (Under $50)", desc: "Immediate layout, habit changes, and zero-to-low cost fixes" },
                          { id: "subsidized", label: "Sponsored / Church Partner Assisted", desc: "Seeking community co-delivery or partner subsidy support" },
                          { id: "bundle", label: "Targeted Bundle ($50 – $250)", desc: "Ready for dedicated air, sleep, or routine equipment" },
                        ].map((opt) => (
                          <label
                            key={opt.id}
                            onClick={() => setAnswers({ ...answers, budget: opt.id })}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              padding: "16px",
                              borderRadius: "8px",
                              border: `1.5px solid ${answers.budget === opt.id ? "var(--accent-strong)" : "var(--line)"}`,
                              background: answers.budget === opt.id ? "var(--accent-soft)" : "white",
                              cursor: "pointer",
                            }}
                          >
                            <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "15px" }}>{opt.label}</span>
                            <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{opt.desc}</span>
                          </label>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: "12px" }}>
                        <button onClick={() => setStep(2)} className="btn btn-outline" style={{ flex: 1 }}>
                          ← Back
                        </button>
                        <button onClick={calculateScore} className="btn btn-accent" style={{ flex: 2 }}>
                          Generate My Living Roadmap ✨
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div style={{ textAlign: "center", marginBottom: "28px" }}>
                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--emerald-soft)", color: "var(--emerald)", fontSize: "28px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                      ✓
                    </div>
                    <h3 style={{ fontSize: "24px", color: "var(--primary)", fontWeight: 800 }}>
                      Your Living Score: 64 / 100
                    </h3>
                    <p style={{ fontSize: "15px", color: "var(--text-muted)", marginTop: "6px" }}>
                      Diagnostic completed for a renter-safe household. High recovery potential in sleep &amp; acoustic recovery.
                    </p>
                  </div>

                  <div style={{ background: "var(--bg-subtle)", padding: "20px", borderRadius: "10px", marginBottom: "24px", border: "1px solid var(--line)" }}>
                    <h4 style={{ fontSize: "15px", color: "var(--primary)", marginBottom: "8px" }}>
                      Prioritized 30-Day Living Roadmap:
                    </h4>
                    <ol style={{ paddingLeft: "20px", fontSize: "14px", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <li><strong>Day 1:</strong> Reorient bed away from common-wall sound bridge; deploy magnetic acoustic door draft seal.</li>
                      <li><strong>Day 7:</strong> Implement the 2700K low-kelvin warm evening lighting transition to trigger melatonin.</li>
                      <li><strong>Day 14:</strong> Install tension-mounted blackout panels without drilling or damaging drywall.</li>
                    </ol>
                  </div>

                  <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <button onClick={() => { setCalculated(false); setStep(1); }} className="btn btn-outline">
                      Reset Diagnostic
                    </button>
                    <a href="mailto:contact@amelioras.com?subject=Full%20Living%20Assessment%20Request" className="btn btn-primary">
                      Request Full Community Consultation
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section: Public Balance Sheet & Shared Prosperity */}
        <section id="prosperity" className="section">
          <div className="container">
            <div className="ledger-panel">
              <div style={{ maxWidth: "700px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Radical Transparency
                </span>
                <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, margin: "12px 0 16px", color: "white" }}>
                  The Public-Facing Balance Sheet
                </h2>
                <p style={{ color: "#94a3b8", fontSize: "17px", lineHeight: "1.6" }}>
                  Anyone can inspect where our money comes from and where it goes. We believe human flourishing requires removing the secrecy that fuels cynicism.
                </p>
              </div>

              <div className="ledger-grid">
                <div className="ledger-item">
                  <div className="ledger-pct">60%+</div>
                  <h4 style={{ color: "white", fontSize: "18px", margin: "8px 0 6px" }}>Community Reinvestment</h4>
                  <p style={{ fontSize: "13px", color: "#94a3b8" }}>
                    Funds subsidized household kits, partner church projects, and emergency friction grants.
                  </p>
                </div>

                <div className="ledger-item">
                  <div className="ledger-pct" style={{ color: "#38bdf8" }}>25%</div>
                  <h4 style={{ color: "white", fontSize: "18px", margin: "8px 0 6px" }}>Platform &amp; R&amp;D</h4>
                  <p style={{ fontSize: "13px", color: "#94a3b8" }}>
                    Powers the AI assessment engine, supply-chain bulk pricing, and partner co-delivery apps.
                  </p>
                </div>

                <div className="ledger-item">
                  <div className="ledger-pct" style={{ color: "#f59e0b" }}>15%</div>
                  <h4 style={{ color: "white", fontSize: "18px", margin: "8px 0 6px" }}>Operational Reserve</h4>
                  <p style={{ fontSize: "13px", color: "#94a3b8" }}>
                    Preserves business continuity, fair employee wages, and independent financial health.
                  </p>
                </div>
              </div>

              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.12)", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "14px", color: "#94a3b8" }}>
                  Quarterly reports audited and certified by independent ethics &amp; community board members.
                </div>
                <a href="https://github.com/josephjilovec/amelioras/blob/main/docs/business-model.md" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ color: "white", borderColor: "rgba(255, 255, 255, 0.25)", background: "transparent" }}>
                  Read the Business Model Doc ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Partnerships with Nonprofits and Churches */}
        <section id="partners" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Collaborative Network</span>
              <h2 className="section-title">Partnering with Churches &amp; Nonprofits</h2>
              <p className="section-desc">
                We do not view faith communities and nonprofits as recipients of charity. They are our frontline co-delivery partners and institutional allies.
              </p>
            </div>

            <div className="grid-3">
              <div className="card">
                <h3 style={{ fontSize: "20px", color: "var(--primary)", marginBottom: "12px" }}>For Churches &amp; Ministries</h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "14px" }}>
                  Churches are often the first place struggling families turn. Rather than merely writing a temporary utility check, benevolence ministries can sponsor an Ameliora assessment and living upgrade bundle, solving root friction points in the home.
                </p>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--accent-strong)" }}>
                  ✓ Pastoral care intake · Benevolence co-funding · Volunteer fellowship installation
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: "20px", color: "var(--primary)", marginBottom: "12px" }}>For Nonprofits &amp; CBOs</h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "14px" }}>
                  Community service organizations integrate our diagnostic tools into family case management. Ameliora provides direct co-delivery grant disbursements and anonymized outcomes data to demonstrate programmatic efficacy.
                </p>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--accent-strong)" }}>
                  ✓ Case management tools · Direct grant co-delivery · Measured wellbeing metrics
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: "20px", color: "var(--primary)", marginBottom: "12px" }}>For Housing &amp; Employers</h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "14px" }}>
                  Housing authorities and employers contract with Ameliora to improve residential quality-of-life, reduce tenant turnover, combat domestic exhaustion, and enhance workforce productivity.
                </p>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--accent-strong)" }}>
                  ✓ Municipal RFPs · Resident retention · Non-destructive building upgrades
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Governance */}
        <section id="governance" className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Stewardship</span>
              <h2 className="section-title">A Decentralized Board of Directors</h2>
              <p className="section-desc">
                Governance designed to include voices beyond a single founder, preventing unilateral extraction and protecting community trust.
              </p>
            </div>

            <div className="grid-4">
              <div className="card" style={{ padding: "24px" }}>
                <div style={{ fontSize: "24px", marginBottom: "12px" }}>👥</div>
                <h4 style={{ fontSize: "16px", color: "var(--primary)", marginBottom: "6px" }}>Community Seat</h4>
                <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                  Held by active participants and constituents from enrolled community neighborhoods.
                </p>
              </div>

              <div className="card" style={{ padding: "24px" }}>
                <div style={{ fontSize: "24px", marginBottom: "12px" }}>⛪</div>
                <h4 style={{ fontSize: "16px", color: "var(--primary)", marginBottom: "6px" }}>Faith &amp; Civic Seat</h4>
                <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                  Appointed from collaborating regional churches and interfaith coalitions.
                </p>
              </div>

              <div className="card" style={{ padding: "24px" }}>
                <div style={{ fontSize: "24px", marginBottom: "12px" }}>🎗️</div>
                <h4 style={{ fontSize: "16px", color: "var(--primary)", marginBottom: "6px" }}>Nonprofit Partner Seat</h4>
                <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                  Ensures alignment with vulnerable populations and community service objectives.
                </p>
              </div>

              <div className="card" style={{ padding: "24px" }}>
                <div style={{ fontSize: "24px", marginBottom: "12px" }}>📊</div>
                <h4 style={{ fontSize: "16px", color: "var(--primary)", marginBottom: "6px" }}>Ethics &amp; Audit Seat</h4>
                <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                  Independent trustee responsible for auditing and certifying the Public Balance Sheet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: CTA Banner */}
        <section style={{ padding: "64px 0", background: "var(--primary)", color: "white" }}>
          <div className="container" style={{ textAlign: "center", maxWidth: "780px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, marginBottom: "16px" }}>
              Ready to raise living conditions in your community?
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.8)", marginBottom: "32px", lineHeight: "1.6" }}>
              Whether you are an individual seeking to improve your home environment, or a church, nonprofit, or employer exploring partnership, we welcome your conversation.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:contact@amelioras.com?subject=Ameliora%20Partnership%20Inquiry" className="btn btn-accent" style={{ fontSize: "15px", padding: "12px 28px" }}>
                Reach Out to Our Team
              </a>
              <a href="https://github.com/josephjilovec/amelioras" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}>
                View Open Source Repo ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{ width: "28px", height: "28px", background: "var(--accent)", borderRadius: "6px", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>A</div>
                <span style={{ fontSize: "18px", fontWeight: 800, color: "white" }}>Amelioras</span>
              </div>
              <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#94a3b8", marginBottom: "16px" }}>
                A for-profit company structured around shared prosperity, radical transparency, and practical living-conditions improvements.
              </p>
              <div style={{ fontSize: "12px", color: "#64748b" }}>
                A [Joseph Jilovec Venture Studio](https://josephjilovec.com/portfolio/ameliora) enterprise.
              </div>
            </div>

            <div className="footer-col">
              <h5>The Platform</h5>
              <ul>
                <li><a href="#offerings">Core Offerings</a></li>
                <li><a href="#assessment">Living Assessment</a></li>
                <li><a href="#prosperity">Reinvestment Model</a></li>
                <li><a href="https://amelioras.com">amelioras.com</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Collaborations</h5>
              <ul>
                <li><a href="#partners">Churches &amp; Ministries</a></li>
                <li><a href="#partners">Nonprofit Partners</a></li>
                <li><a href="#partners">Housing Authorities</a></li>
                <li><a href="#governance">Decentralized Board</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Documentation</h5>
              <ul>
                <li><a href="https://github.com/josephjilovec/amelioras/blob/main/docs/business-model.md" target="_blank" rel="noreferrer">Business Model</a></li>
                <li><a href="https://github.com/josephjilovec/amelioras/blob/main/docs/offerings.md" target="_blank" rel="noreferrer">System Offerings</a></li>
                <li><a href="https://github.com/josephjilovec/amelioras/blob/main/docs/governance.md" target="_blank" rel="noreferrer">Governance</a></li>
                <li><a href="https://github.com/josephjilovec/amelioras/blob/main/docs/partnerships.md" target="_blank" rel="noreferrer">Partnerships</a></li>
                <li><a href="https://github.com/josephjilovec/amelioras/blob/main/docs/roadmap.md" target="_blank" rel="noreferrer">Roadmap</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} Amelioras. Inclusivity, diversity, and shared prosperity.
            </div>
            <div>
              <a href="https://josephjilovec.com" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
                Part of Joseph Jilovec Venture Studio ↗
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
