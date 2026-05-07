import { useState } from "react";
import PageBanner from "../components/PageBanner";
import img1mou from "../assets/gallary-img/1mou-ncb-capt-bprd.jpeg";
import img2mou from "../assets/gallary-img/2mou-ncb-bprdcapt.jpeg";
import img3mou from "../assets/gallary-img/3mou-ncb-capt.jpeg";
import imgDG from "../assets/gallary-img/3ncbdg.jpeg";
import imgADG from "../assets/gallary-img/4ncbadg.jpeg";
import imgAntf from "../assets/gallary-img/4antf.jpeg";
import imgMaritime from "../assets/gallary-img/5martime.jpeg";
import imgBSF1 from "../assets/gallary-img/8trainee-bsf.jpeg";
import imgIIS from "../assets/gallary-img/9trainee-iis.jpeg";
import imgBSF2 from "../assets/gallary-img/10trainee-bsf.jpeg";
import imgBatch from "../assets/gallary-img/11apppa-51batch.jpeg";
import imgInduction from "../assets/gallary-img/12induction-training-si.jpeg";
import "./PhotoGallery.scss";

const galleryData = [
    { id: 1, src: img1mou,     title: "MoU Signing — NCB with CAPT & BPRD",      category: "MoU Signings",   date: "Feb 2026" },
    { id: 2, src: img2mou,     title: "NCB-BPRD Collaboration Ceremony",           category: "MoU Signings",   date: "Feb 2026" },
    { id: 3, src: img3mou,     title: "NCB Partnership Agreement",                 category: "MoU Signings",   date: "Jan 2026" },
    { id: 4, src: imgDG,       title: "NCB Director General at Press Briefing",    category: "Official Events", date: "May 2026" },
    { id: 5, src: imgADG,      title: "NCB ADG at Conference",                     category: "Official Events", date: "Apr 2026" },
    { id: 6, src: imgAntf,     title: "Anti-Trafficking Force Field Operation",    category: "Operations",     date: "Mar 2026" },
    { id: 7, src: imgMaritime, title: "Maritime Drug Interdiction Operation",       category: "Operations",     date: "Mar 2026" },
    { id: 8, src: imgBSF1,     title: "Joint Training with BSF Officers",          category: "Training",       date: "Feb 2026" },
    { id: 9, src: imgIIS,      title: "IIS Induction Training Batch",              category: "Training",       date: "Jan 2026" },
    { id: 10, src: imgBSF2,    title: "NCB-BSF Joint Patrol Training",             category: "Training",       date: "Jan 2026" },
    { id: 11, src: imgBatch,   title: "51st Induction Training Batch — APPPPA",   category: "Training",       date: "Dec 2025" },
    { id: 12, src: imgInduction,title: "SI Induction Training Programme",          category: "Training",       date: "Nov 2025" },
];

const filterTabs = ["All", "MoU Signings", "Official Events", "Operations", "Training"];

function PhotoGallery() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const filtered = activeFilter === "All"
        ? galleryData
        : galleryData.filter(img => img.category === activeFilter);

    const openLightbox = (globalIndex) => setLightboxIndex(globalIndex);
    const closeLightbox = () => setLightboxIndex(null);

    const prevImage = () => {
        setLightboxIndex(i => (i === 0 ? filtered.length - 1 : i - 1));
    };
    const nextImage = () => {
        setLightboxIndex(i => (i === filtered.length - 1 ? 0 : i + 1));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
    };

    return (
        <div className="gallery-page">
            <PageBanner
                title="Photo Gallery"
                subtitle="Photos from NCB operations, official events, MoU signings and training programmes"
                breadcrumbs={[
                    { label: "Media", path: "/media/latest-news" },
                    { label: "Photo Gallery", path: "/media/photo-gallery" },
                ]}
            />

            <div className="page-section">
                <div className="container">
                    <span className="section-label">Gallery</span>
                    <h2 className="section-title">Photo Gallery</h2>
                    <div className="section-divider" />

                    {/* Filter tabs */}
                    <div className="gallery-filter-tabs">
                        {filterTabs.map(tab => (
                            <button
                                key={tab}
                                className={`gallery-tab ${activeFilter === tab ? "active" : ""}`}
                                onClick={() => setActiveFilter(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                        <span className="gallery-count">{filtered.length} Photos</span>
                    </div>

                    {/* Gallery Grid */}
                    <div className="gallery-grid">
                        {filtered.map((img, index) => (
                            <div
                                key={img.id}
                                className="gallery-item"
                                onClick={() => openLightbox(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={e => e.key === "Enter" && openLightbox(index)}
                                aria-label={`View photo: ${img.title}`}
                            >
                                <img src={img.src} alt={img.title} loading="lazy" />
                                <div className="gallery-item-overlay">
                                    <div className="gallery-item-info">
                                        <span className="gallery-item-category">{img.category}</span>
                                        <p className="gallery-item-title">{img.title}</p>
                                        <span className="gallery-item-date">
                                            <i className="bi bi-calendar3" /> {img.date}
                                        </span>
                                    </div>
                                    <div className="gallery-item-zoom">
                                        <i className="bi bi-zoom-in" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lightbox */}
                    {lightboxIndex !== null && (
                        <div
                            className="gallery-lightbox"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Photo lightbox"
                            onKeyDown={handleKeyDown}
                            tabIndex={-1}
                            onClick={e => { if (e.target === e.currentTarget) closeLightbox(); }}
                        >
                            <button
                                className="lightbox-close-btn"
                                onClick={closeLightbox}
                                aria-label="Close lightbox"
                            >
                                <i className="bi bi-x-lg" />
                            </button>

                            <button
                                className="lightbox-nav-btn lightbox-nav-btn--prev"
                                onClick={prevImage}
                                aria-label="Previous photo"
                            >
                                <i className="bi bi-chevron-left" />
                            </button>

                            <div className="lightbox-content">
                                <img
                                    src={filtered[lightboxIndex].src}
                                    alt={filtered[lightboxIndex].title}
                                    className="lightbox-image"
                                />
                                <div className="lightbox-caption">
                                    <span className="lightbox-category">{filtered[lightboxIndex].category}</span>
                                    <p className="lightbox-title">{filtered[lightboxIndex].title}</p>
                                    <span className="lightbox-date">
                                        <i className="bi bi-calendar3" /> {filtered[lightboxIndex].date}
                                    </span>
                                </div>
                                <div className="lightbox-counter">
                                    {lightboxIndex + 1} / {filtered.length}
                                </div>
                            </div>

                            <button
                                className="lightbox-nav-btn lightbox-nav-btn--next"
                                onClick={nextImage}
                                aria-label="Next photo"
                            >
                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PhotoGallery;
