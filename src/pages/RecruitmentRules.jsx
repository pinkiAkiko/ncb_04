import PageBanner from "../components/PageBanner";
import "./RecruitmentRules.scss";

const recruitmentRulesTable = [
    { post: "Intelligence Officers (Group B)", year: "2021", amended: "2023", size: "2.1 MB" },
    { post: "Sub-Inspectors (Group C)", year: "2018", amended: "2022", size: "1.8 MB" },
    { post: "Constables (Executive)", year: "2016", amended: "2021", size: "1.5 MB" },
    { post: "Scientific Staff (Lab)", year: "2019", amended: "2023", size: "890 KB" },
    { post: "Ministerial Staff (LDC, UDC, Steno)", year: "2015", amended: "2020", size: "2.3 MB" },
    { post: "Officers on Deputation (IPS)", year: "2010", amended: "2019", size: "445 KB" },
    { post: "Hindi Translator", year: "2017", amended: "2022", size: "320 KB" },
];

const serviceRules = [
    {
        title: "Departmental Promotion Committee (DPC)",
        icon: "bi-arrow-up-circle-fill",
        desc: "Promotions within NCB cadres are governed by DPC norms under the All India Services rules. DPC meetings are held annually, or as required, chaired by a senior officer.",
    },
    {
        title: "Annual Performance Appraisal Report (APAR)",
        icon: "bi-clipboard2-check-fill",
        desc: "APARs are mandatory for all NCB officers and staff. They are graded on a 10-point scale. An APAR below 'Good' requires communication to the officer and provides a right of representation.",
    },
    {
        title: "Seniority & Zone of Consideration",
        icon: "bi-list-ol",
        desc: "Seniority for promotion is determined as per the seniority list maintained by the Establishment Section. Officers in the zone of consideration are reviewed by the DPC for fitness to the higher post.",
    },
    {
        title: "Service Rules Reference",
        icon: "bi-journal-bookmark-fill",
        desc: "NCB follows the Central Government service rules including CCS (Conduct) Rules, CCS (CCA) Rules, FR & SR, Leave Rules, and relevant DOPT circulars as applicable.",
    },
];

