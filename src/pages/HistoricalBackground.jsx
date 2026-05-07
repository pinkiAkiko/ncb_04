import PageBanner from "../components/PageBanner";
import ncbHistoryImg from "../assets/ncb_history_thematic_1772780290946.png";
import "./HistoricalBackground.scss";

const timelineMilestones = [
    { year: "1985", title: "NDPS Act Enacted", desc: "The Narcotic Drugs and Psychotropic Substances Act, 1985 was enacted by Parliament, forming the legislative backbone for drug law enforcement in India." },
    { year: "1986", badge: "Mar 17", title: "NCB Officially Constituted", desc: "The Narcotics Control Bureau was officially constituted on 17th March 1986 under the Ministry of Home Affairs, Government of India." },
    { year: "1988", title: "Vienna Convention Ratified", desc: "India ratified the Vienna Convention against Illicit Traffic in Narcotic Drugs and Psychotropic Substances, strengthening international cooperation." },
    { year: "1990", title: "First Regional Offices", desc: "The first regional offices were established across India, extending NCB's operational reach to combat drug trafficking at the state level." },
    { year: "1995", title: "Narcotics Control Division", desc: "The Narcotics Control Division was significantly strengthened with enhanced manpower and resources to tackle the growing challenge of drug trafficking." },
    { year: "2001", title: "NIDAAN Portal Launched", desc: "Launch of the NIDAAN (National Integrated Database on Arrested Narco-Offenders) portal for systematic tracking and management of drug offenders across India." },
    { year: "2008", title: "NDPS Amendment Act", desc: "The NDPS (Amendment) Act significantly strengthened penalties for drug trafficking offences and introduced new provisions to combat organised narcotics crime." },
    { year: "2014", title: "Zonal Restructuring", desc: "NCB was restructured into Zonal and Sub-Zonal units to improve operational efficiency, intelligence gathering, and regional drug law enforcement coordination." },
    { year: "2019", title: "NAPDDR Launched", desc: "The National Action Plan for Drug Demand Reduction (NAPDDR) was launched, providing a comprehensive framework for prevention, treatment, and rehabilitation." },
    { year: "2023", title: "Expanded Policy Mandate", desc: "NCB's mandate was expanded under a new drug policy framework, incorporating modern approaches to enforcement, intelligence-led operations, and international coordination." },
];

const keyFacts = [
    { icon: "bi-calendar3",       label: "Established", value: "1986" },
    { icon: "bi-building",        label: "Ministry",    value: "Home Affairs" },
    { icon: "bi-clock-history",   label: "Service",     value: "40+ Years" },
    { icon: "bi-geo-alt-fill",    label: "NCB Zones",   value: "8 Zones" },
];

function HistoricalBackground() {
    return (
        <div className="history-page">
            <PageBanner
                title="Origin & Evolution"
                subtitle="NCB's journey from establishment in 1986 to a modern drug law enforcement agency"
                breadcrumbs={[
                    { label: "About", path: "/about" },
                    { label: "Origin & Evolution", path: "/historical-background" },
                ]}
            />

            <div className="page-section">
                <div className="container">

                    {/* Intro Grid */}
                    <div className="history-intro-grid">
                        <div className="history-intro-img">
                            <div className="history-img-frame">
                                <img src={ncbHistoryImg} alt="NCB Historical Background" />
                            </div>
                        </div>
                        <div className="history-intro-text">
                            <span className="section-label">Our Foundation</span>
                            <h2 className="section-title">Established 1986</h2>
                            <div className="section-divider" />
                            <p>
                                The <strong>Narcotics Control Bureau (NCB)</strong> was established on 17th March 1986
                                under the Ministry of Home Affairs, Government of India, pursuant to the provisions of
                                the Narcotic Drugs and Psychotropic Substances (NDPS) Act, 1985.
                            </p>
                            <p>
                                Created as India's apex coordinating agency for drug law enforcement, NCB was empowered
                                to exercise the powers and functions conferred by the NDPS Act, the Customs Act, the
                                Drugs and Cosmetics Act, and other relevant legislation.
                            </p>
                            <p>
                                Over four decades, NCB has evolved into a sophisticated enforcement agency with
                                intelligence-led operations, international partnerships, and a mandate that extends
                                from interdiction and investigation to demand reduction and rehabilitation support.
                            </p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <section className="history-timeline-section">
                        <div className="section-header-row center">
                            <span className="section-label">Milestones</span>
                            <h2 className="section-title">A Journey Through Time</h2>
                            <div className="section-divider section-divider--center" />
                        </div>

                        <div className="history-timeline">
                            {timelineMilestones.map((item, i) => (
                                <div key={i} className={`timeline-item ${i % 2 === 0 ? "timeline-item--left" : "timeline-item--right"}`}>
                                    <div className="timeline-connector">
                                        <div className="timeline-dot" />
                                    </div>
                                    <div className="timeline-card">
                                        <div className="timeline-year-badge">
                                            {item.badge ? (
                                                <><span className="tyb-sub">{item.badge}</span><span>{item.year}</span></>
                                            ) : (
                                                <span>{item.year}</span>
                                            )}
                                        </div>
                                        <h4 className="timeline-title">{item.title}</h4>
                                        <p className="timeline-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key Facts Strip */}
                    <div className="history-facts-strip">
                        {keyFacts.map((fact, i) => (
                            <div key={i} className="hfs-item">
                                <div className="hfs-icon"><i className={`bi ${fact.icon}`} /></div>
                                <div className="hfs-value">{fact.value}</div>
                                <div className="hfs-label">{fact.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HistoricalBackground;
