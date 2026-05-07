import { useState, useMemo } from "react";
import PageBanner from "../components/PageBanner";
import "./RehabCentres.scss";

const centres = [
    { name: "NIMHANS Drug De-addiction Centre", city: "Bengaluru", state: "Karnataka", type: "Government", beds: 45, contact: "080-46110007", free: true },
    { name: "AIIMS Addiction Psychiatry OPD", city: "New Delhi", state: "Delhi", type: "Government", beds: 60, contact: "011-26588500", free: true },
    { name: "PGIMER Drug Dependence Treatment Centre", city: "Chandigarh", state: "Chandigarh", type: "Government", beds: 30, contact: "0172-2756565", free: true },
    { name: "Vandrevala Foundation", city: "Mumbai", state: "Maharashtra", type: "NGO", beds: 0, contact: "1860-2662-345", free: false, helpline: true },
    { name: "TTK Hospital Drug De-addiction Centre", city: "Chennai", state: "Tamil Nadu", type: "Private", beds: 85, contact: "044-24346151", free: false },
    { name: "Navjeevan Drug De-addiction Centre", city: "Amritsar", state: "Punjab", type: "NGO", beds: 40, contact: "0183-2562891", free: true },
    { name: "SPYM Drug De-addiction Centre", city: "New Delhi", state: "Delhi", type: "NGO", beds: 25, contact: "011-26151485", free: true },
    { name: "GMCH Psychiatric Centre DDC", city: "Guwahati", state: "Assam", type: "Government", beds: 20, contact: "0361-2529457", free: true },
    { name: "Institute of Mental Health", city: "Hyderabad", state: "Telangana", type: "Government", beds: 35, contact: "040-23261011", free: true },
    { name: "SMHS Hospital DDC", city: "Srinagar", state: "J&K", type: "Government", beds: 20, contact: "0194-2452760", free: true },
    { name: "SCB Medical DDC", city: "Cuttack", state: "Odisha", type: "Government", beds: 15, contact: "0671-2304283", free: true },
    { name: "RKDF Medical College DDC", city: "Bhopal", state: "Madhya Pradesh", type: "Private", beds: 50, contact: "0755-4052000", free: false },
    { name: "RGGH Drug De-addiction Unit", city: "Kolkata", state: "West Bengal", type: "Government", beds: 25, contact: "033-22550031", free: true },
    { name: "Muktidwar Foundation", city: "Jaipur", state: "Rajasthan", type: "NGO", beds: 30, contact: "0141-2743234", free: false },
    { name: "KGMU Drug De-addiction Centre", city: "Lucknow", state: "Uttar Pradesh", type: "Government", beds: 40, contact: "0522-2258880", free: true },
];

const allStates = ["All States", ...Array.from(new Set(centres.map(c => c.state))).sort()];
const allTypes = ["All Types", "Government", "NGO", "Private"];

const typeColors = { Government: "blue", NGO: "green", Private: "orange" };

