import PageBanner from "../components/PageBanner";
import "./AnnualReports.scss";

const reports = [
    { year: "2024-25", title: "Annual Report on Drug Enforcement in India 2024-25", size: "8.2 MB", pages: 186, highlights: ["42,380 kg drugs seized", "2,847 cases registered", "3,621 arrests made", "120 major operations"] },
    { year: "2023-24", title: "Annual Report on Drug Enforcement in India 2023-24", size: "7.9 MB", pages: 174, highlights: ["38,750 kg drugs seized", "2,612 cases registered", "3,201 arrests made", "96 major operations"] },
    { year: "2022-23", title: "Annual Report on Drug Enforcement in India 2022-23", size: "7.1 MB", pages: 162, highlights: ["29,350 kg drugs seized", "2,310 cases registered", "2,948 arrests made", "Synthetic drug seizures doubled"] },
    { year: "2021-22", title: "Annual Report on Drug Enforcement in India 2021-22", size: "6.8 MB", pages: 158, highlights: ["22,456 kg drugs seized", "1,980 cases registered", "2,543 arrests made", "Ganja seizure highest category"] },
    { year: "2020-21", title: "Annual Report on Drug Enforcement in India 2020-21", size: "6.2 MB", pages: 148, highlights: ["18,320 kg drugs seized", "1,742 cases registered", "2,187 arrests made", "Operations despite COVID-19"] },
    { year: "2019-20", title: "Annual Report on Drug Enforcement in India 2019-20", size: "5.8 MB", pages: 139, highlights: ["15,680 kg drugs seized", "1,623 cases registered", "1,964 arrests made", "Focus on North-East region"] },
];

// Seizure trend data for bar chart (in kg)
const seizureData = [
    { year: "2019-20", value: 15680 },
    { year: "2020-21", value: 18320 },
    { year: "2021-22", value: 22456 },
    { year: "2022-23", value: 29350 },
    { year: "2023-24", value: 38750 },
    { year: "2024-25", value: 42380 },
];

const maxValue = Math.max(...seizureData.map(d => d.value));

function AnnualReports() {
    return (
        <div className="annual-reports-page">
            <PageBanner
                title="Annual Reports"
                subtitle="NCB Annual Reports on Drug Enforcement in India"
                breadcrumbs={[
                    { label: "Media", path: "/media/latest-news" },
                    { label: "Annual Reports", path: "/media/annual-reports" },
                ]}
            />

            <div className="page-section">
                <div className="container">

                    {/* ── Intro ── */}
                    <div className="ar-intro">
                        <div className="ar-intro-text">
                            <span className="section-label">Publications</span>
                            <h2 className="section-title">NCB Annual Reports</h2>
                            <div className="section-divider" />
                            <p>The Narcotics Control Bureau publishes comprehensive Annual Reports detailing drug enforcement operations, seizure statistics, case registrations, international cooperation, and demand reduction activities across India.</p>
                        </div>
                        <div className="ar-intro-stats">
                            <div className="ar-intro-stat">
                                <span className="ar-is-num">6</span>
                                <span className="ar-is-label">Reports Available</span>
                            </div>
                            <div className="ar-intro-stat">
                                <span className="ar-is-num">2019–25</span>
                                <span className="ar-is-label">Years Covered</span>
                            </div>
                            <div className="ar-intro-stat">
                                <span className="ar-is-num">PDF</span>
                                <span className="ar-is-label">Format</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Seizure Trend Chart ── */}
                    <section className="ar-section">
                        <span className="section-label">Data Visualisation</span>
                        <h2 className="section-title">Drug Seizure Trend (2019–2025)</h2>
                        <div className="section-divider" />
                        <div className="ar-chart-card">
                            <div className="ar-chart-bars">
                                {seizureData.map((d, i) => {
                                    const heightPct = (d.value / maxValue) * 100;
                                    return (
                                        <div key={i} className="ar-bar-col">
                                            <div className="ar-bar-label-top">{(d.value / 1000).toFixed(1)}k kg</div>
                                            <div className="ar-bar-wrap">
                                                <div
                                                    className="ar-bar"
                                                    style={{ height: `${heightPct}%` }}
                                                />
                                            </div>
                                            <div className="ar-bar-year">{d.year}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="ar-chart-note"><i className="bi bi-info-circle" /> Total drug seizures (kg) recorded annually by NCB field units across India. Source: NCB Annual Reports.</p>
                        </div>
                    </section>

                    {/* ── Reports List ── */}
                    <section className="ar-section">
                        <span className="section-label">Downloads</span>
                        <h2 className="section-title">Download Annual Reports</h2>
                        <div className="section-divider" />
                        <div className="ar-reports-list">
                            {reports.map((r, i) => (
                                <div key={i} className={`ar-report-card${i === 0 ? " ar-report-card--latest" : ""}`}>
                                    <div className="ar-report-year-badge">
                                        {i === 0 && <span className="ar-latest-tag">Latest</span>}
                                        <span className="ar-year-text">{r.year}</span>
                                    </div>
                                    <div className="ar-report-body">
                                        <h3 className="ar-report-title">{r.title}</h3>
                                        <ul className="ar-report-highlights">
                                            {r.highlights.map((h, j) => (
                                                <li key={j} className="ar-highlight-item">
                                                    <i className="bi bi-check2-circle" />
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="ar-report-meta">
                                        <div className="ar-meta-info">
                                            <span className="ar-meta-item"><i className="bi bi-file-earmark-pdf" /> {r.size}</span>
                                            <span className="ar-meta-item"><i className="bi bi-file-text" /> {r.pages} pages</span>
                                        </div>
                                        <button className="ar-download-btn">
                                            <i className="bi bi-download" /> Download PDF
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Note ── */}
                    <div className="ar-disclaimer">
                        <i className="bi bi-info-circle-fill" />
                        <p>These reports are published for public information under the proactive disclosure mandate of the RTI Act, 2005. For older reports or additional publications, contact NCB at <a href="mailto:ncb-hq@gov.in">ncb-hq@gov.in</a> or call <a href="tel:011-26197915">011-26197915</a>.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AnnualReports;
