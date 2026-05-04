import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./RTI.scss";

const rtiOfficers = [
    { role: "Central Public Information Officer (CPIO)", name: "Shri R.K. Meena, IPS", designation: "Deputy Director General, HQ", address: "East Block-VI, R.K. Puram, New Delhi - 110 066", phone: "011-26197915", email: "cpio-ncb@nic.in" },
    { role: "First Appellate Authority (FAA)", name: "Shri A.K. Singh, IPS", designation: "Additional Director General, HQ", address: "East Block-VI, R.K. Puram, New Delhi - 110 066", phone: "011-26197916", email: "faa-ncb@nic.in" },
];

const rtiResources = [
    { title: "RTI Application Form", desc: "Standard format for filing RTI applications under Section 6 of RTI Act, 2005.", icon: "bi-file-earmark-text", size: "180 KB" },
    { title: "First Appeal Form", desc: "Form for filing first appeal to the First Appellate Authority under Section 19.", icon: "bi-file-earmark-arrow-up", size: "145 KB" },
    { title: "Annual RTI Return 2024-25", desc: "Annual return filed under Section 25 of the RTI Act for the year 2024-25.", icon: "bi-file-earmark-bar-graph", size: "520 KB" },
    { title: "Annual RTI Return 2023-24", desc: "Annual return filed under Section 25 of the RTI Act for the year 2023-24.", icon: "bi-file-earmark-bar-graph", size: "498 KB" },
    { title: "Proactive Disclosure (Sec. 4)", desc: "Suo-motu disclosure of information under Section 4 of the RTI Act, 2005.", icon: "bi-file-earmark-lock", size: "2.1 MB" },
    { title: "Online RTI Portal Guide", desc: "Step-by-step guide for filing RTI online through the rtionline.gov.in portal.", icon: "bi-globe2", size: "320 KB" },
];

const rti17Tabs = [
    { label: "Organisation & Functions", items: ["Establishment and history", "Powers and duties of officers", "Decision making processes", "Norms for discharge of functions"] },
    { label: "Budget & Programme", items: ["Annual budget allocation", "Expenditure details", "Plans, programmes and schemes", "Performance reports"] },
    { label: "Employees & Rules", items: ["Officer directory", "Sanctioned posts", "Recruitment rules", "Service rules and regulations"] },
    { label: "Public Notices", items: ["Tenders and procurement", "Circulars and orders", "Press releases", "Notifications to the public"] },
];

