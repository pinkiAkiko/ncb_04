import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./Seizures.scss";

const stats = [
    { icon: "bi-shield-fill-check", value: "2,847", label: "Total Seizures 2025-26" },
    { icon: "bi-box-seam-fill",     value: "42,380", label: "Drugs Seized (kg)" },
    { icon: "bi-person-fill-lock",  value: "3,621", label: "Arrests Made" },
    { icon: "bi-geo-fill",          value: "28", label: "States Covered" },
];

const seizureData = [
    { id: "SEZ-2026-NW-001", zone: "North-West Zone", state: "Punjab",        date: "2026-04-28", drug: "Heroin",                 quantity: "120 kg",            value: "₹ 600 Cr", arrested: 4, operation: "Operation Desert Storm",         status: "chargesheeted" },
    { id: "SEZ-2026-WZ-012", zone: "West Zone",       state: "Gujarat",       date: "2026-04-15", drug: "Methamphetamine",         quantity: "85 kg",             value: "₹ 340 Cr", arrested: 3, operation: "Operation Shoreline",            status: "chargesheeted" },
    { id: "SEZ-2026-SZ-008", zone: "South Zone",      state: "Tamil Nadu",    date: "2026-03-30", drug: "Cocaine",                quantity: "22 kg",             value: "₹ 220 Cr", arrested: 2, operation: "Operation Chennai Coast",         status: "trial" },
    { id: "SEZ-2026-EZ-003", zone: "East Zone",       state: "West Bengal",   date: "2026-03-20", drug: "Heroin",                 quantity: "68 kg",             value: "₹ 340 Cr", arrested: 6, operation: "Joint NCB-SSB Operation",        status: "chargesheeted" },
    { id: "SEZ-2026-CZ-019", zone: "Central Zone",    state: "Uttar Pradesh", date: "2026-03-10", drug: "Synthetic Drugs (MDMA)", quantity: "3.2 kg + 8,200 tabs", value: "₹ 25 Cr", arrested: 5, operation: "Operation Cyber Trace",          status: "chargesheeted" },
    { id: "SEZ-2026-NZ-047", zone: "North Zone",      state: "Delhi",         date: "2026-02-28", drug: "Opium",                  quantity: "45 kg",             value: "₹ 45 Cr",  arrested: 3, operation: "Operation Yamuna Patrol",        status: "trial" },
    { id: "SEZ-2026-WZ-031", zone: "West Zone",       state: "Maharashtra",   date: "2026-02-15", drug: "Heroin",                 quantity: "19 kg",             value: "₹ 95 Cr",  arrested: 2, operation: "Port Monitoring Initiative",     status: "chargesheeted" },
    { id: "SEZ-2026-NEZ-005",zone: "North-East Zone", state: "Manipur",       date: "2026-02-05", drug: "Heroin (No. 4)",         quantity: "28 kg",             value: "₹ 140 Cr", arrested: 4, operation: "Golden Triangle Intercept",      status: "chargesheeted" },
    { id: "SEZ-2026-SWZ-022",zone: "South-West Zone", state: "Karnataka",     date: "2026-01-25", drug: "Ganja",                 quantity: "820 kg",            value: "₹ 8.2 Cr", arrested: 7, operation: "Forest Route Patrol",            status: "trial" },
    { id: "SEZ-2026-NZ-088", zone: "North Zone",      state: "Rajasthan",     date: "2026-01-10", drug: "Opium/Heroin",           quantity: "67 kg",             value: "₹ 200 Cr", arrested: 3, operation: "Desert Route Intercept",         status: "chargesheeted" },
];

const allZones = ["All Zones", "North Zone", "North-West Zone", "West Zone", "South Zone", "South-West Zone", "East Zone", "North-East Zone", "Central Zone"];
const allDrugs = ["All", "Heroin", "Cocaine", "Methamphetamine", "Opium", "Synthetic", "Ganja"];