function RehabCentres() {
    const [stateFilter, setStateFilter] = useState("All States");
    const [typeFilter, setTypeFilter] = useState("All Types");
    const [freeOnly, setFreeOnly] = useState(false);
    const [viewMode, setViewMode] = useState("card"); // card | table

    const filtered = useMemo(() => centres.filter(c => {
        if (stateFilter !== "All States" && c.state !== stateFilter) return false;
        if (typeFilter !== "All Types" && c.type !== typeFilter) return false;
        if (freeOnly && !c.free) return false;
        return true;
    }), [stateFilter, typeFilter, freeOnly]);

    return (
        <div className="rehab-page">
            <PageBanner
                title="Drug Rehabilitation Centres"
                subtitle="NCB's directory of de-addiction and rehabilitation centres across India"
                breadcrumbs={[
                    { label: "Navigation", path: "/navigation" },
                    { label: "Rehab Centres", path: "/rehabilitation-centres" },
                ]}
            />

            {/* ── Stats Strip ── */}
            <div className="rc-stat-strip">
                <div className="container">
                    <div className="rc-stats-row">
                        {[
                            { num: "700+", label: "Registered Centres" },
                            { num: "28", label: "States Covered" },
                            { num: "DARPAN", label: "Portal Linked" },
                            { num: "Free", label: "Treatment Available" },
                        ].map((s, i) => (
                            <div key={i} className="rc-stat-item">
                                <span className="rc-stat-num">{s.num}</span>
                                <span className="rc-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">

                    {/* ── Intro ── */}
                    <div className="rc-intro">
                        <i className="bi bi-info-circle-fill" />
                        <p>NCB maintains a directory of drug de-addiction and rehabilitation centres across India as part of its demand reduction mandate under the <strong>National Action Plan for Drug Demand Reduction (NAPDDR)</strong>. This is a partial directory. For a comprehensive list, visit the DARPAN portal.</p>
                    </div>

                    {/* ── Filters + View Toggle ── */}
                    <div className="rc-filter-bar">
                        <div className="rc-filters">
                            <div className="rc-filter-field">
                                <label>State / UT</label>
                                <select value={stateFilter} onChange={e => setStateFilter(e.target.value)}>
                                    {allStates.map(s => <option key={s}>{s}</option>)}
                                </select>
                            </div>
                            <div className="rc-filter-field">
                                <label>Centre Type</label>
                                <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
                                    {allTypes.map(t => <option key={t}>{t}</option>)}
                                </select>
                            </div>
                            <div className="rc-filter-toggle">
                                <button
                                    className={`rc-toggle-btn${freeOnly ? " rc-toggle-btn--active" : ""}`}
                                    onClick={() => setFreeOnly(v => !v)}
                                >
                                    <i className={`bi ${freeOnly ? "bi-toggle-on" : "bi-toggle-off"}`} />
                                    Free Treatment Only
                                </button>
                            </div>
                        </div>
                        <div className="rc-view-toggle">
                            <button className={`rc-view-btn${viewMode === "card" ? " active" : ""}`} onClick={() => setViewMode("card")} title="Card view"><i className="bi bi-grid-3x3-gap-fill" /></button>
                            <button className={`rc-view-btn${viewMode === "table" ? " active" : ""}`} onClick={() => setViewMode("table")} title="Table view"><i className="bi bi-table" /></button>
                        </div>
                    </div>

                    <p className="rc-count"><strong>{filtered.length}</strong> centre{filtered.length !== 1 ? "s" : ""} found</p>

                    {/* ── Card View ── */}
                    {viewMode === "card" && (
                        <div className="rc-card-grid">
                            {filtered.map((c, i) => (
                                <div key={i} className={`rc-centre-card rc-centre-card--${typeColors[c.type]}`}>
                                    <div className="rc-card-header">
                                        <span className={`rc-type-badge rc-type-badge--${typeColors[c.type]}`}>{c.type}</span>
                                        {c.free && <span className="rc-free-badge"><i className="bi bi-check-circle-fill" /> Free</span>}
                                        {c.helpline && <span className="rc-helpline-badge"><i className="bi bi-headset" /> Helpline</span>}
                                    </div>
                                    <h3 className="rc-card-name">{c.name}</h3>
                                    <p className="rc-card-location"><i className="bi bi-geo-alt-fill" /> {c.city}, {c.state}</p>
                                    <div className="rc-card-info">
                                        {c.beds > 0 && <span><i className="bi bi-hospital" /> {c.beds} beds</span>}
                                        <a href={`tel:${c.contact.replace(/-/g, "")}`} className="rc-card-contact"><i className="bi bi-telephone-fill" /> {c.contact}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ── Table View ── */}
                    {viewMode === "table" && (
                        <div className="rc-table-wrap">
                            <table className="rc-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Centre Name</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Type</th>
                                        <th>Beds</th>
                                        <th>Contact</th>
                                        <th>Free</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.map((c, i) => (
                                        <tr key={i}>
                                            <td className="rc-td-num">{i + 1}</td>
                                            <td className="rc-td-name">{c.name}</td>
                                            <td>{c.city}</td>
                                            <td>{c.state}</td>
                                            <td><span className={`rc-type-badge rc-type-badge--${typeColors[c.type]}`}>{c.type}</span></td>
                                            <td>{c.beds > 0 ? c.beds : c.helpline ? "Helpline" : "—"}</td>
                                            <td><a href={`tel:${c.contact.replace(/-/g, "")}`} className="rc-table-link">{c.contact}</a></td>
                                            <td className="rc-td-free">{c.free ? <i className="bi bi-check-circle-fill rc-icon-yes" /> : <i className="bi bi-dash-circle rc-icon-no" />}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {filtered.length === 0 && (
                        <div className="rc-no-results">
                            <i className="bi bi-search" />
                            <p>No centres found matching your filters. Try adjusting the filters above.</p>
                        </div>
                    )}

                    {/* ── DARPAN Link + Helpline ── */}
                    <div className="rc-bottom-row">
                        <a href="https://darpan.gov.in" target="_blank" rel="noopener noreferrer" className="rc-darpan-card">
                            <i className="bi bi-globe2" />
                            <div>
                                <strong>DARPAN Portal — Full Directory</strong>
                                <span>Access the complete NCO/NGO and rehabilitation centre database on DARPAN</span>
                            </div>
                            <i className="bi bi-arrow-up-right-square" />
                        </a>
                        <div className="rc-helpline-card">
                            <i className="bi bi-telephone-fill" />
                            <div>
                                <strong>Drug Helpline 1933</strong>
                                <span>24×7 Free | Guidance on nearest treatment centre</span>
                            </div>
                            <a href="tel:1933" className="rc-helpline-btn">Call 1933</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RehabCentres;
