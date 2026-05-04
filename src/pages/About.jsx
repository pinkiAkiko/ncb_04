import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import "./About.scss";
import ncbHistoryImg from "../assets/ncb_history_thematic_1772780290946.png";
import mottoImg from "../assets/motto_v2.png";

function About() {
    return (
        <div className="about-page">
            <PageBanner
                title="About NCB"
                subtitle="India's apex agency for coordinating drug law enforcement"
                breadcrumbs={[{ label: "Who We Are", path: "/about" }, { label: "About NCB", path: "/about" }]}
            />

            <div className="page-section">
                <div className="container">
                    {/* About Grid */}
                    <div className="about-intro-grid">
                        <div className="about-intro-text">
                            <span className="section-label">Our Identity</span>
                            <h2 className="section-title">Narcotics Control Bureau</h2>
                            <div className="section-divider" />
                            <p>The <strong>Narcotics Control Bureau (NCB)</strong> was established on 17th March 1986 under the Ministry of Home Affairs, Government of India, under the provisions of the Narcotic Drugs and Psychotropic Substances Act (NDPS Act), 1985.</p>
                            <p>As the apex coordinating agency in India, NCB is responsible for coordinating with various ministries, departments, state governments, and international organizations to combat the menace of drug trafficking and abuse.</p>
                            <p>Rooted in <strong>Article 47</strong> of the Indian Constitution, NCB works to enforce the NDPS Act, 1985, and international conventions including the 1961 Single Convention on Narcotic Drugs, the 1971 Convention on Psychotropic Substances, and the 1988 Vienna Convention.</p>
                            <div className="about-cta-row">
                                <Link to="/historical-background" className="about-btn-primary">Historical Background</Link>
                                <Link to="/motto-mission-vision" className="about-btn-outline">Mission & Vision</Link>
                            </div>
                        </div>
                        <div className="about-intro-img">
                            <div className="about-img-frame">
                                <img src={ncbHistoryImg} alt="NCB Historical Background" />
                            </div>
                        </div>
                    </div>

                    {/* Key Functions */}
                    <section className="about-functions-section">
                        <div className="section-header-row center">
                            <span className="section-label">What We Do</span>
                            <h2 className="section-title">Key Mandates</h2>
                            <div className="section-divider section-divider--center" />
                        </div>
                        <div className="functions-grid">
                            {[
                                { icon: "bi-shield-shaded",    title: "Law Enforcement",        body: "Coordinate drug law enforcement with all Central and State agencies under the NDPS Act, 1985." },
                                { icon: "bi-binoculars-fill",  title: "Intelligence",           body: "Collect, collate and analyse intelligence pertaining to drug trafficking activities." },
                                { icon: "bi-globe-americas",   title: "International Coord.",   body: "Coordinate with UNODC, Interpol, and foreign drug enforcement agencies for joint operations." },
                                { icon: "bi-people-fill",      title: "Demand Reduction",       body: "Awareness campaigns, community outreach, and educational programs to reduce drug demand." },
                                { icon: "bi-graph-up-arrow",   title: "Data & Research",        body: "Publish drug seizure data, annual reports, and coordinate narcotic drug surveys across India." },
                                { icon: "bi-mortarboard-fill", title: "Training",               body: "Conduct training for drug law enforcement officers across Central and State agencies." },
                            ].map(fn => (
                                <div key={fn.title} className="function-card">
                                    <div className="fc-icon"><i className={`bi ${fn.icon}`} /></div>
                                    <h4 className="fc-title">{fn.title}</h4>
                                    <p className="fc-body">{fn.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Motto Image */}
                    <section className="about-motto-section">
                        <div className="motto-img-wrap">
                            <img src={mottoImg} alt="NCB Motto, Mission & Vision" />
                        </div>
                        <div className="motto-text">
                            <span className="section-label">Our Ethos</span>
                            <h2 className="section-title">Motto, Mission & Vision</h2>
                            <div className="section-divider" />
                            <blockquote className="motto-quote">
                                <strong>Motto:</strong> "सर्वे संतु निरामयः" — May all be free from affliction
                            </blockquote>
                            <p>NCB's mission is the elimination of illicit drug trafficking and the reduction of drug demand through stringent enforcement, intelligence gathering, and international cooperation.</p>
                            <Link to="/motto-mission-vision" className="about-btn-primary">View Full Mission & Vision</Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;
