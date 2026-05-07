import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./LatestNews.scss";

const newsData = [
    { id: 1, category: "Operations", date: "2026-05-02", title: "NCB busts international drug smuggling network, seizes 120 kg heroin in Mumbai", summary: "A joint NCB-DRI operation dismantled a transnational drug trafficking syndicate operating across multiple countries. Four kingpins arrested.", tag: "Major Seizure" },
    { id: 2, category: "Awareness", date: "2026-04-28", title: "NCB launches 'Nasha Mukt Bharat' awareness drive across 100 districts", summary: "The nationwide campaign targets schools and colleges in drug-vulnerable areas, with outreach events involving over 50,000 students.", tag: "Campaign" },
    { id: 3, category: "International", date: "2026-04-20", title: "India-Thailand NCB joint coordination meeting concludes in Bangkok", summary: "Discussions focused on dark-net drug trafficking and cryptocurrency-based transactions. Both agencies signed a joint action plan.", tag: "Cooperation" },
    { id: 4, category: "Operations", date: "2026-04-15", title: "NCB West Zone seizes 85 kg methamphetamine — highest ever in Gujarat", summary: "The seizure was made during a vehicle interception operation near Bhavnagar. Three accused have been chargesheeted under NDPS Act.", tag: "Major Seizure" },
    { id: 5, category: "Policy", date: "2026-04-10", title: "NCB releases Annual Drug Seizure Report 2025-26", summary: "The report highlights a 23% increase in heroin seizures and 41% rise in synthetic drug busts across all NCB zones nationwide.", tag: "Report" },
    { id: 6, category: "Awareness", date: "2026-04-05", title: "NCB conducts sensitisation workshop for judiciary on NDPS Act enforcement", summary: "Judicial officers from across the country participated in the two-day workshop in New Delhi, covering recent amendments and case law.", tag: "Workshop" },
    { id: 7, category: "International", date: "2026-03-28", title: "NCB joins global UNODC campaign against fentanyl trafficking", summary: "India's representation at the UNODC Global Coalition pledged stronger border enforcement and intelligence sharing with partner nations.", tag: "International" },
    { id: 8, category: "Operations", date: "2026-03-20", title: "Dark-net drug trafficker arrested in Bengaluru — cryptocurrency recovered", summary: "NCB South Zone arrested a 24-year-old engineering graduate who operated a hidden drug marketplace. Digital assets worth ₹2.3 Cr seized.", tag: "Arrest" },
    { id: 9, category: "Policy", date: "2026-03-15", title: "Government approves enhanced NDPS court establishment in 5 states", summary: "The Ministry of Home Affairs notified establishment of exclusive NDPS courts in Maharashtra, UP, Punjab, Rajasthan and West Bengal.", tag: "Policy" },
    { id: 10, category: "Awareness", date: "2026-03-08", title: "NCB observes International Women's Day with anti-drug pledge drive", summary: "Over 10,000 women across India took the anti-drug pledge on the occasion. NCB highlighted the impact of drug abuse on families.", tag: "Event" },
];

const categories = ["All", "Operations", "Awareness", "International", "Policy"];

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function LatestNews() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filtered = newsData.filter(n => {
        const matchCat = activeCategory === "All" || n.category === activeCategory;
        const matchSearch = !searchQuery || n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    return (
        <div className="news-page">
            <PageBanner
                title="Latest News & Events"
                subtitle="Stay updated with NCB's operations, awareness campaigns, and policy developments"
                breadcrumbs={[
                    { label: "Media", path: "/media/latest-news" },
                    { label: "Latest News", path: "/media/latest-news" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    <span className="section-label">Newsroom</span>
                    <h2 className="section-title">Latest News & Updates</h2>
                    <div className="section-divider" />

                    {/* Filter Bar */}
                    <div className="news-filter-bar">
                        <div className="news-filter-pills">
                            <span className="filter-label"><i className="bi bi-funnel-fill" /> Filter:</span>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`news-filter-pill ${activeCategory === cat ? "active" : ""}`}
                                    onClick={() => handleCategoryChange(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="news-search">
                            <i className="bi bi-search" />
                            <input
                                type="text"
                                placeholder="Search news…"
                                value={searchQuery}
                                onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                                aria-label="Search news"
                            />
                        </div>
                    </div>

                    {/* Count row */}
                    <div className="news-count-row">
                        <span>{filtered.length} article{filtered.length !== 1 ? "s" : ""} found</span>
                    </div>

                    {/* News Grid */}
                    {paginated.length === 0 ? (
                        <div className="news-empty">
                            <i className="bi bi-newspaper" />
                            <p>No news articles match your search.</p>
                        </div>
                    ) : (
                        <div className="news-grid">
                            {paginated.map(item => (
                                <article key={item.id} className="news-card">
                                    <div className="news-card-header">
                                        <div className="news-date-badge">
                                            <span className="ndb-day">{new Date(item.date).getDate().toString().padStart(2, "0")}</span>
                                            <span className="ndb-month">{new Date(item.date).toLocaleString("en-IN", { month: "short" })}</span>
                                            <span className="ndb-year">{new Date(item.date).getFullYear()}</span>
                                        </div>
                                        <span className={`news-category-tag cat--${item.category.toLowerCase()}`}>{item.category}</span>
                                        <span className="news-tag-badge">{item.tag}</span>
                                    </div>
                                    <div className="news-card-body">
                                        <h3 className="news-card-title">{item.title}</h3>
                                        <p className="news-card-excerpt">{item.summary}</p>
                                    </div>
                                    <div className="news-card-footer">
                                        <a href="#" className="news-read-more" aria-label={`Read more: ${item.title}`}>
                                            Read More <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <nav className="news-pagination" aria-label="News pagination">
                            <button
                                className="news-page-btn"
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                aria-label="Previous page"
                            >
                                <i className="bi bi-chevron-left" />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    className={`news-page-btn ${currentPage === page ? "active" : ""}`}
                                    onClick={() => setCurrentPage(page)}
                                    aria-label={`Page ${page}`}
                                    aria-current={currentPage === page ? "page" : undefined}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                className="news-page-btn"
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                aria-label="Next page"
                            >
                                <i className="bi bi-chevron-right" />
                            </button>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LatestNews;