function RecruitmentRules() {
    return (
        <div className="recruitment-rules-page">
            <PageBanner
                title="Recruitment Rules"
                subtitle="Statutory recruitment rules, service conditions, and promotion norms for all NCB cadres"
                breadcrumbs={[
                    { label: "Join NCB", path: "/career/vacancies" },
                    { label: "Recruitment Rules", path: "/recruitment-rules" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    {/* Intro */}
                    <div className="rr-intro-wrap">
                        <div className="rr-intro-text">
                            <span className="section-label">Statutory Framework</span>
                            <h2 className="section-title">Recruitment Rules</h2>
                            <div className="section-divider" />
                            <p className="rr-intro-para">
                                Recruitment to the Narcotics Control Bureau is governed by the Recruitment Rules framed
                                under Article 309 of the Constitution of India, in consultation with the Union Public
                                Service Commission (UPSC) and the Department of Personnel and Training (DoPT). Each
                                post has specific recruitment rules prescribing method of recruitment, educational
                                qualifications, age limits, and promotion criteria.
                            </p>
                            <p className="rr-intro-para">
                                All recruitment rules are published in the Official Gazette of India. The rules below
                                are available for download in PDF format. For the latest amendments, refer to the
                                Official Gazette or contact the Establishment Section.
                            </p>
                        </div>
                        <div className="rr-intro-card">
                            <i className="bi bi-patch-check-fill" />
                            <h4>All Recruitment via SSC / UPSC / DPC</h4>
                            <p>NCB does not directly recruit. Never pay fees to any agent or unofficial channel.</p>
                            <a
                                href="https://ssc.nic.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rr-ssc-link"
                            >
                                <i className="bi bi-box-arrow-up-right" /> SSC Portal
                            </a>
                        </div>
                    </div>

                    {/* Recruitment Rules Table */}
                    <section className="rr-table-section">
                        <span className="section-label">Downloads</span>
                        <h2 className="section-title">Recruitment Rules — All Posts</h2>
                        <div className="section-divider" />

                        <div className="rr-table-wrap">
                            <table className="rr-table">
                                <thead>
                                    <tr>
                                        <th className="col-sn">S.No.</th>
                                        <th className="col-post">Post / Category</th>
                                        <th className="col-year">Year of Framing</th>
                                        <th className="col-amended">Last Amended</th>
                                        <th className="col-size">File Size</th>
                                        <th className="col-action">Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recruitmentRulesTable.map((row, i) => (
                                        <tr key={i} className="rr-table-row">
                                            <td className="col-sn">
                                                <span className="rr-sn">{String(i + 1).padStart(2, "0")}</span>
                                            </td>
                                            <td className="col-post">
                                                <div className="rr-post-cell">
                                                    <i className="bi bi-file-earmark-ruled" />
                                                    <span className="rr-post-name">{row.post}</span>
                                                </div>
                                            </td>
                                            <td className="col-year">
                                                <span className="rr-year-badge">{row.year}</span>
                                            </td>
                                            <td className="col-amended">
                                                <span className="rr-amended">{row.amended}</span>
                                            </td>
                                            <td className="col-size">
                                                <span className="rr-size">
                                                    <i className="bi bi-file-earmark" /> {row.size}
                                                </span>
                                            </td>
                                            <td className="col-action">
                                                <button className="rr-dl-btn" aria-label={`Download rules for ${row.post}`}>
                                                    <i className="bi bi-download" /> PDF
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="rr-table-note">
                            <i className="bi bi-info-circle-fill" />
                            <p>
                                For the latest authenticated version of recruitment rules, visit the
                                {" "}<a href="https://egazette.gov.in" target="_blank" rel="noopener noreferrer">Official Gazette Portal</a> or
                                contact the Establishment Section at NCB Headquarters.
                            </p>
                        </div>
                    </section>

                    {/* Service Rules section */}
                    <section className="rr-service-section">
                        <span className="section-label">Service Conditions</span>
                        <h2 className="section-title">Service Rules & Promotion Norms</h2>
                        <div className="section-divider" />

                        <div className="rr-service-grid">
                            {serviceRules.map((rule, i) => (
                                <div key={i} className="rr-service-card">
                                    <div className="rsc-icon">
                                        <i className={`bi ${rule.icon}`} />
                                    </div>
                                    <div className="rsc-body">
                                        <h4 className="rsc-title">{rule.title}</h4>
                                        <p className="rsc-desc">{rule.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact card */}
                    <div className="rr-contact-card">
                        <div className="rcc-icon-wrap">
                            <i className="bi bi-envelope-paper-fill" />
                        </div>
                        <div className="rcc-body">
                            <h3 className="rcc-title">Contact for Recruitment Queries</h3>
                            <p className="rcc-subtitle">Establishment Section, NCB Headquarters</p>
                            <div className="rcc-details">
                                <div className="rcc-detail-item">
                                    <i className="bi bi-geo-alt-fill" />
                                    <span>East Block-VI, Level-7, R.K. Puram, New Delhi — 110 066</span>
                                </div>
                                <div className="rcc-detail-item">
                                    <i className="bi bi-telephone-fill" />
                                    <a href="tel:01126197904">011-26197904</a>
                                </div>
                                <div className="rcc-detail-item">
                                    <i className="bi bi-envelope-fill" />
                                    <a href="mailto:estab-ncb@nic.in">estab-ncb@nic.in</a>
                                </div>
                                <div className="rcc-detail-item">
                                    <i className="bi bi-clock-fill" />
                                    <span>Monday – Friday: 9:30 AM to 6:00 PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="rcc-note">
                            <i className="bi bi-shield-check" />
                            <p>
                                Beware of fraudulent calls claiming to be from NCB Establishment. NCB officials
                                will never ask for money or personal bank details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecruitmentRules;
