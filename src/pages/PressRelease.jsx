import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./PressRelease.scss";

const pressData = [
    { id: "PR-2026-042", date: "2026-05-01", title: "Press Statement on NCB's Operation Monsoon Shield", category: "Operation", size: "156 KB" },
    { id: "PR-2026-038", date: "2026-04-22", title: "Press Conference: DG NCB on Q4 2025-26 Seizure Statistics", category: "Statistics", size: "2.1 MB" },
    { id: "PR-2026-031", date: "2026-04-10", title: "NCB Signs MoU with UNODC for Drug Demand Reduction Programme", category: "MoU", size: "340 KB" },
    { id: "PR-2026-025", date: "2026-03-29", title: "NCB Launches Mobile App for Reporting Suspected Drug Activity", category: "Initiative", size: "890 KB" },
    { id: "PR-2026-018", date: "2026-03-15", title: "Statement on International Day Against Drug Abuse Preparations", category: "Awareness", size: "210 KB" },
    { id: "PR-2026-012", date: "2026-03-01", title: "NCB Busts Dark-net Drug Marketplace: Arrestees Charged Under NDPS Act", category: "Operation", size: "445 KB" },
    { id: "PR-2026-007", date: "2026-02-14", title: "Year-End Report: NCB Drug Enforcement Statistics 2025", category: "Statistics", size: "3.2 MB" },
    { id: "PR-2026-003", date: "2026-01-25", title: "Republic Day Message from Director General, NCB", category: "Official", size: "125 KB" },
];

const years = ["All", "2026", "2025", "2024"];
const prCategories = ["All", "Operation", "Statistics", "MoU", "Initiative", "Awareness", "Official"];

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}

function PressRelease() {
    const [activeYear, setActiveYear] = useState("All");
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = pressData.filter(p => {
        const matchYear = activeYear === "All" || p.date.startsWith(activeYear);
        const matchCat = activeCategory === "All" || p.category === activeCategory;
        const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchYear && matchCat && matchSearch;
    });

    return (
        <div className="press-page">
            <PageBanner
                title="Press Releases"
                subtitle="Official press releases and public statements from the Narcotics Control Bureau"
                breadcrumbs={[
                    { label: "Media", path: "/media/latest-news" },
                    { label: "Press Releases", path: "/media/press-release" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    <span className="section-label">Media Room</span>
                    <h2 className="section-title">Press Releases</h2>
                    <div className="section-divider" />

                    {/* Download All CTA */}
                    <div className="press-cta-bar">
                        <div className="press-cta-info">
                            <i className="bi bi-collection-fill" />
                            <div>
                                <strong>Download All 2026 Press Releases</strong>
                                <span>Compiled archive — all press releases from January to May 2026</span>
                            </div>
                        </div>
                        <button className="press-download-all-btn">
                            <i className="bi bi-download" /> Download Archive
                        </button>
                    </div>

                    {/* Filter Bar */}
                    <div className="press-filter-bar">
                        <div className="press-filter-row">
                            <div className="filter-pills">
                                <span className="filter-label"><i className="bi bi-calendar3" /> Year:</span>
                                {years.map(y => (
                                    <button
                                        key={y}
                                        className={`press-pill ${activeYear === y ? "active" : ""}`}
                                        onClick={() => setActiveYear(y)}
                                    >
                                        {y}
                                    </button>
                                ))}
                            </div>
                            <div className="filter-pills">
                                <span className="filter-label"><i className="bi bi-tag-fill" /> Category:</span>
                                {prCategories.map(cat => (
                                    <button
                                        key={cat}
                                        className={`press-pill ${activeCategory === cat ? "active" : ""}`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="press-search">
                            <i className="bi bi-search" />
                            <input
                                type="text"
                                placeholder="Search press releases…"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                aria-label="Search press releases"
                            />
                        </div>
                    </div>

                    {/* Count row */}
                    <div className="press-count-row">
                        <span>{filtered.length} press release{filtered.length !== 1 ? "s" : ""} found</span>
                    </div>

                    {/* Press Release List */}
                    {filtered.length === 0 ? (
                        <div className="press-empty">
                            <i className="bi bi-file-earmark-x" />
                            <p>No press releases match your filters.</p>
                        </div>
                    ) : (
                        <div className="press-list">
                            {filtered.map(pr => (
                                <div key={pr.id} className="press-card">
                                    <div className="pc-id-badge">
                                        <span>{pr.id}</span>
                                    </div>
                                    <div className="pc-main">
                                        <div className="pc-meta-row">
                                            <span className="pc-date">
                                                <i className="bi bi-calendar3" /> {formatDate(pr.date)}
                                            </span>
                                            <span className={`pc-cat-tag pcat--${pr.category.toLowerCase()}`}>{pr.category}</span>
                                        </div>
                                        <h3 className="pc-title">{pr.title}</h3>
                                        <div className="pc-file-info">
                                            <i className="bi bi-file-earmark-pdf-fill" />
                                            <span>PDF — {pr.size}</span>
                                        </div>
                                    </div>
                                    <div className="pc-actions">
                                        <button className="pc-view-btn" aria-label={`View ${pr.id}`}>
                                            <i className="bi bi-eye" /> View
                                        </button>
                                        <button className="pc-download-btn" aria-label={`Download ${pr.id}`}>
                                            <i className="bi bi-download" /> PDF
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Archive note */}
                    <div className="press-archive-note">
                        <i className="bi bi-info-circle-fill" />
                        <p>
                            Press releases older than 2024 are available in the
                            <a href="#"> Press Release Archive</a>.
                            For media enquiries, contact <a href="mailto:media-ncb@nic.in">media-ncb@nic.in</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PressRelease;
