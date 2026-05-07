import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./ScamAlert.scss";

const scamSteps = [
    { step: "01", icon: "bi-phone-vibrate", title: "You Receive a Call", body: "A person calls you on WhatsApp or video call, appearing to be a uniformed NCB/CBI/Police officer. They may show a fake ID badge or office background." },
    { step: "02", icon: "bi-bag-x-fill", title: "False Accusation", body: "They claim a parcel with drugs was found in your name at customs, OR they claim you are implicated in a drug trafficking case under NDPS Act." },
    { step: "03", icon: "bi-lock-fill", title: "'Digital Arrest' Threat", body: "They threaten 'digital arrest' — demanding you stay on call for hours, isolate yourself, and not speak to anyone. This is designed to create panic." },
    { step: "04", icon: "bi-cash-stack", title: "Demand for Money", body: "They demand payment (₹10,000 to ₹20 lakh+) via UPI, cryptocurrency, or gift cards to 'close the case' or avoid arrest. DO NOT PAY." },
];

const actions = [
    { icon: "bi-x-circle-fill", color: "red", action: "HANG UP IMMEDIATELY — do not stay on the call or comply with their demands." },
    { icon: "bi-people-fill", color: "blue", action: "SPEAK TO A FAMILY MEMBER or trusted person right away. Scammers want you isolated." },
    { icon: "bi-building-fill", color: "navy", action: "VISIT your nearest police station in person and file an FIR about the scam call." },
    { icon: "bi-globe2", color: "green", action: "FILE AN ONLINE COMPLAINT at cybercrime.gov.in — keep all call details and screenshots." },
    { icon: "bi-telephone-fill", color: "gold", action: "CALL NCB HELPLINE 1933 or National Cyber Crime Helpline 1930 immediately." },
];

const faqs = [
    { q: "Does NCB ever arrest people over phone or WhatsApp?", a: "No. NCB never arrests anyone over phone, video call, or WhatsApp. An arrest requires a physical presence, a warrant, and due legal process under the NDPS Act. Any such call is a scam." },
    { q: "What is 'digital arrest'?", a: "'Digital arrest' is not a real legal concept. It is a scam tactic where fraudsters threaten you to remain on a call under false pretense of being under 'online custody'. No law in India recognises digital arrest." },
    { q: "What should I do if I already paid money to scammers?", a: "Immediately file a complaint at cybercrime.gov.in or call 1930. Also file an FIR at your local police station. Share the UPI/bank transaction details, phone numbers, and any screenshots with the police." },
    { q: "How do I identify genuine NCB officers?", a: "NCB officers will never contact you over personal WhatsApp for official matters. They carry government-issued photo ID cards. In genuine operations, they have legal warrants. If in doubt, call 011-26197915 (NCB HQ) to verify." },
    { q: "Is NCB actively filing cases against these scammers?", a: "Yes. NCB has filed multiple FIRs against scammers impersonating NCB officers and is working with Cyber Crime units and telecom authorities to identify and prosecute these groups." },
    { q: "Can I report a scam to NCB directly?", a: "Yes. Call NCB helpline 1933, email at ncb-hq@gov.in with subject 'Scam Report', or file an online complaint at cybercrime.gov.in. Provide all details including phone numbers and transaction IDs." },
];

const stats = [
    { num: "47+", label: "FIRs filed by NCB against impersonators (2024-25)" },
    { num: "₹2.3 Cr", label: "Fraud amount reported in NCB impersonation cases" },
    { num: "1930", label: "National Cyber Crime Helpline — report 24×7" },
    { num: "1933", label: "NCB Drug & Scam Helpline — free, 24×7" },
];

