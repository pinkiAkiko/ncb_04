import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./Legislations.scss";

const primaryActs = [
    {
        title: "NDPS Act, 1985",
        subtitle: "Narcotic Drugs and Psychotropic Substances Act, 1985",
        desc: "The principal legislation governing drug control in India. Provides for stringent provisions for drug offences, appointment of officers, and enforcement powers.",
        icon: "bi-book-fill",
        year: "1985",
        lastAmended: "2014",
        category: "Primary",
    },
    {
        title: "Prevention of Illicit Traffic in Narcotic Drugs Act, 1988",
        subtitle: "PITNDPS Act, 1988",
        desc: "Provides for detention of persons engaged in illicit drug trafficking and related offences.",
        icon: "bi-shield-lock-fill",
        year: "1988",
        lastAmended: "2023",
        category: "Primary",
    },
];

const internationalConventions = [
    {
        title: "Single Convention on Narcotic Drugs, 1961",
        org: "United Nations",
        ratified: "1964",
        desc: "India's commitments under the Single Convention covering narcotic drugs.",
    },
    {
        title: "Convention on Psychotropic Substances, 1971",
        org: "United Nations",
        ratified: "1975",
        desc: "Covers psychotropic substances — amphetamines, barbiturates, benzodiazepines.",
    },
    {
        title: "Vienna Convention against Illicit Traffic, 1988",
        org: "United Nations",
        ratified: "1990",
        desc: "The primary UN convention against drug trafficking, including maritime provisions.",
    },
];

const rulesOrders = [
    { title: "NDPS Rules, 1985", desc: "Procedural rules under the Act", size: "1.2 MB" },
    { title: "NDPS (Amendment) Rules, 2014", desc: "Amendments to primary rules", size: "380 KB" },
    { title: "NDPS (Amendment) Rules, 2020", desc: "2020 revisions including new substances", size: "210 KB" },
    { title: "Narcotic Drugs & Psychotropic Substances (Amendment) Act, 2014", desc: "Key amendments to the NDPS Act", size: "445 KB" },
    { title: "Essential Narcotic Drugs Rules, 2015", desc: "Rules governing medical use of narcotic drugs", size: "820 KB" },
    { title: "NDPS (Regulation of Controlled Substances) Order, 2013", desc: "Controlled substances schedule", size: "290 KB" },
];

const tabs = [
    { id: "primary", label: "Primary Acts", icon: "bi-book-fill" },
    { id: "conventions", label: "International Conventions", icon: "bi-globe2" },
    { id: "rules", label: "Rules & Orders", icon: "bi-file-earmark-ruled-fill" },
];

