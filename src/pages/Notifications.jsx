import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./Notifications.scss";

const notificationData = [
    { id: "NCB/NOT/2026/047", date: "2026-05-03", title: "Amendment to NDPS Schedules — New Psychotropic Substances Added", type: "Gazette Notification", category: "Legislation" },
    { id: "NCB/NOT/2026/041", date: "2026-04-22", title: "Circular: Enhanced Surveillance Protocols for Sea Ports and Airports", type: "Office Circular", category: "Operations" },
    { id: "NCB/NOT/2026/038", date: "2026-04-15", title: "Notification: Appointment of Additional NDPS Exclusive Courts in 5 States", type: "Gazette Notification", category: "Judicial" },
    { id: "NCB/NOT/2026/032", date: "2026-04-02", title: "Guidelines for Disposal of Seized Narcotic Substances Under NDPS Act", type: "Administrative Order", category: "Administration" },
    { id: "NCB/NOT/2026/027", date: "2026-03-20", title: "Public Notice: Beware of Fake NCB Notices — Scam Alert", type: "Public Notice", category: "Alert" },
    { id: "NCB/NOT/2026/021", date: "2026-03-10", title: "Circular: Revised Standard Operating Procedures for Field Units", type: "Office Circular", category: "Operations" },
    { id: "NCB/NOT/2026/015", date: "2026-02-25", title: "Notification: NDPS (Regulation of Controlled Substances) Amendment Order", type: "Gazette Notification", category: "Legislation" },
    { id: "NCB/NOT/2026/009", date: "2026-02-10", title: "Order: Constitution of High Level Committee on Drug Demand Reduction", type: "Administrative Order", category: "Administration" },
    { id: "NCB/NOT/2026/003", date: "2026-01-20", title: "Annual Report Submission Guidelines for State Agencies", type: "Office Circular", category: "Administration" },
    { id: "NCB/NOT/2025/089", date: "2025-12-15", title: "Revised Bail Provisions under NDPS Act — Judicial Guidance Note", type: "Circular", category: "Judicial" },
    { id: "NCB/NOT/2025/078", date: "2025-11-30", title: "National Drug Enforcement Conference 2025 — Outcomes and Follow-up Actions", type: "Circular", category: "Operations" },
    { id: "NCB/NOT/2025/065", date: "2025-10-22", title: "Notification: Expansion of NCB's Cyber Unit Mandate", type: "Gazette Notification", category: "Operations" },
    { id: "NCB/NOT/2025/051", date: "2025-09-08", title: "Circular on Inter-Agency Data Sharing Protocol — Updated Format", type: "Office Circular", category: "Administration" },
    { id: "NCB/NOT/2025/044", date: "2025-08-12", title: "Public Notice: Report Drug Activity — NCB Helpline 1933 Available 24/7", type: "Public Notice", category: "Alert" },
    { id: "NCB/NOT/2025/033", date: "2025-07-04", title: "Notification: New Sub-Zonal Office Opening — Imphal, Manipur", type: "Gazette Notification", category: "Administration" },
];

const typeFilters = ["All", "Gazette Notification", "Office Circular", "Administrative Order", "Public Notice"];
const yearFilters = ["All", "2026", "2025", "2024"];
const PAGE_SIZE = 8;

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function getTypeClass(type) {
    switch (type) {
        case "Gazette Notification": return "type--gazette";
        case "Office Circular": return "type--circular";
        case "Administrative Order": return "type--order";
        case "Public Notice": return "type--notice";
        default: return "type--circular";
    }
}

function getCategoryClass(cat) {
    switch (cat) {
        case "Legislation": return "cat--legislation";
        case "Operations": return "cat--operations";
        case "Judicial": return "cat--judicial";
        case "Administration": return "cat--admin";
        case "Alert": return "cat--alert";
        default: return "";
    }
}

