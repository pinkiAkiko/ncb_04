import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import "./Partners.scss";

const nationalPartners = [
    { name: "Ministry of Home Affairs",                    abbr: "MHA",   icon: "bi-building-fill",         desc: "Nodal ministry overseeing NCB's functioning and policy directions." },
    { name: "Ministry of Finance — Dept. of Revenue",     abbr: "MoF",   icon: "bi-bank2",                 desc: "Coordinates on financial intelligence and narcotics-related revenue matters." },
    { name: "Central Bureau of Investigation",            abbr: "CBI",   icon: "bi-shield-fill-check",     desc: "Joint operations on drug trafficking cases with organised crime links." },
    { name: "Enforcement Directorate",                    abbr: "ED",    icon: "bi-cash-coin",             desc: "Pursues PMLA cases arising from drug trafficking proceeds and assets." },
    { name: "Intelligence Bureau",                        abbr: "IB",    icon: "bi-eye-fill",              desc: "Shares domestic intelligence on narcotics networks and threat assessments." },
    { name: "Central Board of Indirect Taxes & Customs",  abbr: "CBIC",  icon: "bi-boxes",                 desc: "Coordinates at ports and airports to intercept drug consignments." },
    { name: "Border Security Force",                      abbr: "BSF",   icon: "bi-shield-shaded",         desc: "Patrols international borders to prevent cross-border drug trafficking." },
    { name: "All State Police Forces",                    abbr: "SPF",   icon: "bi-person-badge-fill",     desc: "State agencies execute NDPS Act provisions in coordination with NCB Zones." },
    { name: "AIIMS — Addiction Treatment",                abbr: "AIIMS", icon: "bi-hospital-fill",         desc: "Partners on treatment protocols, research, and rehabilitation services." },
    { name: "Bureau of Police Research & Development",    abbr: "BPR&D", icon: "bi-graph-up",              desc: "Training, research, and capacity development for drug law enforcement." },
];

const internationalPartners = [
    { name: "UN Office on Drugs and Crime",               abbr: "UNODC",       icon: "bi-globe2",              desc: "UN body coordinating global drug control policy, data, and capacity building." },
    { name: "Interpol — Drug Control Programme",          abbr: "Interpol",    icon: "bi-globe-americas",      desc: "Facilitates global law enforcement cooperation on transnational drug cases." },
    { name: "Drug Enforcement Administration (USA)",      abbr: "DEA",         icon: "bi-shield-fill",         desc: "Bilateral cooperation on narcotics enforcement, intelligence exchange, and training." },
    { name: "National Crime Agency (UK)",                 abbr: "NCA",         icon: "bi-flag-fill",           desc: "Joint operations targeting drug supply chains between India and the UK." },
    { name: "Australian Federal Police",                  abbr: "AFP",         icon: "bi-geo-fill",            desc: "Cooperation on detection of drug trafficking routes to the Asia-Pacific region." },
    { name: "Bundeskriminalamt (Germany)",                abbr: "BKA",         icon: "bi-building",            desc: "Collaboration with Germany's Federal Criminal Police Office on narcotics cases." },
    { name: "HONLEA — Asia-Pacific",                     abbr: "HONLEA",      icon: "bi-diagram-3-fill",      desc: "Heads of National Drug Law Enforcement Agencies, regional cooperation forum." },
    { name: "Paris Pact Initiative",                      abbr: "Paris Pact",  icon: "bi-hand-thumbs-up-fill", desc: "Multilateral framework to address Afghan heroin and opiates trafficking globally." },
    { name: "SAARC Drug Offences Monitoring Desk",        abbr: "SDOMD",       icon: "bi-map-fill",            desc: "Regional SAARC body for monitoring and sharing drug-related intelligence." },
    { name: "BIMSTEC",                                    abbr: "BIMSTEC",     icon: "bi-arrows-expand",       desc: "Bay of Bengal Initiative for drug control cooperation among member nations." },
];

function Partners() {
    return (
        <div className="partners-page">
            <PageBanner
                title="Our Partners"
                subtitle="National and international agencies that partner with NCB to combat drug trafficking"
                breadcrumbs={[
                    { label: "About", path: "/about" },
                    { label: "Our Partners", path: "/partners" },
                ]}
            />

            <div className="page-section">
                <div className="container">

                    {/* National Partners */}
                    <section className="partners-section">
                        <div className="partners-section-header">
                            <div className="psh-badge psh-badge--national">
                                <i className="bi bi-flag-fill" /> National
                            </div>
                            <span className="section-label">Domestic Coordination</span>
                            <h2 className="section-title">National Partners</h2>
                            <div className="section-divider" />
                            <p className="partners-intro-text">
                                NCB works in close coordination with these central government agencies and
                                state police forces to enforce the NDPS Act and combat drug trafficking across India.
                            </p>
                        </div>

                        <div className="partners-grid">
                            {nationalPartners.map((p, i) => (
                                <div key={i} className="partner-card partner-card--national">
                                    <div className="pc-icon-wrap">
                                        <i className={`bi ${p.icon}`} />
                                    </div>
                                    <div className="pc-body">
                                        <div className="pc-abbr">{p.abbr}</div>
                                        <h4 className="pc-name">{p.name}</h4>
                                        <p className="pc-desc">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section Divider */}
                    <div className="partners-separator">
                        <div className="ps-line" />
                        <div className="ps-label">
                            <i className="bi bi-globe-americas" /> International Cooperation
                        </div>
                        <div className="ps-line" />
                    </div>

                    {/* International Partners */}
                    <section className="partners-section">
                        <div className="partners-section-header">
                            <div className="psh-badge psh-badge--intl">
                                <i className="bi bi-globe2" /> International
                            </div>
                            <span className="section-label">Global Cooperation</span>
                            <h2 className="section-title">International Partners</h2>
                            <div className="section-divider" />
                            <p className="partners-intro-text">
                                NCB maintains active cooperation with international drug enforcement agencies,
                                UN bodies, and multilateral forums to address transnational narcotics trafficking.
                            </p>
                        </div>

                        <div className="partners-grid">
                            {internationalPartners.map((p, i) => (
                                <div key={i} className="partner-card partner-card--intl">
                                    <div className="pc-icon-wrap pc-icon-wrap--intl">
                                        <i className={`bi ${p.icon}`} />
                                    </div>
                                    <div className="pc-body">
                                        <div className="pc-abbr">{p.abbr}</div>
                                        <h4 className="pc-name">{p.name}</h4>
                                        <p className="pc-desc">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* MoU Highlight */}
                    <div className="partners-mou-highlight">
                        <div className="pmh-icon">
                            <i className="bi bi-file-earmark-text-fill" />
                        </div>
                        <div className="pmh-content">
                            <h3>Memoranda of Understanding</h3>
                            <p>
                                NCB has signed bilateral <strong>Memoranda of Understanding (MoUs)</strong> and
                                agreements with <strong>40+ countries</strong> for cooperation in drug law
                                enforcement, intelligence exchange, and mutual legal assistance.
                            </p>
                        </div>
                        <Link to="/mou" className="pmh-btn">
                            View All MoUs <i className="bi bi-arrow-right" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Partners;
