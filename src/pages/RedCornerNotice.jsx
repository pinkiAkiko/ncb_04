import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./RedCornerNotice.scss";
import c1 from "../assets/criminal/c1.png";
import c2 from "../assets/criminal/c2.png";
import c3 from "../assets/criminal/c3.png";

const fugitives = [
    {
        id: "NCB/FUG/2026/001",
        photo: c1,
        name: "Rahul Sharma",
        aliases: ["Python", "Raju Boss"],
        age: 38,
        height: "5'10\"",
        build: "Medium",
        eyes: "Brown",
        hair: "Black",
        nationality: "Indian",
        languages: "Hindi, Marathi, English",
        crimes: ["Drug Trafficking", "Heroin Smuggling", "Organised Crime"],
        knownLocations: "Mumbai (Maharashtra), Dubai (UAE), Bangkok (Thailand)",
        reward: "₹ 10,00,000",
        status: "HIGH ALERT",
        statusCode: "high-alert",
        issuedBy: "NCB West Zone",
        issuedOn: "12 Jan 2026",
        caution: "Considered armed and dangerous. Do not approach.",
        details: "Sharma is believed to be the kingpin of a transnational heroin smuggling syndicate operating from South Asia. He has prior convictions under NDPS Act and is suspected of managing an international network spanning India, UAE, and Southeast Asia.",
    },
    {
        id: "NCB/FUG/2026/002",
        photo: c2,
        name: "Zoya Ibrahim",
        aliases: ["Sara", "Jasmine"],
        age: 31,
        height: "5'4\"",
        build: "Slim",
        eyes: "Brown",
        hair: "Black",
        nationality: "Indian",
        languages: "Hindi, Urdu",
        crimes: ["Narcotics Manufacturing", "NDPS Act Violation", "Money Laundering"],
        knownLocations: "Indore (M.P.), Ratlam, Bhopal",
        reward: "₹ 5,00,000",
        status: "WANTED",
        statusCode: "wanted",
        issuedBy: "NCB Central Zone",
        issuedOn: "08 Feb 2026",
        caution: "Approach with caution.",
        details: "Ibrahim is alleged to have operated a clandestine narcotics manufacturing unit producing synthetic drugs for local distribution networks across Madhya Pradesh. She is believed to be in hiding and may be travelling under a false identity.",
    },
    {
        id: "NCB/FUG/2026/003",
        photo: c3,
        name: "Vikram Singh",
        aliases: ["Ghost", "VK"],
        age: 44,
        height: "6'0\"",
        build: "Heavy",
        eyes: "Dark Brown",
        hair: "Black, greying",
        nationality: "Indian",
        languages: "Punjabi, Hindi, English",
        crimes: ["Border Smuggling", "Opium Trafficking", "Criminal Conspiracy"],
        knownLocations: "Amritsar (Punjab), Pathankot, Chandigarh; suspected cross-border movement",
        reward: "₹ 7,50,000",
        status: "FUGITIVE",
        statusCode: "fugitive",
        issuedBy: "NCB North Zone",
        issuedOn: "25 Feb 2026",
        caution: "Known to use multiple false identities and forged documents.",
        details: "Singh is a key accused in a large-scale opium smuggling operation along the India-Pakistan border in Punjab. He was granted bail in 2024 and subsequently absconded. He is suspected of maintaining contacts with cross-border narcotics networks.",
    },
];

