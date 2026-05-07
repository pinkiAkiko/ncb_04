import PageBanner from "../components/PageBanner";
import "./DrugAbuse.scss";

const drugCategories = [
    { name: "Opioids", drugs: "Heroin, Morphine, Opium, Codeine", effects: "Euphoria, drowsiness, respiratory depression, addiction", icon: "bi-exclamation-triangle-fill", color: "red", longTerm: "HIV/AIDS risk, liver damage, death from overdose" },
    { name: "Cannabis", drugs: "Ganja, Charas, Bhang", effects: "Altered perception, anxiety, impaired memory, coordination loss", icon: "bi-wind", color: "green", longTerm: "Psychosis, cognitive decline, respiratory issues" },
    { name: "Cocaine & Stimulants", drugs: "Cocaine, Crack, Amphetamines", effects: "Euphoria, increased energy, paranoia, heart palpitations", icon: "bi-lightning-fill", color: "orange", longTerm: "Heart attack, stroke, severe addiction, mental disorders" },
    { name: "Synthetic Drugs (NPS)", drugs: "MDMA, Mephedrone, Spice, Ketamine", effects: "Hallucinations, hyperthermia, heart failure, psychosis", icon: "bi-capsule-pill", color: "purple", longTerm: "Unknown long-term effects, high toxicity risk" },
    { name: "Sedatives", drugs: "Benzodiazepines, Barbiturates, GHB", effects: "Sedation, confusion, memory loss, respiratory depression", icon: "bi-moon-fill", color: "blue", longTerm: "Dependence, withdrawal seizures, cognitive impairment" },
    { name: "Prescription Drug Abuse", drugs: "Tramadol, Codeine syrups, SPA", effects: "Misuse of medicines leading to dependency", icon: "bi-prescription2", color: "teal", longTerm: "Addiction, organ damage, mental health deterioration" },
];

const selfSigns = [
    "Craving substances even when you want to stop",
    "Needing more of the substance for the same effect",
    "Withdrawal symptoms when not using",
    "Neglecting responsibilities at work, home, or school",
    "Spending excessive time obtaining or recovering from drug use",
    "Continuing use despite harm to relationships and health",
];

const otherSigns = [
    "Sudden mood swings, irritability, or aggression",
    "Unexplained weight loss or change in appearance",
    "Bloodshot eyes, slurred speech, or unsteady movement",
    "Withdrawal from family, friends, and activities",
    "Financial problems; borrowing or stealing money",
    "Finding drug paraphernalia — needles, pipes, foil packets",
];

const helpCards = [
    { icon: "bi-telephone-fill", title: "NCB Drug Helpline", detail: "1933 (24/7)", sub: "Free, confidential helpline — MANAS", link: "tel:1933", linkText: "Call 1933 Now", urgent: true },
    { icon: "bi-hospital-fill", title: "NIMHANS Bangalore", detail: "Drug Dependence Treatment Centre", sub: "080-46110007 | Govt. Hospital", link: "tel:08046110007", linkText: "Contact NIMHANS" },
    { icon: "bi-headset", title: "Vandrevala Foundation", detail: "1860-2662-345", sub: "24×7 Mental Health & De-addiction Helpline", link: "tel:18602662345", linkText: "Call Helpline" },
];

const demandReduction = [
    { icon: "bi-shield-check", title: "Prevention", body: "NCB runs nationwide awareness campaigns, school-level programs, and the Nasha Mukt Bharat Abhiyan to prevent first-time drug use." },
    { icon: "bi-heart-pulse-fill", title: "Treatment", body: "NCB supports NAPDDR-funded treatment centres across India providing medically supervised detoxification and counselling." },
    { icon: "bi-arrow-repeat", title: "Rehabilitation", body: "Vocational training and community reintegration support through 700+ registered de-addiction centres under NCB's demand reduction mandate." },
];

