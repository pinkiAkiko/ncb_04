import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./VideoGallery.scss";

const videoData = [
    { id: 1, title: "NCB Operation — Monsoon Shield 2026 Highlights",           duration: "4:32",  views: "12.4K", category: "Operations",    date: "May 2026", youtubeId: "dQw4w9WgXcQ" },
    { id: 2, title: "Director General NCB Address on Nasha Mukt Bharat",        duration: "12:18", views: "8.9K",  category: "Official",      date: "Apr 2026", youtubeId: "dQw4w9WgXcQ" },
    { id: 3, title: "How to Report Drug Trafficking — NCB Helpline 1933",        duration: "2:45",  views: "45.2K", category: "Awareness",     date: "Apr 2026", youtubeId: "dQw4w9WgXcQ" },
    { id: 4, title: "Dark Net Drug Markets — NCB Cyber Unit Explained",          duration: "7:03",  views: "22.7K", category: "Awareness",     date: "Mar 2026", youtubeId: "dQw4w9WgXcQ" },
    { id: 5, title: "Maritime Drug Interdiction — West Coast Operation 2026",    duration: "5:55",  views: "19.1K", category: "Operations",    date: "Mar 2026", youtubeId: "dQw4w9WgXcQ" },
    { id: 6, title: "NCB-UNODC Joint Press Conference — Bangkok Summit",         duration: "28:40", views: "6.3K",  category: "International", date: "Feb 2026", youtubeId: "dQw4w9WgXcQ" },
    { id: 7, title: "Anti-Drug Pledge Drive — Republic Day 2026",                duration: "3:15",  views: "31.0K", category: "Events",        date: "Jan 2026", youtubeId: "dQw4w9WgXcQ" },
    { id: 8, title: "Annual Report 2025: NCB Director General Briefing",         duration: "18:22", views: "14.8K", category: "Official",      date: "Jan 2026", youtubeId: "dQw4w9WgXcQ" },
];

const videoCategories = ["All", "Operations", "Awareness", "Official", "International", "Events"];

function VideoGallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeVideo, setActiveVideo] = useState(null);

    const filtered = activeCategory === "All"
        ? videoData
        : videoData.filter(v => v.category === activeCategory);

    const openVideo = (video) => setActiveVideo(video);
    const closeVideo = () => setActiveVideo(null);

    return (
        <div className="video-page">
            <PageBanner
                title="Video Gallery"
                subtitle="Official videos, operation highlights, and awareness films from the Narcotics Control Bureau"
                breadcrumbs={[
                    { label: "Media", path: "/media/latest-news" },
                    { label: "Video Gallery", path: "/media/video-gallery" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    <span className="section-label">Video Library</span>
                    <h2 className="section-title">Video Gallery</h2>
                    <div className="section-divider" />

                    {/* Category filter pills */}
                    <div className="video-filter-bar">
                        <div className="video-filter-pills">
                            {videoCategories.map(cat => (
                                <button
                                    key={cat}
                                    className={`video-filter-pill ${activeCategory === cat ? "active" : ""}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <span className="video-count">{filtered.length} video{filtered.length !== 1 ? "s" : ""}</span>
                    </div>

                    {/* Video Cards Grid */}
                    <div className="video-grid">
                        {filtered.map(video => (
                            <div
                                key={video.id}
                                className="video-card"
                                onClick={() => openVideo(video)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={e => e.key === "Enter" && openVideo(video)}
                                aria-label={`Play video: ${video.title}`}
                            >
                                <div className="video-thumbnail">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                        alt={video.title}
                                        loading="lazy"
                                    />
                                    <div className="video-play-overlay">
                                        <div className="video-play-btn">
                                            <i className="bi bi-play-fill" />
                                        </div>
                                    </div>
                                    <span className="video-duration-badge">{video.duration}</span>
                                </div>
                                <div className="video-card-body">
                                    <div className="video-card-meta-top">
                                        <span className={`video-cat-tag vcat--${video.category.toLowerCase()}`}>{video.category}</span>
                                        <span className="video-date">{video.date}</span>
                                    </div>
                                    <h3 className="video-card-title">{video.title}</h3>
                                    <div className="video-card-meta-bottom">
                                        <span className="video-views">
                                            <i className="bi bi-eye" /> {video.views} views
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* YouTube subscribe CTA strip */}
                    <div className="video-subscribe-strip">
                        <div className="vss-left">
                            <i className="bi bi-youtube" />
                            <div>
                                <h3>Subscribe to NCB's Official YouTube Channel</h3>
                                <p>Get notified about the latest operation updates, awareness videos, and official briefings.</p>
                            </div>
                        </div>
                        <a
                            href="https://www.youtube.com/@NarcoticsControlBureau"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="vss-subscribe-btn"
                        >
                            <i className="bi bi-youtube" /> Subscribe on YouTube
                        </a>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    className="video-modal-overlay"
                    onClick={e => { if (e.target === e.currentTarget) closeVideo(); }}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Playing: ${activeVideo.title}`}
                >
                    <div className="video-modal">
                        <div className="vmodal-header">
                            <div className="vmodal-title-row">
                                <span className={`video-cat-tag vcat--${activeVideo.category.toLowerCase()}`}>{activeVideo.category}</span>
                                <h3 className="vmodal-title">{activeVideo.title}</h3>
                            </div>
                            <button className="vmodal-close-btn" onClick={closeVideo} aria-label="Close video">
                                <i className="bi bi-x-lg" />
                            </button>
                        </div>
                        <div className="vmodal-player">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                                title={activeVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                frameBorder="0"
                            />
                        </div>
                        <div className="vmodal-meta">
                            <span><i className="bi bi-eye" /> {activeVideo.views} views</span>
                            <span><i className="bi bi-clock" /> {activeVideo.duration}</span>
                            <span><i className="bi bi-calendar3" /> {activeVideo.date}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideoGallery;
