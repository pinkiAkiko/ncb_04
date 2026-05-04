import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./Tenders.scss";

const tenderData = [
    {
        id: "NCB/PUR/2026/001",
        title: "Supply and Installation of IT Infrastructure — Network Equipment for NCB HQ",
        category: "Procurement",
        type: "Open Tender",
        publishedDate: "18 May 2026",
        closingDate: "15 Jun 2026",
        value: "₹ 1,20,00,000",
        zone: "HQ New Delhi",
        status: "open",
        docs: ["Tender Notice", "Tender Document", "Technical Specifications"],
    },
    {
        id: "NCB/WORKS/2026/047",
        title: "Civil Works — Renovation and Maintenance of NCB Regional Office, Mumbai",
        category: "Works",
        type: "Limited Tender",
        publishedDate: "12 May 2026",
        closingDate: "08 Jun 2026",
        value: "₹ 45,00,000",
        zone: "West Zone, Mumbai",
        status: "open",
        docs: ["Tender Notice", "BOQ"],
    },
    {
        id: "NCB/SERV/2026/023",
        title: "Annual Maintenance Contract (AMC) for CCTV Systems across all NCB Offices",
        category: "Services",
        type: "Open Tender",
        publishedDate: "05 May 2026",
        closingDate: "30 May 2026",
        value: "₹ 35,00,000",
        zone: "All Zones",
        status: "closing",
        docs: ["Tender Document", "Scope of Work"],
    },
    {
        id: "NCB/VEH/2026/011",
        title: "Procurement of Field Vehicles (4x4 SUVs) for Zonal and Sub-Zonal Units",
        category: "Procurement",
        type: "Open Tender (GeM)",
        publishedDate: "28 Apr 2026",
        closingDate: "25 May 2026",
        value: "₹ 2,80,00,000",
        zone: "Multiple Zones",
        status: "closed",
        docs: ["Tender Notice"],
    },
    {
        id: "NCB/AUC/2026/003",
        title: "Auction of Seized Vehicles — 14 Vehicles (Cars, Motorcycles, Trucks) — West Zone",
        category: "Auction",
        type: "E-Auction",
        publishedDate: "22 Apr 2026",
        closingDate: "20 Jun 2026",
        value: "Reserve Price Applicable",
        zone: "West Zone, Mumbai",
        status: "open",
        docs: ["Auction Notice", "Vehicle List", "Terms & Conditions"],
    },
    {
        id: "NCB/AUC/2026/002",
        title: "Auction of Seized Goods — Miscellaneous Seized Property — North Zone",
        category: "Auction",
        type: "Physical Auction",
        publishedDate: "15 Apr 2026",
        closingDate: "28 May 2026",
        value: "As per Reserve Price",
        zone: "North Zone, New Delhi",
        status: "open",
        docs: ["Auction Notice", "Lot Details"],
    },
    {
        id: "NCB/SERV/2026/019",
        title: "Empanelment of Legal Firms for Representing NCB in Drug Trafficking Cases",
        category: "Empanelment",
        type: "EOI",
        publishedDate: "08 Apr 2026",
        closingDate: "30 Apr 2026",
        value: "N/A",
        zone: "National",
        status: "closed",
        docs: ["EOI Document"],
    },
    {
        id: "NCB/PUR/2026/038",
        title: "Supply of Forensic Drug Testing Kits and Laboratory Reagents",
        category: "Procurement",
        type: "Open Tender",
        publishedDate: "02 Apr 2026",
        closingDate: "02 Jun 2026",
        value: "₹ 85,00,000",
        zone: "All Zones",
        status: "open",
        docs: ["Tender Notice", "Technical Specs", "Price Schedule"],
    },
];

const categories = ["All", "Procurement", "Works", "Services", "Auction", "Empanelment"];
const statusFilters = ["All", "open", "closing", "closed"];

