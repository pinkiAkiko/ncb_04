import PageBanner from "../components/PageBanner";
import mottoImg from "../assets/motto_v2.png";
import "./MissionVision.scss";

const coreValues = [
    { icon: "bi-award-fill",         title: "Integrity",       desc: "Upholding the highest ethical standards in every operation and decision." },
    { icon: "bi-briefcase-fill",     title: "Professionalism", desc: "Delivering expert, disciplined service with unwavering focus on the mandate." },
    { icon: "bi-patch-check-fill",   title: "Commitment",      desc: "Dedicated to the mission of a drug-free India with resolute determination." },
    { icon: "bi-eye-fill",           title: "Transparency",    desc: "Open, accountable functioning that builds public trust and institutional credibility." },
    { icon: "bi-shield-fill-check",  title: "Accountability",  desc: "Responsibility for outcomes — to citizens, to the law, and to the institution." },
];

const objectives = [
    { icon: "bi-shield-shaded",          title: "Enforcement Excellence",    desc: "Conducting high-quality, intelligence-led enforcement operations to disrupt and dismantle drug trafficking networks." },
    { icon: "bi-binoculars-fill",        title: "Intelligence-Led Ops",      desc: "Building robust intelligence capabilities through NIDAAN, NATGRID, and inter-agency information sharing protocols." },
    { icon: "bi-globe-americas",         title: "International Cooperation", desc: "Strengthening bilateral and multilateral drug control partnerships with UNODC, Interpol, DEA, and partner nations." },
    { icon: "bi-people-fill",            title: "Demand Reduction",          desc: "Driving community awareness, school outreach, and media campaigns to reduce demand for narcotic substances." },
    { icon: "bi-heart-pulse-fill",       title: "Rehabilitation Support",    desc: "Facilitating access to de-addiction, treatment, and rehabilitation services for drug-dependent persons." },
    { icon: "bi-file-earmark-ruled-fill", title: "Policy Framework",         desc: "Contributing to evidence-based national drug policy, legislation, and international treaty obligations." },
];

function MissionVision() {
    return (
        <div className="mission-page">
            <PageBanner
                title="Mission, Vision & Motto"
                subtitle="The ethos, purpose, and strategic direction that guide the Narcotics Control Bureau"
                breadcrumbs={[
                    { label: "About", path: "/about" },
                    { label: "Mission, Vision & Motto", path: "/motto-mission-vision" },
                ]}
            />

            <div className="page-section">
                <div className="container">

                    {/* Hero with Motto Image */}
                    <section className="mv-hero-section">
                        <div className="mv-hero-img">
                            <img src={mottoImg} alt="NCB Motto — Sarve Santu Niramayah" />
                        </div>
                        <div className="mv-hero-text">
                            <span className="section-label">Our Guiding Ethos</span>
                            <h2 className="section-title">Motto, Mission & Vision</h2>
                            <div className="section-divider" />
                            <p>
                                The Narcotics Control Bureau is guided by a philosophy of service to the nation —
                                protecting citizens from the devastating impact of drug abuse while relentlessly
                                pursuing those who traffic in narcotics.
                            </p>
                            <p>
                                Our Sanskrit motto encapsulates the humanitarian dimension of our work: the aspiration
                                for a society free from suffering — and free from the affliction of drugs.
                            </p>
                        </div>
                    </section>

                    {/* Three Main Cards */}
                    <section className="mv-cards-section">
                        <div className="mv-cards-grid">

                            <div className="mv-card mv-card--motto">
                                <div className="mvc-icon"><i className="bi bi-quote" /></div>
                                <div className="mvc-tag">Motto</div>
                                <h3 className="mvc-title mvc-title--devanagari">सर्वे संतु निरामयः</h3>
                                <p className="mvc-translation">"May all beings be free from affliction"</p>
                                <p className="mvc-body">
                                    This ancient Vedic invocation reflects NCB's deepest aspiration — a society
                                    free from the suffering caused by narcotic drugs and substance abuse.
                                </p>
                            </div>

                            <div className="mv-card mv-card--mission">
                                <div className="mvc-icon"><i className="bi bi-bullseye" /></div>
                                <div className="mvc-tag">Mission</div>
                                <h3 className="mvc-title">Our Mission</h3>
                                <p className="mvc-body">
                                    To coordinate drug law enforcement with all central and state agencies, eliminate
                                    illicit drug trafficking, reduce demand through awareness and education, and
                                    cooperate internationally to combat the transnational menace of narcotics.
                                </p>
                            </div>

                            <div className="mv-card mv-card--vision">
                                <div className="mvc-icon"><i className="bi bi-eye-fill" /></div>
                                <div className="mvc-tag">Vision</div>
                                <h3 className="mvc-title">Our Vision</h3>
                                <p className="mvc-body">
                                    A drug-free India where citizens are protected from the harms of narcotic abuse,
                                    and the country is free from drug trafficking networks — a safer, healthier
                                    nation for every generation.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* Core Values */}
                    <section className="mv-values-section">
                        <div className="section-header-row center">
                            <span className="section-label">What We Stand For</span>
                            <h2 className="section-title">Core Values</h2>
                            <div className="section-divider section-divider--center" />
                        </div>

                        <div className="core-values-grid">
                            {coreValues.map((val, i) => (
                                <div key={i} className="cv-card">
                                    <div className="cv-icon"><i className={`bi ${val.icon}`} /></div>
                                    <h4 className="cv-title">{val.title}</h4>
                                    <p className="cv-desc">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Strategic Objectives */}
                    <section className="mv-objectives-section">
                        <div className="section-header-row center">
                            <span className="section-label">Strategic Focus</span>
                            <h2 className="section-title">Strategic Objectives</h2>
                            <div className="section-divider section-divider--center" />
                        </div>

                        <div className="objectives-grid">
                            {objectives.map((obj, i) => (
                                <div key={i} className="obj-card">
                                    <div className="obj-number">{String(i + 1).padStart(2, "0")}</div>
                                    <div className="obj-icon"><i className={`bi ${obj.icon}`} /></div>
                                    <h4 className="obj-title">{obj.title}</h4>
                                    <p className="obj-desc">{obj.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default MissionVision;