function ScamAlert() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

    return (
        <div className="scam-alert-page">
            <PageBanner
                title="NCB Impersonation Scam Alert"
                subtitle="Protect yourself from fraudsters claiming to be NCB/CBI officers"
                breadcrumbs={[
                    { label: "Alert Awareness", path: "/alert-awareness" },
                    { label: "Scam Alert", path: "/scam-alert" },
                ]}
            />

            {/* ── Big Warning Banner ── */}
            <div className="sa-warning-banner">
                <div className="container">
                    <div className="sa-warning-inner">
                        <div className="sa-warning-badge">
                            <i className="bi bi-exclamation-triangle-fill" />
                            <span>SCAM WARNING</span>
                        </div>
                        <div className="sa-warning-text">
                            <h2>NCB Does NOT Arrest People Over Phone or WhatsApp</h2>
                            <p>If you receive a call from someone claiming to be an NCB/CBI officer threatening 'digital arrest' — <strong>it is a scam.</strong> Never pay money. Hang up immediately.</p>
                        </div>
                        <div className="sa-warning-actions">
                            <a href="tel:1930" className="sa-warn-btn sa-warn-btn--primary">Call 1930</a>
                            <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="sa-warn-btn sa-warn-btn--secondary">Report Online</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">

                    {/* ── How the Scam Works ── */}
                    <section className="sa-section">
                        <span className="section-label">Step-by-Step</span>
                        <h2 className="section-title">How the Scam Works</h2>
                        <div className="section-divider" />
                        <div className="sa-flow-grid">
                            {scamSteps.map((s, i) => (
                                <div key={i} className="sa-flow-card">
                                    {i < scamSteps.length - 1 && <div className="sa-flow-arrow"><i className="bi bi-arrow-right" /></div>}
                                    <div className="sa-flow-step">{s.step}</div>
                                    <div className="sa-flow-icon"><i className={`bi ${s.icon}`} /></div>
                                    <h3 className="sa-flow-title">{s.title}</h3>
                                    <p className="sa-flow-body">{s.body}</p>
                                </div>
                            ))}
                        </div>
                        <div className="sa-flow-note">
                            <i className="bi bi-info-circle-fill" />
                            <span>Scammers often use <strong>spoofed phone numbers</strong> that appear to be government numbers. They may even show fake NCB ID cards during video calls.</span>
                        </div>
                    </section>

                    {/* ── Do This Immediately ── */}
                    <section className="sa-section">
                        <span className="section-label">Immediate Actions</span>
                        <h2 className="section-title">Do This If You Receive Such a Call</h2>
                        <div className="section-divider" />
                        <div className="sa-actions-list">
                            {actions.map((a, i) => (
                                <div key={i} className={`sa-action-item sa-action-item--${a.color}`}>
                                    <div className="sa-action-num">{String(i + 1).padStart(2, "0")}</div>
                                    <div className={`sa-action-icon sa-action-icon--${a.color}`}>
                                        <i className={`bi ${a.icon}`} />
                                    </div>
                                    <p className="sa-action-text">{a.action}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Report Links ── */}
                    <section className="sa-section">
                        <span className="section-label">Report the Fraud</span>
                        <h2 className="section-title">How to File a Complaint</h2>
                        <div className="section-divider" />
                        <div className="sa-report-grid">
                            <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="sa-report-card sa-report-card--primary">
                                <i className="bi bi-globe2" />
                                <div>
                                    <strong>cybercrime.gov.in</strong>
                                    <span>National Cyber Crime Reporting Portal — File an online complaint with full details</span>
                                </div>
                                <i className="bi bi-arrow-up-right-square sa-rc-arrow" />
                            </a>
                            <a href="tel:1930" className="sa-report-card">
                                <i className="bi bi-headset" />
                                <div>
                                    <strong>1930 — Cyber Crime Helpline</strong>
                                    <span>National helpline for cyber fraud complaints — 24×7, free to call</span>
                                </div>
                            </a>
                            <a href="tel:1933" className="sa-report-card">
                                <i className="bi bi-telephone-fill" />
                                <div>
                                    <strong>1933 — NCB Helpline</strong>
                                    <span>Report NCB impersonation scams directly to NCB's 24×7 helpline</span>
                                </div>
                            </a>
                            <div className="sa-report-card sa-report-card--info">
                                <i className="bi bi-building" />
                                <div>
                                    <strong>Nearest Police Station</strong>
                                    <span>Visit in person to file an FIR under IT Act. Bring call logs and transaction details.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Stats ── */}
                    <div className="sa-stats-strip">
                        {stats.map((s, i) => (
                            <div key={i} className="sa-stat-item">
                                <span className="sa-stat-num">{s.num}</span>
                                <span className="sa-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* ── FAQ ── */}
                    <section className="sa-section">
                        <span className="section-label">Common Questions</span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <div className="section-divider" />
                        <div className="sa-faq-list">
                            {faqs.map((f, i) => (
                                <div key={i} className={`sa-faq-item${openFaq === i ? " sa-faq-item--open" : ""}`}>
                                    <button className="sa-faq-q" onClick={() => toggleFaq(i)}>
                                        <span>{f.q}</span>
                                        <i className={`bi ${openFaq === i ? "bi-chevron-up" : "bi-chevron-down"}`} />
                                    </button>
                                    {openFaq === i && (
                                        <div className="sa-faq-a">
                                            <p>{f.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default ScamAlert;