function Legislations() {
    const [activeTab, setActiveTab] = useState("primary");

    return (
        <div className="legislations-page">
            <PageBanner
                title="Acts & Rules"
                subtitle="NDPS Act, International Conventions, and Subordinate Rules & Orders governing narcotic drug control"
                breadcrumbs={[
                    { label: "Legal", path: "/legislations" },
                    { label: "Acts & Rules", path: "/legislations" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    {/* Intro */}
                    <div className="leg-intro-banner">
                        <i className="bi bi-info-circle-fill" />
                        <p>
                            The Narcotic Control Bureau derives its mandate from the NDPS Act, 1985 and related
                            legislation. This section provides access to the primary statutes, international
                            conventions ratified by India, and the subordinate rules framed thereunder.
                        </p>
                    </div>

                    {/* Tab layout */}
                    <div className="leg-tab-layout">
                        {/* Sidebar */}
                        <div className="leg-tab-sidebar">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`leg-sidebar-tab ${activeTab === tab.id ? "active" : ""}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <i className={`bi ${tab.icon}`} />
                                    <span>{tab.label}</span>
                                    <i className="bi bi-chevron-right leg-tab-arrow" />
                                </button>
                            ))}

                            <div className="leg-sidebar-note">
                                <i className="bi bi-exclamation-triangle-fill" />
                                <p>For authenticated text of Acts, visit the Ministry of Law & Justice e-Gazette.</p>
                                <a
                                    href="https://egazette.gov.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="leg-egazette-link"
                                >
                                    <i className="bi bi-box-arrow-up-right" /> e-Gazette Portal
                                </a>
                            </div>
                        </div>

                        {/* Content panel */}
                        <div className="leg-tab-content">
                            {/* ── Primary Acts ── */}
                            {activeTab === "primary" && (
                                <div className="leg-primary-panel">
                                    <h3 className="leg-panel-heading">Primary Legislation</h3>
                                    <p className="leg-panel-sub">
                                        Core statutes enacted by Parliament that govern narcotic drug control in India.
                                    </p>
                                    <div className="leg-primary-grid">
                                        {primaryActs.map((act, i) => (
                                            <div key={i} className="leg-primary-card">
                                                <div className="lpc-accent-bar" />
                                                <div className="lpc-body">
                                                    <div className="lpc-icon-row">
                                                        <div className="lpc-icon">
                                                            <i className={`bi ${act.icon}`} />
                                                        </div>
                                                        <span className="lpc-category-badge">{act.category}</span>
                                                    </div>
                                                    <h4 className="lpc-title">{act.title}</h4>
                                                    <p className="lpc-subtitle">{act.subtitle}</p>
                                                    <p className="lpc-desc">{act.desc}</p>
                                                    <div className="lpc-meta-row">
                                                        <span className="lpc-meta-item">
                                                            <i className="bi bi-calendar3" /> Enacted: <strong>{act.year}</strong>
                                                        </span>
                                                        <span className="lpc-meta-item">
                                                            <i className="bi bi-pencil-square" /> Last Amended: <strong>{act.lastAmended}</strong>
                                                        </span>
                                                    </div>
                                                    <div className="lpc-actions">
                                                        <button className="lpc-download-btn">
                                                            <i className="bi bi-file-earmark-pdf" /> Download PDF
                                                        </button>
                                                        <button className="lpc-view-btn">
                                                            <i className="bi bi-eye" /> View Online
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ── International Conventions ── */}
                            {activeTab === "conventions" && (
                                <div className="leg-conventions-panel">
                                    <h3 className="leg-panel-heading">International Conventions</h3>
                                    <p className="leg-panel-sub">
                                        United Nations conventions ratified by India that form the basis of India's international obligations on narcotic drug control.
                                    </p>
                                    <div className="leg-conventions-grid">
                                        {internationalConventions.map((conv, i) => (
                                            <div key={i} className="leg-conv-card">
                                                <div className="lcc-header">
                                                    <div className="lcc-un-badge">
                                                        <i className="bi bi-globe2" />
                                                        <span>{conv.org}</span>
                                                    </div>
                                                    <span className="lcc-ratified-badge">
                                                        <i className="bi bi-patch-check-fill" /> Ratified {conv.ratified}
                                                    </span>
                                                </div>
                                                <div className="lcc-body">
                                                    <h4 className="lcc-title">{conv.title}</h4>
                                                    <p className="lcc-desc">{conv.desc}</p>
                                                    <button className="lcc-download-btn">
                                                        <i className="bi bi-download" /> Download Convention Text
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ── Rules & Orders ── */}
                            {activeTab === "rules" && (
                                <div className="leg-rules-panel">
                                    <h3 className="leg-panel-heading">Rules & Orders</h3>
                                    <p className="leg-panel-sub">
                                        Subordinate legislation — rules, amendments and orders framed under the NDPS Act.
                                    </p>
                                    <div className="leg-rules-list">
                                        {rulesOrders.map((rule, i) => (
                                            <div key={i} className="leg-rule-item">
                                                <div className="lri-icon">
                                                    <i className="bi bi-file-earmark-ruled" />
                                                </div>
                                                <div className="lri-info">
                                                    <h4 className="lri-title">{rule.title}</h4>
                                                    <p className="lri-desc">{rule.desc}</p>
                                                </div>
                                                <div className="lri-meta">
                                                    <span className="lri-size">
                                                        <i className="bi bi-file-earmark" /> {rule.size}
                                                    </span>
                                                    <button className="lri-download-btn" aria-label={`Download ${rule.title}`}>
                                                        <i className="bi bi-download" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom highlight */}
                    <div className="leg-bottom-highlight">
                        <i className="bi bi-journal-bookmark-fill" />
                        <div>
                            <h3>Need the Latest Gazette Notification?</h3>
                            <p>
                                All amendments to NDPS Act and subordinate rules are officially notified in the Official
                                Gazette. Access authenticated copies at the Ministry of Law &amp; Justice portal.
                            </p>
                        </div>
                        <a
                            href="https://legislative.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="leg-portal-btn"
                        >
                            Legislative Dept. Portal <i className="bi bi-arrow-up-right-square" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Legislations;