function RTI() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="rti-page">
            <PageBanner
                title="Right to Information"
                subtitle="Information under RTI Act, 2005 — Section 4 Disclosures & Public Information Officers"
                breadcrumbs={[{ label: "RTI", path: "/rti" }]}
            />

            <div className="page-section">
                <div className="container">
                    {/* ── RTI Officers — CBI style two-column card layout ── */}
                    <section className="rti-officers-section">
                        <span className="section-label">Designated Officers</span>
                        <h2 className="section-title">Public Information Officers</h2>
                        <div className="section-divider" />

                        <div className="rti-officers-grid">
                            {rtiOfficers.map((officer, i) => (
                                <div key={i} className={`rti-officer-card ${i === 0 ? "rti-card--primary" : "rti-card--secondary"}`}>
                                    <div className="roc-header">
                                        <div className="roc-role-tag">{officer.role}</div>
                                        <div className="roc-avatar">
                                            <i className="bi bi-person-badge-fill" />
                                        </div>
                                    </div>
                                    <div className="roc-body">
                                        <h3 className="roc-name">{officer.name}</h3>
                                        <p className="roc-designation">{officer.designation}</p>
                                        <div className="roc-contact-list">
                                            <div className="roc-contact-item">
                                                <i className="bi bi-geo-alt-fill" />
                                                <span>{officer.address}</span>
                                            </div>
                                            <div className="roc-contact-item">
                                                <i className="bi bi-telephone-fill" />
                                                <a href={`tel:${officer.phone}`}>{officer.phone}</a>
                                            </div>
                                            <div className="roc-contact-item">
                                                <i className="bi bi-envelope-fill" />
                                                <a href={`mailto:${officer.email}`}>{officer.email}</a>
                                            </div>
                                        </div>
                                        <a
                                            href="https://rtionline.gov.in"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="roc-file-btn"
                                        >
                                            <i className="bi bi-send-fill" /> File RTI Online
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── How to file RTI — CBI step layout ── */}
                    <section className="rti-steps-section">
                        <div className="rti-steps-header">
                            <div>
                                <span className="section-label">Process</span>
                                <h2 className="section-title">How to File an RTI</h2>
                                <div className="section-divider" />
                            </div>
                        </div>
                        <div className="rti-steps-grid">
                            {[
                                { step: "01", icon: "bi-pencil-square", title: "Draft Application", body: "Write your application in plain language, clearly stating the information required. Include your name, address, and contact details." },
                                { step: "02", icon: "bi-cash-coin",     title: "Pay Fee",         body: "Pay ₹10 application fee by IPO/DD/Banker's Cheque or online at rtionline.gov.in. BPL applicants are exempt from fees." },
                                { step: "03", icon: "bi-send",          title: "Submit",          body: "Post to the CPIO, NCB Headquarters, New Delhi or submit online via the National RTI Portal at rtionline.gov.in." },
                                { step: "04", icon: "bi-hourglass-split",title: "Await Response", body: "Expect a response within 30 days. Life/liberty matters are addressed within 48 hours as mandated by the Act." },
                                { step: "05", icon: "bi-arrow-repeat",  title: "File Appeal",     body: "If dissatisfied with the response, file a First Appeal to the FAA within 30 days. Second appeal lies before the CIC." },
                            ].map(s => (
                                <div key={s.step} className="rti-step-card">
                                    <div className="rsc-step-num">{s.step}</div>
                                    <div className="rsc-icon"><i className={`bi ${s.icon}`} /></div>
                                    <h4 className="rsc-title">{s.title}</h4>
                                    <p className="rsc-body">{s.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Section 4 Disclosure tabs — CBI table style ── */}
                    <section className="rti-17-section">
                        <div className="rti-17-header">
                            <span className="section-label">Mandatory Disclosure</span>
                            <h2 className="section-title">Section 4 — Suo-Motu Disclosures</h2>
                            <div className="section-divider" />
                        </div>

                        <div className="rti-tab-layout">
                            <div className="rti-tab-sidebar">
                                {rti17Tabs.map((tab, i) => (
                                    <button
                                        key={i}
                                        className={`rti-sidebar-tab ${activeTab === i ? "active" : ""}`}
                                        onClick={() => setActiveTab(i)}
                                    >
                                        <i className="bi bi-chevron-right rt-arrow" />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="rti-tab-content">
                                <h3 className="rtc-heading">{rti17Tabs[activeTab].label}</h3>
                                <ul className="rtc-list">
                                    {rti17Tabs[activeTab].items.map((item, i) => (
                                        <li key={i} className="rtc-item">
                                            <i className="bi bi-file-earmark-fill rtc-icon" />
                                            <span>{item}</span>
                                            <button className="rtc-download-btn" aria-label={`Download ${item}`}>
                                                <i className="bi bi-download" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── Resources / Downloads ── */}
                    <section className="rti-resources-section">
                        <span className="section-label">Downloads</span>
                        <h2 className="section-title">RTI Resources & Forms</h2>
                        <div className="section-divider" />

                        <div className="rti-resources-grid">
                            {rtiResources.map((r, i) => (
                                <div key={i} className="rti-resource-card">
                                    <div className="rrc-icon"><i className={`bi ${r.icon}`} /></div>
                                    <div className="rrc-info">
                                        <h4 className="rrc-title">{r.title}</h4>
                                        <p className="rrc-desc">{r.desc}</p>
                                    </div>
                                    <div className="rrc-meta">
                                        <span className="rrc-size"><i className="bi bi-file-earmark" /> {r.size}</span>
                                        <button className="rrc-download-btn">
                                            <i className="bi bi-download" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Online portal highlight ── */}
                    <div className="rti-portal-highlight">
                        <i className="bi bi-laptop" />
                        <div>
                            <h3>File RTI Online</h3>
                            <p>You can now file your RTI application online through the National RTI Portal — fast, paperless, and trackable.</p>
                        </div>
                        <a href="https://rtionline.gov.in" target="_blank" rel="noopener noreferrer" className="rph-btn">
                            Visit RTI Portal <i className="bi bi-arrow-up-right-square" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RTI;