function Notifications() {
    const [activeYear, setActiveYear] = useState("All");
    const [activeType, setActiveType] = useState("All");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const filtered = notificationData.filter(n => {
        const matchYear = activeYear === "All" || n.date.startsWith(activeYear);
        const matchType = activeType === "All" || n.type === activeType;
        const q = search.toLowerCase();
        const matchSearch = !q || n.title.toLowerCase().includes(q) || n.id.toLowerCase().includes(q);
        return matchYear && matchType && matchSearch;
    });

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    function handleYearChange(y) {
        setActiveYear(y);
        setPage(1);
    }

    function handleTypeChange(t) {
        setActiveType(t);
        setPage(1);
    }

    function handleSearch(e) {
        setSearch(e.target.value);
        setPage(1);
    }

    return (
        <div className="notifications-page">
            <PageBanner
                title="Notifications"
                subtitle="Official notifications, circulars, administrative orders and public notices issued by NCB"
                breadcrumbs={[
                    { label: "Legal", path: "/legal/notifications" },
                    { label: "Notifications", path: "/legal/notifications" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    <span className="section-label">Official Notices</span>
                    <h2 className="section-title">Notifications & Circulars</h2>
                    <div className="section-divider" />

                    {/* Year filter tabs */}
                    <div className="notif-year-tabs">
                        {yearFilters.map(y => (
                            <button
                                key={y}
                                className={`notif-year-tab ${activeYear === y ? "active" : ""}`}
                                onClick={() => handleYearChange(y)}
                            >
                                {y === "All" ? "All Years" : y}
                            </button>
                        ))}
                    </div>

                    {/* Type + Search bar */}
                    <div className="notif-filter-bar">
                        <div className="filter-pills">
                            <span className="filter-label"><i className="bi bi-funnel-fill" /> Type:</span>
                            {typeFilters.map(t => (
                                <button
                                    key={t}
                                    className={`filter-pill ${activeType === t ? "active" : ""}`}
                                    onClick={() => handleTypeChange(t)}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                        <div className="notif-search">
                            <i className="bi bi-search" />
                            <input
                                type="text"
                                placeholder="Search by title or notification ID…"
                                value={search}
                                onChange={handleSearch}
                                aria-label="Search notifications"
                            />
                            {search && (
                                <button className="notif-clear-search" onClick={() => { setSearch(""); setPage(1); }} aria-label="Clear search">
                                    <i className="bi bi-x" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Count row */}
                    <div className="notif-count-row">
                        <span>{filtered.length} notification{filtered.length !== 1 ? "s" : ""} found</span>
                        {totalPages > 1 && (
                            <span className="notif-page-info">Page {page} of {totalPages}</span>
                        )}
                    </div>

                    {/* Table */}
                    <div className="notif-table-wrap">
                        {paginated.length === 0 ? (
                            <div className="notif-empty">
                                <i className="bi bi-inbox" />
                                <p>No notifications match your filters.</p>
                            </div>
                        ) : (
                            <table className="notif-table">
                                <thead>
                                    <tr>
                                        <th className="col-id">Notice No.</th>
                                        <th className="col-date">Date</th>
                                        <th className="col-title">Subject</th>
                                        <th className="col-type">Type</th>
                                        <th className="col-cat">Category</th>
                                        <th className="col-action">Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginated.map(n => (
                                        <tr key={n.id} className="notif-row">
                                            <td className="col-id">
                                                <span className="notif-id">{n.id}</span>
                                            </td>
                                            <td className="col-date">
                                                <span className="notif-date">{formatDate(n.date)}</span>
                                            </td>
                                            <td className="col-title">
                                                <span className="notif-title">{n.title}</span>
                                            </td>
                                            <td className="col-type">
                                                <span className={`notif-type-badge ${getTypeClass(n.type)}`}>{n.type}</span>
                                            </td>
                                            <td className="col-cat">
                                                <span className={`notif-cat-badge ${getCategoryClass(n.category)}`}>{n.category}</span>
                                            </td>
                                            <td className="col-action">
                                                <button className="notif-dl-btn" aria-label={`Download ${n.title}`}>
                                                    <i className="bi bi-file-earmark-pdf" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="notif-pagination">
                            <button
                                className="notif-page-btn"
                                disabled={page === 1}
                                onClick={() => setPage(p => p - 1)}
                                aria-label="Previous page"
                            >
                                <i className="bi bi-chevron-left" />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                <button
                                    key={p}
                                    className={`notif-page-btn ${page === p ? "active" : ""}`}
                                    onClick={() => setPage(p)}
                                >
                                    {p}
                                </button>
                            ))}
                            <button
                                className="notif-page-btn"
                                disabled={page === totalPages}
                                onClick={() => setPage(p => p + 1)}
                                aria-label="Next page"
                            >
                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>
                    )}

                    {/* Archive note */}
                    <div className="notif-archive-note">
                        <i className="bi bi-info-circle-fill" />
                        <p>
                            For older notifications (prior to 2024), please contact the Establishment Section, NCB Headquarters.
                            Gazette Notifications can also be accessed at the <a href="https://egazette.gov.in" target="_blank" rel="noopener noreferrer">Official Gazette Portal</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;
