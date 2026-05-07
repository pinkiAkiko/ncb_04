import PageBanner from "../components/PageBanner";
import "./Organization.scss";

const zones = [
    { zone: "North Zone",       hq: "New Delhi",  icon: "bi-geo-alt-fill",  states: "Delhi, UP, Uttarakhand, HP, J&K" },
    { zone: "South Zone",       hq: "Chennai",    icon: "bi-geo-alt-fill",  states: "Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Puducherry" },
    { zone: "East Zone",        hq: "Kolkata",    icon: "bi-geo-alt-fill",  states: "West Bengal, Odisha, Bihar, Jharkhand" },
    { zone: "West Zone",        hq: "Mumbai",     icon: "bi-geo-alt-fill",  states: "Maharashtra, Goa, Gujarat, Dadra & NH" },
    { zone: "North-West Zone",  hq: "Chandigarh", icon: "bi-geo-alt-fill",  states: "Punjab, Haryana, Rajasthan" },
    { zone: "North-East Zone",  hq: "Guwahati",   icon: "bi-geo-alt-fill",  states: "Assam, Nagaland, Manipur, Mizoram, Tripura, Meghalaya, Arunachal Pradesh, Sikkim" },
    { zone: "Central Zone",     hq: "Lucknow",    icon: "bi-geo-alt-fill",  states: "Uttar Pradesh (Eastern), Madhya Pradesh, Chhattisgarh" },
    { zone: "South-West Zone",  hq: "Bengaluru",  icon: "bi-geo-alt-fill",  states: "Karnataka, Lakshadweep" },
];

const stats = [
    { icon: "bi-people-fill",       value: "~1,500", label: "Sanctioned Posts" },
    { icon: "bi-award-fill",        value: "IPS/CSS", label: "Officer Cadre" },
    { icon: "bi-building",          value: "32+",    label: "Sub-Zonal Units" },
    { icon: "bi-geo-alt-fill",      value: "8",      label: "NCB Zones" },
];

function Organization() {
    return (
        <div className="org-page">
            <PageBanner
                title="Hierarchy & Structure"
                subtitle="NCB's organizational architecture — from the Director General to field-level Sub-Zonal Units"
                breadcrumbs={[
                    { label: "About", path: "/about" },
                    { label: "Hierarchy & Structure", path: "/organization" },
                ]}
            />

            <div className="page-section">
                <div className="container">

                    {/* Intro */}
                    <section className="org-intro-section">
                        <span className="section-label">Structure</span>
                        <h2 className="section-title">Organisational Framework</h2>
                        <div className="section-divider" />
                        <p className="org-intro-text">
                            The Narcotics Control Bureau is headed by a <strong>Director General (DG)</strong> of the
                            rank of Secretary to the Government of India, drawn from the Indian Police Service (IPS).
                            The Bureau operates through a three-tier structure — Headquarters, Zonal Offices, and
                            Sub-Zonal Units — enabling coordinated drug law enforcement across the country.
                        </p>
                    </section>

                    {/* Organogram */}
                    <section className="org-chart-section">
                        <div className="section-header-row center">
                            <span className="section-label">Organogram</span>
                            <h2 className="section-title">Command Structure</h2>
                            <div className="section-divider section-divider--center" />
                        </div>

                        <div className="org-chart">
                            {/* Level 1 — DG */}
                            <div className="org-level org-level--1">
                                <div className="org-node org-node--top">
                                    <div className="org-node-icon"><i className="bi bi-person-badge-fill" /></div>
                                    <div className="org-node-body">
                                        <div className="org-node-title">Director General (DG)</div>
                                        <div className="org-node-subtitle">IPS — Secretary Level</div>
                                    </div>
                                </div>
                            </div>

                            <div className="org-connector org-connector--down" />

                            {/* Level 2 — Addl. DGs */}
                            <div className="org-level org-level--2">
                                <div className="org-branch-line" />
                                <div className="org-nodes-row">
                                    {[
                                        { title: "Addl. DG (Operations)",      sub: "Operational Coordination" },
                                        { title: "Addl. DG (Administration)",  sub: "Admin & Finance" },
                                        { title: "Addl. DG (Intelligence)",    sub: "Intelligence & Analysis" },
                                    ].map((node, i) => (
                                        <div key={i} className="org-node org-node--l2">
                                            <div className="org-node-icon org-node-icon--sm"><i className="bi bi-person-fill" /></div>
                                            <div className="org-node-body">
                                                <div className="org-node-title">{node.title}</div>
                                                <div className="org-node-subtitle">{node.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="org-connector org-connector--down" />

                            {/* Level 3 — Deputy DGs */}
                            <div className="org-level org-level--3">
                                <div className="org-branch-line" />
                                <div className="org-nodes-row org-nodes-row--wrap">
                                    {[
                                        { title: "Deputy DG", sub: "HQ, New Delhi" },
                                        { title: "Deputy DG", sub: "North Zone" },
                                        { title: "Deputy DG", sub: "South Zone" },
                                        { title: "Deputy DG", sub: "East Zone" },
                                        { title: "Deputy DG", sub: "West Zone" },
                                        { title: "Deputy DG", sub: "NW Zone" },
                                        { title: "Deputy DG", sub: "NE Zone" },
                                        { title: "Deputy DG", sub: "Central Zone" },
                                        { title: "Deputy DG", sub: "SW Zone" },
                                    ].map((node, i) => (
                                        <div key={i} className="org-node org-node--l3">
                                            <div className="org-node-icon org-node-icon--xs"><i className="bi bi-person" /></div>
                                            <div className="org-node-body">
                                                <div className="org-node-title">{node.title}</div>
                                                <div className="org-node-subtitle">{node.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Zones Grid */}
                    <section className="org-zones-section">
                        <div className="section-header-row center">
                            <span className="section-label">Field Offices</span>
                            <h2 className="section-title">NCB Zonal Network</h2>
                            <div className="section-divider section-divider--center" />
                        </div>

                        <div className="zones-grid">
                            {zones.map((zone, i) => (
                                <div key={i} className="zone-card">
                                    <div className="zone-card-header">
                                        <div className="zone-icon"><i className={`bi ${zone.icon}`} /></div>
                                        <div>
                                            <div className="zone-name">{zone.zone}</div>
                                            <div className="zone-hq">HQ: {zone.hq}</div>
                                        </div>
                                    </div>
                                    <p className="zone-states">{zone.states}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Stats Strip */}
                    <div className="org-stats-strip">
                        {stats.map((stat, i) => (
                            <div key={i} className="oss-item">
                                <div className="oss-icon"><i className={`bi ${stat.icon}`} /></div>
                                <div className="oss-value">{stat.value}</div>
                                <div className="oss-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Organization;
