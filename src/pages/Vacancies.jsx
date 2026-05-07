import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./Vacancies.scss";

const vacancyData = [
    { id: "NCB/RECTT/2026/03", post: "Sub-Inspector (SI)", department: "Intelligence Branch", posts: 45, category: "Direct Recruitment", payScale: "Level-6 (₹35,400–1,12,400)", closingDate: "2026-06-30", eligibility: "Graduate, Age 20-25", status: "open", type: "Combined Service Exam" },
    { id: "NCB/RECTT/2026/02", post: "Inspector (Intelligence Officer)", department: "Operations", posts: 18, category: "Direct Recruitment", payScale: "Level-7 (₹44,900–1,42,400)", closingDate: "2026-06-15", eligibility: "Graduate, Age 21-30", status: "open", type: "Limited Departmental Exam" },
    { id: "NCB/RECTT/2026/01", post: "Deputy Superintendent of Police (DSP)", department: "NCB Headquarters", posts: 5, category: "Deputation", payScale: "Level-10 (₹56,100–1,77,500)", closingDate: "2026-05-31", eligibility: "IPS/State PCS Officers", status: "closing", type: "Deputation" },
    { id: "NCB/RECTT/2025/08", post: "Scientific Assistant", department: "Drug Forensic Lab", posts: 12, category: "Direct Recruitment", payScale: "Level-5 (₹29,200–92,300)", closingDate: "2026-06-10", eligibility: "B.Sc. Chemistry/Pharmacy", status: "open", type: "Written + Interview" },
    { id: "NCB/RECTT/2025/07", post: "Constable (Executive)", department: "Field Units", posts: 120, category: "Direct Recruitment", payScale: "Level-3 (₹21,700–69,100)", closingDate: "2025-12-15", eligibility: "12th Pass, Age 18-25", status: "closed", type: "SSC" },
    { id: "NCB/RECTT/2025/06", post: "Lower Division Clerk (LDC)", department: "Administration", posts: 28, category: "Direct Recruitment", payScale: "Level-2 (₹19,900–63,200)", closingDate: "2025-11-30", eligibility: "12th Pass + Typing 35 wpm", status: "closed", type: "SSC CHSL" },
    { id: "NCB/RECTT/2025/04", post: "Hindi Translator", department: "Translation Wing", posts: 3, category: "Direct Recruitment", payScale: "Level-6 (₹35,400–1,12,400)", closingDate: "2025-10-15", eligibility: "MA Hindi or English", status: "closed", type: "Specialist Exam" },
    { id: "NCB/RECTT/2025/02", post: "Intelligence Officer (IO)", department: "Zonal Units", posts: 35, category: "Direct Recruitment", payScale: "Level-7 (₹44,900–1,42,400)", closingDate: "2025-09-30", eligibility: "Graduate, Age 21-27", status: "closed", type: "Written + Interview" },
];