function DrugAbuse() {
    return (
        <div className="drug-abuse-page">
            <PageBanner
                title="Drug Abuse"
                subtitle="Information on drug abuse prevention, categories, warning signs and rehabilitation"
                breadcrumbs={[
                    { label: "Others", path: "/others" },
                    { label: "Drug Abuse", path: "/drug-abuse" },
                ]}
            />

            {/* ── Stat Strip ── */}
            <div className="da-stat-strip">
                <div className="container">
                    <div className="da-stats-row">
                        {[
                            { num: "77.5 Lakh", label: "Estimated drug dependent persons in India", src: "MSJES Survey 2019" },
                            { num: "8.5 Million", label: "Cannabis users across India", src: "" },
                            { num: "2.3 Million", label: "Heroin users — among the highest burden", src: "" },
                            { num: "#1 Burden", label: "Opioid dependence — highest among all categories", src: "" },
                        ].map((s, i) => (
                            <div key={i} className="da-stat-item">
                                <span className="da-stat-num">{s.num}</span>
                                <span className="da-stat-label">{s.label}</span>
                                {s.src && <span className="da-stat-src">{s.src}</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">

                    {/* ── Drug Categories ── */}
                    <section className="da-section">
                        <span className="section-label">Know the Substances</span>
                        <h2 className="section-title">Drug Categories & Their Effects</h2>
                        <div className="section-divider" />
                        <div className="da-drug-grid">
                            {drugCategories.map((d, i) => (
                                <div key={i} className={`da-drug-card da-drug-card--${d.color}`}>
                                    <div className="da-drug-card-header">
                                        <div className="da-drug-icon">
                                            <i className={`bi ${d.icon}`} />
                                        </div>
                                        <h3 className="da-drug-name">{d.name}</h3>
                                    </div>
                                    <div className="da-drug-body">
                                        <div className="da-drug-row">
                                            <span className="da-drug-row-label">Substances</span>
                                            <span className="da-drug-row-val">{d.drugs}</span>
                                        </div>
                                        <div className="da-drug-row">
                                            <span className="da-drug-row-label">Short-term Effects</span>
                                            <span className="da-drug-row-val">{d.effects}</span>
                                        </div>
                                        <div className="da-drug-row da-drug-row--danger">
                                            <span className="da-drug-row-label"><i className="bi bi-exclamation-octagon-fill" /> Long-term Harm</span>
                                            <span className="da-drug-row-val">{d.longTerm}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Warning Signs ── */}
                    <section className="da-section">
                        <span className="section-label">Early Detection</span>
                        <h2 className="section-title">Warning Signs of Drug Abuse</h2>
                        <div className="section-divider" />
                        <div className="da-signs-grid">
                            <div className="da-signs-col">
                                <div className="da-signs-col-header da-signs-col-header--self">
                                    <i className="bi bi-person-fill" />
                                    <h3>Signs in Yourself</h3>
                                </div>
                                <ul className="da-signs-list">
                                    {selfSigns.map((s, i) => (
                                        <li key={i} className="da-signs-item">
                                            <i className="bi bi-dot" />
                                            <span>{s}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="da-signs-col">
                                <div className="da-signs-col-header da-signs-col-header--others">
                                    <i className="bi bi-people-fill" />
                                    <h3>Signs to Watch in Others</h3>
                                </div>
                                <ul className="da-signs-list">
                                    {otherSigns.map((s, i) => (
                                        <li key={i} className="da-signs-item">
                                            <i className="bi bi-dot" />
                                            <span>{s}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── Where to Get Help ── */}
                    <section className="da-section">
                        <span className="section-label">Seek Help Now</span>
                        <h2 className="section-title">Where to Get Help</h2>
                        <div className="section-divider" />
                        <div className="da-help-grid">
                            {helpCards.map((h, i) => (
                                <div key={i} className={`da-help-card${h.urgent ? " da-help-card--urgent" : ""}`}>
                                    <div className="da-help-icon">
                                        <i className={`bi ${h.icon}`} />
                                    </div>
                                    <h3 className="da-help-title">{h.title}</h3>
                                    <p className="da-help-detail">{h.detail}</p>
                                    <p className="da-help-sub">{h.sub}</p>
                                    <a href={h.link} className="da-help-btn">{h.linkText} <i className="bi bi-arrow-right" /></a>
                                </div>
                            ))}
                        </div>
                        <div className="da-helpline-callout">
                            <i className="bi bi-telephone-outbound-fill" />
                            <div>
                                <strong>Drug Helpline 1933 is free, confidential, and available 24×7.</strong>
                                <span>Call for immediate assistance, guidance on treatment, or to report drug activity.</span>
                            </div>
                            <a href="tel:1933" className="da-helpline-cta">Call 1933</a>
                        </div>
                    </section>

                    {/* ── NCB's Role ── */}
                    <section className="da-section">
                        <span className="section-label">NCB Mandate</span>
                        <h2 className="section-title">NCB's Role in Demand Reduction</h2>
                        <div className="section-divider" />
                        <div className="da-role-grid">
                            {demandReduction.map((r, i) => (
                                <div key={i} className="da-role-card">
                                    <div className="da-role-icon"><i className={`bi ${r.icon}`} /></div>
                                    <h3 className="da-role-title">{r.title}</h3>
                                    <p className="da-role-body">{r.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default DrugAbuse;