function Tenders() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeStatus, setActiveStatus] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = tenderData.filter(t => {
        const matchCat = activeCategory === "All" || t.category === activeCategory;
        const matchStatus = activeStatus === "All" || t.status === activeStatus;
        const matchSearch = !searchQuery || t.title.toLowerCase().includes(searchQuery.toLowerCase()) || t.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchStatus && matchSearch;
    });

    return (
        <div className="tenders-page">
            <PageBanner
                title="Tenders & Auctions"
                subtitle="Active tender notices, procurement notifications, and auction listings of NCB"
                breadcrumbs={[{ label: "Tenders & Auctions", path: "/tenders" }]}
            />

            <div className="page-section">
                <div className="container">
                    {/* Stats strip — BSF-style */}
                    <div className="tenders-stats-strip">
                        {[
                            { icon: "bi-file-earmark-text", value: "8", label: "Active Tenders" },
                            { icon: "bi-hammer",            value: "3", label: "Auctions Open" },
                            { icon: "bi-clock-history",     value: "2", label: "Closing This Week" },
                            { icon: "bi-archive",           value: "24", label: "Archived (2025-26)" },
                        ].map(s => (
                            <div key={s.label} className="tstat-item">
                                <div className="tstat-icon"><i className={`bi ${s.icon}`} /></div>
                                <div>
                                    <span className="tstat-value">{s.value}</span>
                                    <span className="tstat-label">{s.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Filters + Search */}
                    <div className="tenders-filter-bar">
                        <div className="filter-pills">
                            <span className="filter-label"><i className="bi bi-funnel-fill" /> Category:</span>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="filter-pills">
                            <span className="filter-label">Status:</span>
                            {statusFilters.map(s => (
                                <button
                                    key={s}
                                    className={`filter-pill filter-pill--${s} ${activeStatus === s ? "active" : ""}`}
                                    onClick={() => setActiveStatus(s)}
                                >
                                    {s === "All" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
                                </button>
                            ))}
                        </div>
                        <div className="tenders-search">
                            <i className="bi bi-search" />
                            <input
                                type="text"
                                placeholder="Search by title or tender ID…"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                aria-label="Search tenders"
                            />
                        </div>
                    </div>

                    {/* Tenders table — CBI/BSF style */}
                    <div className="tenders-count-row">
                        <span>{filtered.length} tender{filtered.length !== 1 ? "s" : ""} found</span>
                        <a href="https://eprocure.gov.in" target="_blank" rel="noopener noreferrer" className="gem-link">
                            <i className="bi bi-box-arrow-up-right" /> View on GeM Portal
                        </a>
                    </div>

                    <div className="tenders-list">
                        {filtered.length === 0 ? (
                            <div className="tenders-empty">
                                <i className="bi bi-inbox" />
                                <p>No tenders match your filters.</p>
                            </div>
                        ) : (
                            filtered.map(tender => (
                                <div key={tender.id} className={`tender-card tender-card--${tender.status}`}>
                                    <div className="tc-status-bar" />
                                    <div className="tc-main">
                                        <div className="tc-header-row">
                                            <div className="tc-id-cat">
                                                <span className="tc-id">{tender.id}</span>
                                                <span className={`tc-cat-tag cat--${tender.category.toLowerCase()}`}>{tender.category}</span>
                                                <span className="tc-type">{tender.type}</span>
                                            </div>
                                            <span className={`tc-status-badge status--${tender.status}`}>
                                                {tender.status === "open" && <><i className="bi bi-circle-fill" /> Open</>}
                                                {tender.status === "closing" && <><i className="bi bi-exclamation-circle-fill" /> Closing Soon</>}
                                                {tender.status === "closed" && <><i className="bi bi-x-circle-fill" /> Closed</>}
                                            </span>
                                        </div>

                                        <h3 className="tc-title">{tender.title}</h3>

                                        <div className="tc-meta-row">
                                            <span className="tc-meta-item">
                                                <i className="bi bi-calendar3" />
                                                Published: {tender.publishedDate}
                                            </span>
                                            <span className="tc-meta-sep">·</span>
                                            <span className={`tc-meta-item ${tender.status === "closing" ? "tc-meta--urgent" : ""}`}>
                                                <i className="bi bi-calendar-x" />
                                                Closing: {tender.closingDate}
                                            </span>
                                            <span className="tc-meta-sep">·</span>
                                            <span className="tc-meta-item">
                                                <i className="bi bi-cash-coin" /> {tender.value}
                                            </span>
                                            <span className="tc-meta-sep">·</span>
                                            <span className="tc-meta-item">
                                                <i className="bi bi-geo-alt" /> {tender.zone}
                                            </span>
                                        </div>

                                        <div className="tc-docs-row">
                                            {tender.docs.map(doc => (
                                                <button key={doc} className="tc-doc-btn">
                                                    <i className="bi bi-file-earmark-pdf" /> {doc}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Archive note */}
                    <div className="tenders-archive-note">
                        <i className="bi bi-info-circle-fill" />
                        <p>
                            For archived tenders and corrigenda, refer to the
                            <a href="https://eprocure.gov.in" target="_blank" rel="noopener noreferrer"> Central Public Procurement Portal (CPPP)</a>.
                            All tenders above ₹2 lakh are also published on the GeM portal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tenders;