const statusFilters = ["All", "open", "closing", "closed"];

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function Vacancies() {
    const [activeStatus, setActiveStatus] = useState("All");

    const filtered = vacancyData.filter(v => {
        return activeStatus === "All" || v.status === activeStatus;
    });

    const openCount = vacancyData.filter(v => v.status === "open").length;
    const closingCount = vacancyData.filter(v => v.status === "closing").length;
    const openPosts = vacancyData.filter(v => v.status === "open" || v.status === "closing").reduce((sum, v) => sum + v.posts, 0);
    const activeExams = vacancyData.filter(v => v.status !== "closed").length;

    return (
        <div className="vacancies-page">
            <PageBanner
                title="Current Vacancies"
                subtitle="Open recruitment notices, examination schedules, and deputation opportunities at NCB"
                breadcrumbs={[
                    { label: "Join NCB", path: "/career/vacancies" },
                    { label: "Current Vacancies", path: "/career/vacancies" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    {/* Alert banner */}
                    <div className="vac-alert-banner">
                        <i className="bi bi-shield-exclamation" />
                        <div>
                            <strong>Beware of Fake Recruitment Notices</strong>
                            <p>
                                NCB never charges any fees for recruitment. All recruitment is conducted through SSC/UPSC/DPC.
                                Verify all notices only on this official page. Report fraudulent notices to{" "}
                                <strong>complaint@ncb.nic.in</strong> or helpline <strong>1800-11-0031</strong>.
                            </p>
                        </div>
                    </div>

                    <span className="section-label">Career Opportunities</span>
                    <h2 className="section-title">Current Vacancies</h2>
                    <div className="section-divider" />

                    {/* Stats strip */}
                    <div className="vac-stats-strip">
                        {[
                            { icon: "bi-door-open-fill", value: openCount, label: "Open Positions" },
                            { icon: "bi-people-fill", value: openPosts, label: "Total Open Posts" },
                            { icon: "bi-clock-fill", value: closingCount, label: "Closing Soon" },
                            { icon: "bi-pencil-square", value: activeExams, label: "Active Examinations" },
                        ].map(s => (
                            <div key={s.label} className="vstat-item">
                                <div className="vstat-icon"><i className={`bi ${s.icon}`} /></div>
                                <div>
                                    <span className="vstat-value">{s.value}</span>
                                    <span className="vstat-label">{s.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Status filter */}
                    <div className="vac-filter-bar">
                        <span className="filter-label"><i className="bi bi-funnel-fill" /> Status:</span>
                        {statusFilters.map(s => (
                            <button
                                key={s}
                                className={`filter-pill vac-filter-pill--${s} ${activeStatus === s ? "active" : ""}`}
                                onClick={() => setActiveStatus(s)}
                            >
                                {s === "All" ? "All" : s === "open" ? "Open" : s === "closing" ? "Closing Soon" : "Closed"}
                            </button>
                        ))}
                    </div>

                    {/* Count */}
                    <div className="vac-count-row">
                        <span>{filtered.length} vacanc{filtered.length !== 1 ? "ies" : "y"} found</span>
                    </div>

                    {/* Vacancy cards */}
                    <div className="vac-cards-list">
                        {filtered.length === 0 ? (
                            <div className="vac-empty">
                                <i className="bi bi-inbox" />
                                <p>No vacancies match the selected status.</p>
                            </div>
                        ) : (
                            filtered.map(v => (
                                <div key={v.id} className={`vac-card vac-card--${v.status}`}>
                                    <div className="vc-status-bar" />
                                    <div className="vc-body">
                                        <div className="vc-header-row">
                                            <div className="vc-id-type">
                                                <span className="vc-id">{v.id}</span>
                                                <span className="vc-type-tag">{v.type}</span>
                                            </div>
                                            <div className="vc-right-badges">
                                                <span className="vc-posts-badge">
                                                    <i className="bi bi-people-fill" /> {v.posts} Posts
                                                </span>
                                                <span className={`vc-status-badge status--${v.status}`}>
                                                    {v.status === "open" && <><i className="bi bi-circle-fill" /> Open</>}
                                                    {v.status === "closing" && <><i className="bi bi-exclamation-circle-fill" /> Closing Soon</>}
                                                    {v.status === "closed" && <><i className="bi bi-x-circle-fill" /> Closed</>}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="vc-post-title">{v.post}</h3>
                                        <p className="vc-dept">
                                            <i className="bi bi-building" /> {v.department}
                                        </p>

                                        <div className="vc-details-grid">
                                            <div className="vc-detail-item">
                                                <i className="bi bi-cash-coin" />
                                                <div>
                                                    <span className="vdi-label">Pay Scale</span>
                                                    <span className="vdi-value">{v.payScale}</span>
                                                </div>
                                            </div>
                                            <div className="vc-detail-item">
                                                <i className="bi bi-mortarboard-fill" />
                                                <div>
                                                    <span className="vdi-label">Eligibility</span>
                                                    <span className="vdi-value">{v.eligibility}</span>
                                                </div>
                                            </div>
                                            <div className="vc-detail-item">
                                                <i className="bi bi-tag-fill" />
                                                <div>
                                                    <span className="vdi-label">Category</span>
                                                    <span className="vdi-value">{v.category}</span>
                                                </div>
                                            </div>
                                            <div className={`vc-detail-item ${v.status === "closing" ? "vc-detail--urgent" : ""}`}>
                                                <i className="bi bi-calendar-x" />
                                                <div>
                                                    <span className="vdi-label">Closing Date</span>
                                                    <span className="vdi-value">{formatDate(v.closingDate)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="vc-actions">
                                            {v.status !== "closed" ? (
                                                <a
                                                    href="https://ssc.nic.in"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="vc-apply-btn"
                                                >
                                                    <i className="bi bi-send-fill" /> Apply Now
                                                </a>
                                            ) : (
                                                <button className="vc-apply-btn vc-apply-btn--closed" disabled>
                                                    <i className="bi bi-lock-fill" /> Applications Closed
                                                </button>
                                            )}
                                            <button className="vc-notice-btn">
                                                <i className="bi bi-file-earmark-pdf" /> Recruitment Notice
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Download section */}
                    <div className="vac-download-section">
                        <div className="vds-left">
                            <i className="bi bi-file-earmark-ruled-fill" />
                            <div>
                                <h4>Download Recruitment Rules</h4>
                                <p>Detailed eligibility, selection process, and service conditions for each post category.</p>
                            </div>
                        </div>
                        <a href="/recruitment-rules" className="vds-btn">
                            <i className="bi bi-download" /> View Recruitment Rules
                        </a>
                    </div>

                    {/* Important note */}
                    <div className="vac-important-note">
                        <div className="vin-header">
                            <i className="bi bi-exclamation-triangle-fill" />
                            <strong>Important Notice</strong>
                        </div>
                        <ul className="vin-list">
                            <li>All recruitment to NCB is conducted through SSC (Staff Selection Commission), UPSC, or the Departmental Promotion Committee (DPC).</li>
                            <li>NCB does not directly recruit or accept applications. Do not apply through any agent or unofficial channel.</li>
                            <li>Never pay any fees — NCB does not charge any application or processing fee at any stage of recruitment.</li>
                            <li>Candidates are advised to check official SSC / UPSC websites for examination schedules and call letters.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vacancies;
