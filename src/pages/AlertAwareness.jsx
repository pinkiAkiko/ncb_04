import PageBanner from "../components/PageBanner";
import "./AlertAwareness.scss";

const alerts = [
    { severity: "critical", type: "Digital Arrest Scam", title: "Beware of 'Digital Arrest' Scam Calls — Fraudsters Impersonating NCB/CBI", date: "2026-05-01", body: "Fraudsters are calling citizens on WhatsApp/video call, claiming to be NCB/CBI officers and threatening 'digital arrest' unless payment is made. NCB never arrests people over phone." },
    { severity: "critical", type: "Fake Parcel Scam", title: "Fake 'Drugs Found in Parcel' WhatsApp Calls — Don't Pay", date: "2026-04-15", body: "Citizens are receiving calls claiming a parcel with drugs was found in their name at customs. They demand payment to 'settle' the case. This is a scam." },
    { severity: "high", type: "Fake Recruitment", title: "Fake NCB Recruitment SMS/WhatsApp Messages Circulating", date: "2026-03-28", body: "Fraudulent messages claiming NCB recruitment openings requiring fee payment of ₹5,000–₹20,000. NCB never charges fees. All genuine recruitment is via SSC/UPSC." },
    { severity: "medium", type: "Social Media", title: "Fake NCB Social Media Accounts — Verify Official Pages Only", date: "2026-03-10", body: "Multiple fake NCB accounts on Facebook/Instagram impersonating officials. NCB's only verified accounts are linked on the official website." },
    { severity: "low", type: "General Advisory", title: "Advisory: Dark-net Drug Purchase Targeting Youth via Encrypted Apps", date: "2026-02-20", body: "NCB advises parents and students about drug dealers operating through encrypted messaging apps like Telegram. Report to Cyber Crime or NCB Helpline 1933." },
];

const neverDo = [
    { icon: "bi-phone-vibrate", text: "Arrest you over phone/WhatsApp" },
    { icon: "bi-cash-coin", text: "Demand cash payment to avoid arrest" },
    { icon: "bi-credit-card", text: "Ask for bank account details over phone" },
    { icon: "bi-whatsapp", text: "Contact you through personal WhatsApp numbers" },
];

const reportSteps = [
    { icon: "bi-telephone-fill", title: "NCB Drug Helpline", detail: "Call 1933", link: "tel:1933" },
    { icon: "bi-globe2", title: "National Cyber Crime Portal", detail: "cybercrime.gov.in", link: "https://cybercrime.gov.in" },
    { icon: "bi-headset", title: "Cyber Crime Helpline", detail: "Call 1930", link: "tel:1930" },
    { icon: "bi-building", title: "Nearest Police Station", detail: "File an FIR in person", link: null },
];

const awarenessCards = [
    { icon: "bi-mortarboard-fill", title: "For Youth", body: "Know that no government agency will contact you over WhatsApp to demand money. Never pay anyone claiming to be an officer.", color: "blue" },
    { icon: "bi-house-heart-fill", title: "For Parents", body: "Educate your children about digital scams and drug-related frauds. Discuss openly about any threatening calls they receive.", color: "green" },
    { icon: "bi-people-fill", title: "For Communities", body: "Share awareness about NCB impersonation scams. Report suspicious activity to police immediately — do not pay and do not panic.", color: "gold" },
];

const severityLabels = { critical: "Critical", high: "High Alert", medium: "Medium", low: "Advisory" };

function AlertAwareness() {
    return (
        <div className="alert-awareness-page">
            <PageBanner
                title="Alert Awareness"
                subtitle="Public drug awareness alerts, advisories, and scam warnings from NCB"
                breadcrumbs={[{ label: "Alert Awareness", path: "/alert-awareness" }]}
            />

            {/* ── Urgent Banner ── */}
            <div className="aa-urgent-banner">
                <div className="container">
                    <div className="aa-urgent-inner">
                        <div className="aa-urgent-icon"><i className="bi bi-exclamation-octagon-fill" /></div>
                        <div className="aa-urgent-text">
                            <strong>OFFICIAL NOTICE FROM NCB:</strong>
                            <span>NCB DOES NOT arrest people over phone/WhatsApp. Never pay money to anyone claiming to be from NCB. Report such attempts to your nearest police station or call 1930.</span>
                        </div>
                        <a href="tel:1930" className="aa-urgent-btn">Call 1930</a>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">

                    {/* ── Active Alerts ── */}
                    <section className="aa-section">
                        <span className="section-label">Current Advisories</span>
                        <h2 className="section-title">Active Alerts & Advisories</h2>
                        <div className="section-divider" />
                        <div className="aa-alerts-list">
                            {alerts.map((a, i) => (
                                <div key={i} className={`aa-alert-card aa-alert-card--${a.severity}`}>
                                    <div className="aa-alert-aside">
                                        <span className={`aa-severity-badge aa-severity-badge--${a.severity}`}>{severityLabels[a.severity]}</span>
                                        <span className="aa-alert-type">{a.type}</span>
                                        <span className="aa-alert-date"><i className="bi bi-calendar3" /> {a.date}</span>
                                    </div>
                                    <div className="aa-alert-body">
                                        <h3 className="aa-alert-title">{a.title}</h3>
                                        <p className="aa-alert-desc">{a.body}</p>
                                        <a href="/scam-alert" className="aa-alert-more">Read More <i className="bi bi-arrow-right" /></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── What NCB Will Never Do ── */}
                    <section className="aa-section">
                        <span className="section-label">Know Your Rights</span>
                        <h2 className="section-title">What NCB Will NEVER Do</h2>
                        <div className="section-divider" />
                        <div className="aa-never-grid">
                            {neverDo.map((n, i) => (
                                <div key={i} className="aa-never-card">
                                    <div className="aa-never-x"><i className="bi bi-x-circle-fill" /></div>
                                    <div className="aa-never-icon"><i className={`bi ${n.icon}`} /></div>
                                    <p className="aa-never-text">{n.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── How to Report ── */}
                    <section className="aa-section">
                        <span className="section-label">Take Action</span>
                        <h2 className="section-title">How to Report a Scam</h2>
                        <div className="section-divider" />
                        <div className="aa-report-grid">
                            {reportSteps.map((r, i) => (
                                <div key={i} className="aa-report-card">
                                    <div className="aa-report-step">{String(i + 1).padStart(2, "0")}</div>
                                    <div className="aa-report-icon"><i className={`bi ${r.icon}`} /></div>
                                    <h3 className="aa-report-title">{r.title}</h3>
                                    {r.link ? (
                                        <a href={r.link} target={r.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="aa-report-detail">{r.detail}</a>
                                    ) : (
                                        <span className="aa-report-detail">{r.detail}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Drug Awareness ── */}
                    <section className="aa-section">
                        <span className="section-label">Awareness</span>
                        <h2 className="section-title">Drug Awareness Messages</h2>
                        <div className="section-divider" />
                        <div className="aa-awareness-grid">
                            {awarenessCards.map((c, i) => (
                                <div key={i} className={`aa-awareness-card aa-awareness-card--${c.color}`}>
                                    <div className="aa-awareness-icon"><i className={`bi ${c.icon}`} /></div>
                                    <h3 className="aa-awareness-title">{c.title}</h3>
                                    <p className="aa-awareness-body">{c.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default AlertAwareness;