function RedCornerNotice() {
    const [activeId, setActiveId] = useState(null);
    const [filter, setFilter] = useState("all");

    const filtered = filter === "all"
        ? fugitives
        : fugitives.filter(f => f.statusCode === filter);

    return (
        <div className="mwf-page">
            <PageBanner
                title="Most Wanted Fugitives"
                subtitle="Persons wanted by NCB for drug trafficking and narcotics offences"
                breadcrumbs={[{ label: "About", path: "/about" }, { label: "Most Wanted", path: "/red-corner-notice" }]}
            />

            <div className="page-section">
                <div className="container">

                    {/* ── Tip Banner ───────────────────────────── */}
                    <div className="mwf-tip-banner">
                        <div className="mwf-tip-left">
                            <i className="bi bi-shield-exclamation" />
                            <div>
                                <strong>Do you have information?</strong>
                                <p>If you have any information about any of these individuals, contact NCB immediately. All tips are confidential and anonymous.</p>
                            </div>
                        </div>
                        <div className="mwf-tip-actions">
                            <a href="tel:1933" className="mwf-tip-call">
                                <i className="bi bi-telephone-fill" /> Call 1933
                            </a>
                            <a href="https://ncbmanas.gov.in" target="_blank" rel="noopener noreferrer" className="mwf-tip-online">
                                <i className="bi bi-megaphone-fill" /> Submit Tip Online
                            </a>
                        </div>
                    </div>

                    {/* ── Filters ──────────────────────────────── */}
                    <div className="mwf-filter-row">
                        <span className="mwf-filter-label"><i className="bi bi-funnel" /> Filter:</span>
                        {["all", "high-alert", "wanted", "fugitive"].map(f => (
                            <button
                                key={f}
                                className={`mwf-filter-btn ${filter === f ? "active" : ""} flt--${f}`}
                                onClick={() => setFilter(f)}
                            >
                                {f === "all" ? "All" : f.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                            </button>
                        ))}
                        <span className="mwf-count">{filtered.length} record{filtered.length !== 1 ? "s" : ""}</span>
                    </div>

                    {/* ── Fugitive Cards — DEA style horizontal ── */}
                    <div className="mwf-list">
                        {filtered.map(person => {
                            const isOpen = activeId === person.id;
                            return (
                                <div key={person.id} className={`mwf-card mwf--${person.statusCode} ${isOpen ? "expanded" : ""}`}>
                                    {/* Top accent bar */}
                                    <div className="mwf-card-bar" />

                                    <div className="mwf-card-main">
                                        {/* Photo column */}
                                        <div className="mwf-photo-col">
                                            <div className="mwf-wanted-stamp">
                                                <span>{person.status}</span>
                                            </div>
                                            <div className="mwf-photo-wrap">
                                                <img src={person.photo} alt={person.name} />
                                            </div>

                                        </div>

                                        {/* Info column */}
                                        <div className="mwf-info-col">
                                            <div className="mwf-info-head">
                                                <div>
                                                    <h2 className="mwf-name">{person.name}</h2>
                                                    <p className="mwf-aliases">
                                                        <i className="bi bi-person-badge" />
                                                        AKA: {person.aliases.join(", ")}
                                                    </p>
                                                </div>
                                                <span className="mwf-case-id">{person.id}</span>
                                            </div>

                                            <div className="mwf-crimes-row">
                                                {person.crimes.map(c => (
                                                    <span key={c} className="mwf-crime-tag">{c}</span>
                                                ))}
                                            </div>

                                            <div className="mwf-physical-grid">
                                                <div className="mwf-phy-item"><span className="phy-l">Nationality</span><span className="phy-v">{person.nationality}</span></div>
                                                <div className="mwf-phy-item"><span className="phy-l">Age</span><span className="phy-v">{person.age} years</span></div>
                                                <div className="mwf-phy-item"><span className="phy-l">Height</span><span className="phy-v">{person.height}</span></div>
                                                <div className="mwf-phy-item"><span className="phy-l">Build</span><span className="phy-v">{person.build}</span></div>
                                                <div className="mwf-phy-item"><span className="phy-l">Eyes</span><span className="phy-v">{person.eyes}</span></div>
                                                <div className="mwf-phy-item"><span className="phy-l">Languages</span><span className="phy-v">{person.languages}</span></div>
                                            </div>

                                            <div className="mwf-location-row">
                                                <i className="bi bi-geo-alt-fill" />
                                                <span><strong>Last Known:</strong> {person.knownLocations}</span>
                                            </div>

                                            {person.caution && (
                                                <div className="mwf-caution-tag">
                                                    <i className="bi bi-exclamation-triangle-fill" /> {person.caution}
                                                </div>
                                            )}

                                            <div className="mwf-card-footer">
                                                <span className="mwf-issued-info">
                                                    <i className="bi bi-building" /> {person.issuedBy} &nbsp;|&nbsp;
                                                    <i className="bi bi-calendar3" /> Issued: {person.issuedOn}
                                                </span>
                                                <button
                                                    className="mwf-expand-btn"
                                                    onClick={() => setActiveId(isOpen ? null : person.id)}
                                                >
                                                    {isOpen ? "Hide Details" : "Full Details"}
                                                    <i className={`bi bi-chevron-${isOpen ? "up" : "down"}`} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded panel */}
                                    {isOpen && (
                                        <div className="mwf-expanded-panel">
                                            <div className="mwf-exp-grid">
                                                <div className="mwf-exp-section">
                                                    <h4 className="mwf-exp-heading">Background</h4>
                                                    <p className="mwf-exp-body">{person.details}</p>
                                                </div>
                                                <div className="mwf-exp-section">
                                                    <h4 className="mwf-exp-heading">Submit Information</h4>
                                                    <p className="mwf-exp-body">If you have seen this person or have any information relating to their whereabouts, please contact NCB immediately through any of the following:</p>
                                                    <div className="mwf-contact-options">
                                                        <a href="tel:1933" className="mwf-contact-opt">
                                                            <i className="bi bi-telephone-fill" />
                                                            <span>MANAS Helpline<br /><strong>1933</strong></span>
                                                        </a>
                                                        <a href="https://ncbmanas.gov.in" target="_blank" rel="noopener noreferrer" className="mwf-contact-opt">
                                                            <i className="bi bi-globe2" />
                                                            <span>Online Portal<br /><strong>MANAS</strong></span>
                                                        </a>
                                                        <a href="/contact" className="mwf-contact-opt">
                                                            <i className="bi bi-building" />
                                                            <span>Nearest NCB<br /><strong>Office</strong></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* ── INTERPOL Note ─────────────────────────── */}
                    <div className="mwf-interpol-note">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Interpol_logo.svg/120px-Interpol_logo.svg.png" alt="Interpol" />
                        <div>
                            <strong>INTERPOL Red Notices:</strong> NCB coordinates with INTERPOL for issuance of Red Notices against international drug traffickers. Red Notices are requested by NCB for persons wanted for serious drug trafficking offences across international borders. These notices alert law enforcement agencies globally.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RedCornerNotice;