const drugColorMap = {
    "Heroin":                 "drug--heroin",
    "Heroin (No. 4)":         "drug--heroin",
    "Cocaine":                "drug--cocaine",
    "Methamphetamine":        "drug--meth",
    "Opium":                  "drug--opium",
    "Opium/Heroin":           "drug--opium",
    "Synthetic Drugs (MDMA)": "drug--synthetic",
    "Ganja":                  "drug--ganja",
};

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function Seizures() {
    const [activeZone, setActiveZone] = useState("All Zones");
    const [activeDrug, setActiveDrug] = useState("All");

    const filtered = seizureData.filter(s => {
        const matchZone = activeZone === "All Zones" || s.zone === activeZone;
        const matchDrug = activeDrug === "All" || s.drug.toLowerCase().includes(activeDrug.toLowerCase());
        return matchZone && matchDrug;
    });

    return (
        <div className="seizures-page">
            <PageBanner
                title="Important Seizures"
                subtitle="Major drug seizure operations and enforcement actions by the Narcotics Control Bureau"
                breadcrumbs={[
                    { label: "Media", path: "/media/latest-news" },
                    { label: "Important Seizures", path: "/media/seizures" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    {/* Stats Strip */}
                    <div className="seizures-stats-strip">
                        {stats.map(s => (
                            <div key={s.label} className="sstat-item">
                                <div className="sstat-icon">
                                    <i className={`bi ${s.icon}`} />
                                </div>
                                <div className="sstat-text">
                                    <span className="sstat-value">{s.value}</span>
                                    <span className="sstat-label">{s.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <span className="section-label">Enforcement Actions</span>
                    <h2 className="section-title">Major Drug Seizures 2025-26</h2>
                    <div className="section-divider" />

                    {/* Zone Filter */}
                    <div className="seizures-filter-section">
                        <div className="seizures-filter-bar">
                            <div className="filter-pills">
                                <span className="filter-label"><i className="bi bi-geo-alt-fill" /> Zone:</span>
                                {allZones.map(z => (
                                    <button
                                        key={z}
                                        className={`seizure-pill ${activeZone === z ? "active" : ""}`}
                                        onClick={() => setActiveZone(z)}
                                    >
                                        {z}
                                    </button>
                                ))}
                            </div>
                            <div className="filter-pills" style={{ marginTop: "8px" }}>
                                <span className="filter-label"><i className="bi bi-capsule-pill" /> Drug:</span>
                                {allDrugs.map(d => (
                                    <button
                                        key={d}
                                        className={`seizure-pill ${activeDrug === d ? "active" : ""}`}
                                        onClick={() => setActiveDrug(d)}
                                    >
                                        {d}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Count row */}
                    <div className="seizures-count-row">
                        <span>{filtered.length} seizure{filtered.length !== 1 ? "s" : ""} found</span>
                        <span className="seizures-note">
                            <i className="bi bi-info-circle" /> Data current as of May 2026
                        </span>
                    </div>

                    {/* Seizure Cards */}
                    {filtered.length === 0 ? (
                        <div className="seizures-empty">
                            <i className="bi bi-shield-x" />
                            <p>No seizures match the selected filters.</p>
                        </div>
                    ) : (
                        <div className="seizures-list">
                            {filtered.map(s => (
                                <div key={s.id} className="seizure-card">
                                    <div className="sc-left-accent" />
                                    <div className="sc-main">
                                        <div className="sc-top-row">
                                            <div className="sc-id-zone">
                                                <span className="sc-id">{s.id}</span>
                                                <span className="sc-zone-badge">
                                                    <i className="bi bi-geo-alt-fill" /> {s.zone}
                                                </span>
                                                <span className="sc-state">{s.state}</span>
                                            </div>
                                            <div className="sc-right-badges">
                                                <span className={`sc-status-badge status--${s.status}`}>
                                                    {s.status === "chargesheeted" ? (
                                                        <><i className="bi bi-file-earmark-check-fill" /> Chargesheeted</>
                                                    ) : (
                                                        <><i className="bi bi-hourglass-split" /> Under Trial</>
                                                    )}
                                                </span>
                                                <span className="sc-date">
                                                    <i className="bi bi-calendar3" /> {formatDate(s.date)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="sc-operation-row">
                                            <i className="bi bi-shield-fill-exclamation" />
                                            <span className="sc-operation-name">{s.operation}</span>
                                        </div>

                                        <div className="sc-details-row">
                                            <div className="sc-detail-item sc-drug">
                                                <span className="sc-detail-label">Drug Type</span>
                                                <span className={`sc-drug-tag ${drugColorMap[s.drug] || "drug--other"}`}>
                                                    {s.drug}
                                                </span>
                                            </div>
                                            <div className="sc-detail-item">
                                                <span className="sc-detail-label">Quantity Seized</span>
                                                <span className="sc-quantity">{s.quantity}</span>
                                            </div>
                                            <div className="sc-detail-item">
                                                <span className="sc-detail-label">Estimated Value</span>
                                                <span className="sc-value">{s.value}</span>
                                            </div>
                                            <div className="sc-detail-item">
                                                <span className="sc-detail-label">Arrested</span>
                                                <span className="sc-arrested">
                                                    <i className="bi bi-person-fill-lock" /> {s.arrested} person{s.arrested !== 1 ? "s" : ""}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Disclaimer note */}
                    <div className="seizures-disclaimer">
                        <i className="bi bi-info-circle-fill" />
                        <p>
                            Seizure quantities and values are approximate. All cases are subject to judicial proceedings.
                            For comprehensive data, refer to the <a href="#">Annual Drug Seizure Report 2025-26</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seizures;
