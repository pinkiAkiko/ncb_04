import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import EnforcementAnalytics from "../components/EnforcementAnalytics";

import Banner_1 from "../assets/slider/Banner_1.png";
import Banner_2 from "../assets/slider/Banner_2.png";
import Banner_3 from "../assets/slider/Banner_3.png";
import Banner_4 from "../assets/slider/Banner_4.png";
import Banner_5 from "../assets/slider/Banner_5.png";
import dgProfile from "../assets/profile.jpeg";
import g1 from "../assets/gallary-img/10trainee-bsf.jpeg";
import g2 from "../assets/gallary-img/11apppa-51batch.jpeg";
import g3 from "../assets/gallary-img/12induction-training-si.jpeg";
import g4 from "../assets/gallary-img/1mou-ncb-capt-bprd.jpeg";
import g5 from "../assets/gallary-img/2mou-ncb-bprdcapt.jpeg";
import g6 from "../assets/gallary-img/3mou-ncb-capt.jpeg";
import g7 from "../assets/gallary-img/3ncbdg.jpeg";
import g8 from "../assets/gallary-img/4antf.jpeg";
import g9 from "../assets/gallary-img/4ncbadg.jpeg";
import g10 from "../assets/gallary-img/5martime.jpeg";
import c1 from "../assets/criminal/c1.png";
import c2 from "../assets/criminal/c2.png";
import c3 from "../assets/criminal/c3.png";
import manasLogo from "../assets/link-img/MANAS_LogoE.jpeg";
import pmnrfLogo from "../assets/link-img/PMNRF.png";
import dataGovLogo from "../assets/link-img/data-gov.png";
import goLogo from "../assets/link-img/go.png";
import iigLogo from "../assets/link-img/iig.png";
import indiaGovLogo from "../assets/link-img/india-gov.png";
import myGovLogo from "../assets/link-img/mygov.png";
import nidaanLogo from "../assets/link-img/niddan.png";
import swachhLogo from "../assets/link-img/swach-bharat.png";
import ncbLogo from "../assets/logo.svg";

const slides = [
    {
        id: 1,
        image: Banner_1,
        badge: "National Security",
        title: "Securing the Nation\nfrom Narcotics",
        description: "The apex coordinating agency committed to a Drug-Free India through persistent enforcement, intelligence and awareness.",
        cta: { label: "Learn More", path: "/about" },
    },
    {
        id: 2,
        image: Banner_2,
        badge: "Intelligence & Technology",
        title: "Modern Intelligence\n& Enforcement",
        description: "Utilizing state-of-the-art technology and intelligence networks to dismantle global drug trafficking rings.",
        cta: { label: "Our Operations", path: "/coordination" },
    },
    {
        id: 3,
        image: Banner_3,
        badge: "Community Outreach",
        title: "Awareness &\nCommunity Engagement",
        description: "Empowering the youth and communities to resist drug abuse through nationwide educational programs.",
        cta: { label: "Awareness Programs", path: "/mou" },
    },
    {
        id: 4,
        image: Banner_4,
        badge: "Community Outreach",
        title: "Awareness &\nCommunity Engagement",
        description: "Empowering the youth and communities to resist drug abuse through nationwide educational programs.",
        cta: { label: "Awareness Programs", path: "/mou" },
    },
    {
        id: 5,
        image: Banner_5,
        badge: "Community Outreach",
        title: "Awareness &\nCommunity Engagement",
        description: "Empowering the youth and communities to resist drug abuse through nationwide educational programs.",
        cta: { label: "Awareness Programs", path: "/mou" },
    },
];

const missionItems = [
    {
        icon: "bi-shield-shaded",
        label: "Our Mission",
        heading: "Zero Tolerance\nto Drug Trade",
        body: "Stringent enforcement of the NDPS Act to dismantle illicit networks and prevent the flow of narcotics into India, coordinating with all state agencies and international bodies.",
        path: "/motto-mission-vision",
    },
    {
        icon: "bi-bullseye",
        label: "Our Goal",
        heading: "A Drug-Free\nIndia",
        body: "To reduce the demand and supply of drugs in India through comprehensive enforcement, rehabilitation support, international cooperation, and community-driven awareness campaigns.",
        path: "/motto-mission-vision",
    },
    {
        icon: "bi-eye-fill",
        label: "Our Vision",
        heading: "Resilient &\nIntelligence-Led",
        body: "To be a world-class narcotics control agency leveraging technology, data analytics, and inter-agency coordination to stay ahead of evolving drug trafficking threats.",
        path: "/motto-mission-vision",
    },
];

const latestNews = [
    { date: "20 May 2026", cat: "Operations", title: "NCB conducts major drug seizure in Punjab — 45 KG heroin recovered from cross-border network", isAlert: false },
    { date: "15 May 2026", cat: "Alert", title: "Public warning: Rise in synthetic drug trafficking through darknet marketplaces detected", isAlert: true },
    { date: "12 May 2026", cat: "Recruitment", title: "New recruitment notification released for Deputy Superintendent of Narcotics positions", isAlert: false },
    { date: "08 May 2026", cat: "International", title: "NCB signs MoU with UNODC for enhanced drug law enforcement capacity building", isAlert: false },
    { date: "03 May 2026", cat: "Operations", title: "Operation Clean Sweep: Multi-state drug bust results in 14 arrests across three zones", isAlert: false },
    { date: "28 Apr 2026", cat: "Alert", title: "Advisory: Beware of online illegal pharmacy fraud — report to helpline 1933", isAlert: true },
    { date: "22 Apr 2026", cat: "Training", title: "NCB Academy concludes darknet investigation training for 84 intelligence officers", isAlert: false },
    { date: "18 Apr 2026", cat: "MoU", title: "MoU signed with Indian Coast Guard for enhanced maritime surveillance on drug trafficking", isAlert: false },
];

const recentEvents = [
    {
        date: { day: "26", month: "Jun" },
        title: "International Anti-Drug Day — National Awareness Campaign 2026",
        location: "All Zonal HQs",
        category: "Annual Event",
        image: g1,
    },
    {
        date: { day: "14", month: "Jun" },
        title: "High-level inter-agency NCORD review meeting chaired by Director General",
        location: "NCB HQ, New Delhi",
        category: "Meeting",
        image: g7,
    },
    {
        date: { day: "05", month: "Jun" },
        title: "Awareness seminar on substance abuse prevention at Delhi University campuses",
        location: "New Delhi",
        category: "Awareness",
        image: g2,
    },
    {
        date: { day: "28", month: "May" },
        title: "Joint maritime surveillance drill with Indian Navy and Coast Guard",
        location: "Mumbai",
        category: "Operations",
        image: g10,
    },
];


const portals = [
    { name: "NIDAAN", url: "https://nidaan.ncb.gov.in/", logo: nidaanLogo },
    { name: "MANAS", url: "https://www.narcoordindia.gov.in/", logo: manasLogo },
    { name: "Swachh Bharat", url: "https://swachhbharatmission.gov.in/", logo: swachhLogo },
    { name: "PMNRF", url: "https://pmnrf.gov.in/", logo: pmnrfLogo },
    { name: "Data.gov.in", url: "https://data.gov.in/", logo: dataGovLogo },
    { name: "MyGov", url: "https://www.mygov.in/", logo: myGovLogo },
    { name: "India.gov.in", url: "https://www.india.gov.in/", logo: indiaGovLogo },
    { name: "G-20", url: "http://goidirectory.nic.in/", logo: goLogo },
    { name: "IIG", url: "https://iig.gov.in/", logo: iigLogo },
    { name: "NCB", url: "https://ncb.gov.in/", logo: ncbLogo },
];

const aboutFacts = [
    { icon: "bi-calendar-check", value: "1986", label: "Established" },
    { icon: "bi-geo-alt-fill", value: "9", label: "Zonal Offices" },
    { icon: "bi-globe2", value: "40+", label: "Countries Partnered" },
    { icon: "bi-people-fill", value: "NDPS", label: "Primary Mandate" },
];

const wantedPreview = [
    { name: "Vikram Dayal", alias: "Kana", crime: "International Drug Trafficking", status: "High Alert", photo: c1 },
    { name: "Harpreet Singh", alias: "Monu", crime: "Narco-Terror Network Operations", status: "Wanted", photo: c2 },
    { name: "Fahim Raza", alias: "Chikna", crime: "Cross-Border Heroin Smuggling", status: "Fugitive", photo: c3 },
];

const socialEmbeds = [
    {
        platform: "Twitter / X", icon: "bi-twitter-x", color: "#1DA1F2",
        profileUrl: "https://twitter.com/NCBIndia",
        custom: "twitter",
        tweets: [
            { text: "NCB conducts mega drug bust in Punjab — 45 KG heroin seized from cross-border network. 14 arrested. #DrugFreeIndia", date: "2 May 2026", likes: "1.8K", rt: "634" },
            { text: "Public Advisory: Rise in synthetic drug trafficking via darknet. Report to MANAS Helpline 1933. #MANAS #NCBAlert", date: "28 Apr 2026", likes: "3.2K", rt: "1.1K" },
            { text: "NCB signs MoU with UNODC for enhanced drug law enforcement in South Asia. #InternationalCooperation", date: "22 Apr 2026", likes: "956", rt: "287" },
        ],
    },
    {
        platform: "Facebook", icon: "bi-facebook", color: "#1877F2",
        profileUrl: "https://www.facebook.com/narcoticscontrolbureauindia",
        src: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnarcoticscontrolbureauindia&tabs=timeline&width=340&height=380&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false",
    },
    {
        platform: "YouTube", icon: "bi-youtube", color: "#FF0000",
        profileUrl: "https://www.youtube.com/@NCBIndiaOfficial",
        custom: "youtube",
        videos: [
            { img: g10, title: "Operation Samudragupt: Maritime Drug Seizure Documentary", views: "1.2L views", duration: "12:34" },
            { img: g1, title: "NCB Director General's Message — Anti-Drug Day 2026", views: "84K views", duration: "8:15" },
            { img: g8, title: "How NCB Uses AI to Track Drug Trafficking Networks", views: "2.1L views", duration: "22:07" },
        ],
    },
    {
        platform: "Instagram", icon: "bi-instagram", color: "#E1306C",
        profileUrl: "https://www.instagram.com/ncb_india/",
        src: "https://www.instagram.com/ncb_india/embed/",
    },
];


function Home() {
    const [slideIdx, setSlideIdx] = useState(0);
    const [slideAnimating, setSlideAnimating] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [alertIdx, setAlertIdx] = useState(0);
    const [alertVisible, setAlertVisible] = useState(true);
    const MWT_TOTAL = wantedPreview.length; // 3
    const loopItems = [...wantedPreview, ...wantedPreview, ...wantedPreview]; // 9
    const [mwtIdx, setMwtIdx] = useState(MWT_TOTAL); // start at middle copy
    const [mwtNoTransition, setMwtNoTransition] = useState(false);

    const mwtMove = (dir) => {
        setMwtNoTransition(false);
        setMwtIdx(prev => {
            const next = prev + dir;
            if (next < MWT_TOTAL || next >= MWT_TOTAL * 2) {
                setTimeout(() => {
                    setMwtNoTransition(true);
                    setMwtIdx(next < MWT_TOTAL ? next + MWT_TOTAL : next - MWT_TOTAL);
                    requestAnimationFrame(() => requestAnimationFrame(() => setMwtNoTransition(false)));
                }, 520);
            }
            return next;
        });
    };

    const mwtPrev = () => mwtMove(-1);
    const mwtNext = () => mwtMove(1);

    useEffect(() => {
        const t = setInterval(() => mwtMove(1), 4000);
        return () => clearInterval(t);
    }, []);
    const [newsHovered, setNewsHovered] = useState(false);
    const newsRef = useRef(null);
    const portalsRef = useRef(null);
    const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

    // ── Scroll-reveal refs ────────────────────────────────
    const missionRef = useStaggerReveal(".mission-card", "is-visible", 100);
    const dgImgRef = useScrollReveal("is-visible");
    const dgTextRef = useScrollReveal("is-visible");
    const newsRef2 = useScrollReveal("is-visible");
    const tilesRef = useStaggerReveal(".quick-tile", "is-visible", 70);
    const galleryRef = useScrollReveal("is-visible");
    const portalsSecRef = useScrollReveal("is-visible");
    const aboutStripRef = useScrollReveal("is-visible");
    const mwtRef = useScrollReveal("is-visible");
    const socialRef = useScrollReveal("is-visible");
    const galleryRowRef = useRef(null);
    const scrollGallery = (dir) => {
        const cardWidth = galleryRowRef.current?.firstElementChild?.offsetWidth || 240;
        galleryRowRef.current?.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
    };
    const sfCarouselRef = useRef(null);
    const scrollSocial = (dir) => {
        const cardWidth = sfCarouselRef.current?.firstElementChild?.offsetWidth || 340;
        sfCarouselRef.current?.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
    };

    const goToSlide = useCallback((idx) => {
        if (slideAnimating) return;
        setSlideAnimating(true);
        setSlideIdx((idx + slides.length) % slides.length);
        setTimeout(() => setSlideAnimating(false), 700);
    }, [slideAnimating]);

    const nextSlide = useCallback(() => goToSlide(slideIdx + 1), [slideIdx, goToSlide]);
    const prevSlide = useCallback(() => goToSlide(slideIdx - 1), [slideIdx, goToSlide]);

    useEffect(() => {
        if (!isPlaying) return;
        const t = setInterval(nextSlide, 5500);
        return () => clearInterval(t);
    }, [isPlaying, nextSlide]);

    // Alert one-by-one rotation with fade
    useEffect(() => {
        const t = setInterval(() => {
            setAlertVisible(false);
            setTimeout(() => {
                setAlertIdx(i => (i + 1) % latestNews.length);
                setAlertVisible(true);
            }, 420);
        }, 4000);
        return () => clearInterval(t);
    }, []);

    // News auto-scroll (used elsewhere on page)
    useEffect(() => {
        let af;
        const scroll = () => {
            if (newsRef.current && !newsHovered) {
                newsRef.current.scrollTop += 0.7;
                if (newsRef.current.scrollTop >= newsRef.current.scrollHeight / 2)
                    newsRef.current.scrollTop = 0;
            }
            af = requestAnimationFrame(scroll);
        };
        af = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(af);
    }, [newsHovered]);

    // Portals auto-scroll
    useEffect(() => {
        let af;
        const scroll = () => {
            if (portalsRef.current) {
                portalsRef.current.scrollLeft += 0.8;
                if (portalsRef.current.scrollLeft >= portalsRef.current.scrollWidth / 2)
                    portalsRef.current.scrollLeft = 0;
            }
            af = requestAnimationFrame(scroll);
        };
        af = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(af);
    }, []);


    useEffect(() => { document.title = "Home | Narcotics Control Bureau — Government of India"; }, []);

    const handleExternalLink = (e, url) => {
        e.preventDefault();
        if (window.confirm("You are being redirected to an external website. Continue?"))
            window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="home-page">

            {/* ═══════════════════════════════════════════════════
                1. HERO — Two-column: carousel + alerts panel
                ═══════════════════════════════════════════════════ */}
            <section className="hero-dark" aria-label="NCB Hero">
                <div className="container hero-layout">

                    {/* ── LEFT: Image Carousel ── */}
                    <div className="hero-carousel-col">
                        <div className="hero-galaxy-card">
                            <div className="hgc-slides">
                                {slides.map((s, i) => (
                                    <div key={s.id} className={`hgc-slide ${i === slideIdx ? "active" : ""}`}>
                                        <img src={s.image} alt={s.badge} />
                                    </div>
                                ))}
                            </div>
                            <div className="hgc-bottom">
                                <div className="hgc-counter">
                                    <span className="hgc-count-cur">{String(slideIdx + 1).padStart(2, '0')}</span>
                                    <span className="hgc-count-sep">/</span>
                                    <span className="hgc-count-tot">{String(slides.length).padStart(2, '0')}</span>
                                </div>
                                <div className="hgc-dots">
                                    {slides.map((_, i) => (
                                        <button key={i} className={`hgc-dot ${i === slideIdx ? "active" : ""}`}
                                            onClick={() => goToSlide(i)} aria-label={`Slide ${i + 1}`} />
                                    ))}
                                </div>
                                <button className="hgc-play" onClick={() => setIsPlaying(p => !p)}
                                    aria-label={isPlaying ? "Pause" : "Play"}>
                                    <i className={`bi bi-${isPlaying ? "pause-fill" : "play-fill"}`} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Alerts Panel ── */}
                    <div className="hero-alerts-col">
                        <div className="hero-alerts-panel">
                            <div className="hap-header">
                                <div className="hap-header-left">
                                    <i className="bi bi-bell-fill hap-bell" />
                                    <span className="hap-header-label">Latest Updates</span>
                                </div>
                                <Link to="/media/latest-news" className="hap-view-all">
                                    All <i className="bi bi-arrow-right" />
                                </Link>
                            </div>

                            <div className="hap-featured">
                                <div className={`hap-featured-inner ${alertVisible ? "hap-visible" : "hap-hidden"}`}>
                                    <span className={`hap-cat ${latestNews[alertIdx].isAlert ? "hap-cat--alert" : ""}`}>
                                        {latestNews[alertIdx].isAlert && <i className="bi bi-exclamation-triangle-fill" />}
                                        {latestNews[alertIdx].cat}
                                    </span>
                                    <p className="hap-featured-title">{latestNews[alertIdx].title}</p>
                                    <span className="hap-featured-date">
                                        <i className="bi bi-calendar3" /> {latestNews[alertIdx].date}
                                    </span>
                                </div>
                                <div className="hap-pips">
                                    {latestNews.map((_, i) => (
                                        <button key={i} className={`har-pip ${i === alertIdx ? "active" : ""}`}
                                            onClick={() => { setAlertVisible(false); setTimeout(() => { setAlertIdx(i); setAlertVisible(true); }, 420); }}
                                            aria-label={`Alert ${i + 1}`} />
                                    ))}
                                </div>
                            </div>

                            <Link to="/media/latest-news" className="hap-see-all">
                                See All Alerts <i className="bi bi-arrow-right" />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                2. MISSION / GOAL / VISION — NDLEA card grid
                ═══════════════════════════════════════════════════ */}
            <section className="mission-section page-section" ref={missionRef}>
                <div className="container">
                    <div className="section-header-row">
                        <span className="section-label">What We Stand For</span>
                        <h2 className="section-title">Mission, Goal &amp; Vision</h2>
                        <div className="section-divider" />
                    </div>

                    <div className="mission-cards-grid">
                        {missionItems.map((item) => (
                            <div key={item.label} className="mission-card reveal">
                                <div className="mc-icon-box">
                                    <i className={`bi ${item.icon}`} />
                                </div>
                                <div className="mc-label">{item.label}</div>
                                <h3 className="mc-heading">
                                    {item.heading.split("\n").map((l, j) => <span key={j}>{l}<br /></span>)}
                                </h3>
                                <p className="mc-body">{item.body}</p>
                                <Link to={item.path} className="mc-read-more">
                                    Read More <i className="bi bi-arrow-right" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                3. DG MESSAGE — BSF-inspired portrait + quote
                ═══════════════════════════════════════════════════ */}
            <section className="dg-section page-section--dark page-section">
                <div className="container dg-container">
                    <div className="dg-image-col reveal-left" ref={dgImgRef}>
                        <div className="dg-portrait-frame">
                            <img src={dgProfile} alt="Director General, NCB" />
                            <div className="dg-frame-accent" />
                        </div>
                        <div className="dg-badge">
                            <i className="bi bi-star-fill" />
                            <span>Director General</span>
                        </div>
                    </div>

                    <div className="dg-text-col reveal-right" ref={dgTextRef}>
                        <span className="section-label">Leadership</span>
                        <h2 className="section-title section-title--white">Director General's Message</h2>
                        <div className="section-divider" />
                        <div className="dg-quote-block">
                            <i className="bi bi-quote dg-quote-icon" />
                            <blockquote className="dg-quote-text">
                                "The Narcotics Control Bureau stands as the guardian of India's future generations. Our resolve to dismantle drug trafficking networks, protect the vulnerable, and build a drug-free society remains unwavering. Through intelligence-led operations, international cooperation, and community engagement, we shall prevail."
                            </blockquote>
                        </div>
                        <div className="dg-signature">
                            <span className="dg-name">Shri Anurag Garg, IPS</span>
                            <span className="dg-designation">Director General, Narcotics Control Bureau</span>
                        </div>
                        <Link to="/about" className="dg-read-more-btn">
                            Read Full Message <i className="bi bi-arrow-right" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                3b. ABOUT NCB — overview strip
                ═══════════════════════════════════════════════════ */}
            <section className="about-strip-section page-section page-section--gray">
                <div className="container">
                    <div className="about-strip-grid reveal" ref={aboutStripRef}>
                        <div className="about-strip-text">
                            <span className="section-label">Who We Are</span>
                            <h2 className="section-title">About NCB</h2>
                            <div className="section-divider" />
                            <p className="about-strip-desc">
                                The Narcotics Control Bureau (NCB) is India's apex law enforcement and intelligence agency
                                responsible for combating drug trafficking and the abuse of illegal substances. Established
                                under the NDPS Act, 1985, NCB coordinates drug law enforcement among state and central agencies,
                                and maintains partnerships with international bodies including UNODC, Interpol, and bilateral
                                enforcement agencies across 40+ countries.
                            </p>
                            <Link to="/about" className="about-strip-btn">
                                Read Full Profile <i className="bi bi-arrow-right" />
                            </Link>
                        </div>
                        <div className="about-facts-grid">
                            {aboutFacts.map(f => (
                                <div key={f.label} className="about-fact-card">
                                    <div className="afc-icon"><i className={`bi ${f.icon}`} /></div>
                                    <div className="afc-value">{f.value}</div>
                                    <div className="afc-label">{f.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                4. LIVE ENFORCEMENT ANALYTICS
                ═══════════════════════════════════════════════════ */}
            <EnforcementAnalytics />

            {/* ═══════════════════════════════════════════════════
                5. LATEST NEWS + RECENT EVENTS — NDLEA layout
                ═══════════════════════════════════════════════════ */}
            <section className="news-events-section page-section page-section--gray">
                <div className="container">
                    <div className="news-events-grid reveal" ref={newsRef2}>
                        {/* Latest News */}
                        <div className="news-col">
                            <div className="col-header-row">
                                <div>
                                    <span className="section-label">Stay Informed</span>
                                    <h2 className="section-title">What's New</h2>
                                    <div className="section-divider" />
                                </div>
                            </div>

                            <div
                                className="news-scroll-box"
                                ref={newsRef}
                                onMouseEnter={() => setNewsHovered(true)}
                                onMouseLeave={() => setNewsHovered(false)}
                            >
                                <ul className="news-list">
                                    {[...latestNews, ...latestNews].map((item, i) => (
                                        <li key={i} className="news-item">
                                            <div className="news-item-left">
                                                <span className={`news-dot ${item.isAlert ? "alert" : ""}`} />
                                                <div className="news-text">
                                                    <span className={`news-cat ${item.isAlert ? "cat-alert" : "cat-default"}`}>{item.cat}</span>
                                                    <p className="news-title">{item.title}</p>
                                                    <span className="news-date"><i className="bi bi-calendar3" /> {item.date}</span>
                                                </div>
                                            </div>
                                            <i className="bi bi-chevron-right news-arrow" />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/media/latest-news" className="view-more-link">
                                View All News <i className="bi bi-arrow-right" />
                            </Link>
                        </div>

                        {/* Recent Events — NDLEA card grid */}
                        <div className="events-col">
                            <div className="col-header-row">
                                <div>
                                    <span className="section-label">What's Happening</span>
                                    <h2 className="section-title">Recent Events</h2>
                                    <div className="section-divider" />
                                </div>
                                <Link to="/media/latest-news" className="view-all-link">View All</Link>
                            </div>

                            <div className="events-cards-grid">
                                {recentEvents.map((ev, i) => (
                                    <div key={i} className="event-card">
                                        <div className="event-img-wrap">
                                            <img src={ev.image} alt={ev.title} />
                                            <span className="event-cat-tag">{ev.category}</span>
                                        </div>
                                        <div className="event-body">
                                            <div className="event-date-badge">
                                                <span className="ed-day">{ev.date.day}</span>
                                                <span className="ed-month">{ev.date.month}</span>
                                            </div>
                                            <div className="event-info">
                                                <h4 className="event-title">{ev.title}</h4>
                                                <span className="event-location">
                                                    <i className="bi bi-geo-alt-fill" /> {ev.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                6. MOST WANTED FUGITIVES — teaser
                ═══════════════════════════════════════════════════ */}
            <section className="mw-teaser-section page-section page-section--dark">
                <div className="container">
                    <div className="section-header-row between">
                        <div>
                            <span className="section-label">Law Enforcement</span>
                            <h2 className="section-title section-title--white">Most Wanted Fugitives</h2>
                            <div className="section-divider" />
                        </div>
                        <Link to="/red-corner-notice" className="mwt-view-btn">
                            View Most Wanted Fugitives
                        </Link>
                    </div>

                    <div className="mwt-carousel-outer">
                        <button className="mwt-arrow mwt-arrow--prev" onClick={mwtPrev} aria-label="Previous">
                            <i className="bi bi-chevron-left" />
                        </button>

                        <div className="mwt-track-wrap">
                            <div className="mwt-track" style={{ transform: `translateX(-${mwtIdx * (100 / (MWT_TOTAL * 3))}%)`, transition: mwtNoTransition ? "none" : undefined }}>
                                {loopItems.map((w, i) => (
                                    <div key={i} className="mwt-card">
                                        <div className="mwt-img-col">
                                            <div className="mwt-silhouette">
                                                <img src={w.photo} alt={w.name} />
                                            </div>
                                            <span className={`mwt-status mwt-s--${w.status.toLowerCase().replace(" ", "-")}`}>
                                                {w.status}
                                            </span>
                                        </div>
                                        <div className="mwt-info">
                                            <div className="mwt-name">{w.name}</div>
                                            <div className="mwt-alias"><strong>AKA:</strong> {w.alias}</div>
                                            <div className="mwt-crime">
                                                <i className="bi bi-exclamation-triangle-fill" /> {w.crime}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="mwt-arrow mwt-arrow--next" onClick={mwtNext} aria-label="Next">
                            <i className="bi bi-chevron-right" />
                        </button>
                    </div>

                    <div className="mwt-dots">
                        {wantedPreview.map((_, i) => (
                            <button key={i} className={`mwt-dot ${i === mwtIdx % MWT_TOTAL ? "active" : ""}`} onClick={() => { setMwtNoTransition(false); setMwtIdx(MWT_TOTAL + i); }} aria-label={`Go to card ${i + 1}`} />
                        ))}
                    </div>
                    <div className="mwt-tip-bar">
                        <i className="bi bi-telephone-fill" />
                        <span>Have information? Call MANAS Helpline</span>
                        <a href="tel:1933" className="mwt-tip-number">1933</a>
                        <span>or</span>
                        <Link to="/red-corner-notice" className="mwt-tip-btn">
                            Submit Tip Online
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                7. QUICK ACCESS TILES
                ═══════════════════════════════════════════════════ */}
            <section className="quick-access-section page-section page-section--dark">
                <div className="container">
                    <div className="section-header-row center">
                        <span className="section-label">Services</span>
                        <h2 className="section-title">Quick Access</h2>
                        <div className="section-divider section-divider--center" />
                    </div>

                    <div className="quick-tiles-grid" ref={tilesRef}>
                        {[
                            { icon: "bi-shield-exclamation", label: "Red Corner Notice", path: "/red-corner-notice" },
                            { icon: "bi-file-earmark-text", label: "RTI", path: "/rti" },
                            { icon: "bi-hammer", label: "Tenders & Auctions", path: "/tenders" },
                            { icon: "bi-geo-alt-fill", label: "Office Locator", path: "/office-locator" },
                            { icon: "bi-person-check", label: "Career", path: "/career/vacancies" },
                            { icon: "bi-people-fill", label: "Grievance", path: "/grievance" },
                            { icon: "bi-book-fill", label: "Legislation", path: "/legislations" },
                            { icon: "bi-headset", label: "Contact", path: "/contact" },
                        ].map(tile => (
                            <Link key={tile.label} to={tile.path} className="quick-tile reveal">
                                <div className="qt-icon"><i className={`bi ${tile.icon}`} /></div>
                                <span className="qt-label">{tile.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                7. MEDIA GALLERY — card grid
                ═══════════════════════════════════════════════════ */}
            <section className="gallery-section page-section page-section--dark reveal" ref={galleryRef}>
                <div className="container">
                    <div className="section-header-row between">
                        <div>
                            <span className="section-label">Visual Archive</span>
                            <h2 className="section-title section-title--white">Media Gallery</h2>
                            <div className="section-divider" />
                        </div>
                        <Link to="/media/photo-gallery" className="view-all-link-light">View All</Link>
                    </div>

                    <div className="gallery-row-wrapper">
                        <button className="gallery-arrow gallery-arrow--prev" onClick={() => scrollGallery(-1)} aria-label="Previous">
                            <i className="bi bi-chevron-left" />
                        </button>
                        <div className="gallery-row" ref={galleryRowRef}>
                            {galleryImages.map((img, i) => (
                                <div key={i} className="gallery-card">
                                    <img src={img} alt={`Gallery ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="gallery-arrow gallery-arrow--next" onClick={() => scrollGallery(1)} aria-label="Next">
                            <i className="bi bi-chevron-right" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                7b. SOCIAL MEDIA FEED
                ═══════════════════════════════════════════════════ */}
            <section className="social-section page-section page-section--gray">
                <div className="container">
                    <div className="section-header-row center reveal" ref={socialRef}>
                        <span className="section-label">Connect With Us</span>
                        <h2 className="section-title">Follow NCB</h2>
                        <div className="section-divider section-divider--center" />
                        <p className="social-sub">
                            Stay updated with the latest operations, alerts and announcements from NCB India
                        </p>
                    </div>

                    <div className="sf-carousel-wrapper">
                        <button className="sf-nav sf-nav--prev" onClick={() => scrollSocial(-1)} aria-label="Previous">
                            <i className="bi bi-chevron-left" />
                        </button>

                        <div className="sf-carousel" ref={sfCarouselRef}>
                            {socialEmbeds.map(s => (
                                <div className="sf-embed-card" key={s.platform}>
                                    {/* ── Header ── */}
                                    <div className="sf-embed-header" style={{ borderTopColor: s.color }}>
                                        <div className="sf-embed-icon" style={{ background: `${s.color}18`, color: s.color }}>
                                            <i className={`bi ${s.icon}`} />
                                        </div>
                                        <span className="sf-embed-name">{s.platform}</span>
                                        <a href={s.profileUrl} target="_blank" rel="noopener noreferrer"
                                            className="sf-visit-btn" style={{ color: s.color, borderColor: `${s.color}55` }}>
                                            Visit <i className="bi bi-arrow-up-right" />
                                        </a>
                                    </div>

                                    {/* ── Twitter custom card ── */}
                                    {s.custom === "twitter" && (
                                        <div className="sf-custom sf-custom--twitter">
                                            {s.tweets.map((t, i) => (
                                                <div key={i} className="sf-tweet">
                                                    <div className="sf-tweet-avatar">
                                                        <i className="bi bi-twitter-x" />
                                                    </div>
                                                    <div className="sf-tweet-body">
                                                        <span className="sf-tweet-handle">@NCBIndia</span>
                                                        <p className="sf-tweet-text">{t.text}</p>
                                                        <div className="sf-tweet-meta">
                                                            <span><i className="bi bi-calendar3" />{t.date}</span>
                                                            <span><i className="bi bi-heart" />{t.likes}</span>
                                                            <span><i className="bi bi-repeat" />{t.rt}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <a href={s.profileUrl} target="_blank" rel="noopener noreferrer" className="sf-custom-footer" style={{ color: s.color }}>
                                                View all tweets <i className="bi bi-arrow-up-right" />
                                            </a>
                                        </div>
                                    )}

                                    {/* ── YouTube custom card ── */}
                                    {s.custom === "youtube" && (
                                        <div className="sf-custom sf-custom--youtube">
                                            {s.videos.map((v, i) => (
                                                <div key={i} className="sf-video">
                                                    <div className="sf-video-thumb">
                                                        <img src={v.img} alt={v.title} />
                                                        <span className="sf-video-duration">{v.duration}</span>
                                                        <div className="sf-video-play"><i className="bi bi-play-fill" /></div>
                                                    </div>
                                                    <div className="sf-video-info">
                                                        <p className="sf-video-title">{v.title}</p>
                                                        <span className="sf-video-views"><i className="bi bi-eye" />{v.views}</span>
                                                    </div>
                                                </div>
                                            ))}
                                            <a href={s.profileUrl} target="_blank" rel="noopener noreferrer" className="sf-custom-footer" style={{ color: s.color }}>
                                                View channel <i className="bi bi-arrow-up-right" />
                                            </a>
                                        </div>
                                    )}

                                    {/* ── Standard iframe embed ── */}
                                    {!s.custom && (
                                        <iframe
                                            src={s.src}
                                            width="340"
                                            height="380"
                                            style={{ border: "none", display: "block" }}
                                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                            title={s.platform}
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <button className="sf-nav sf-nav--next" onClick={() => scrollSocial(1)} aria-label="Next">
                            <i className="bi bi-chevron-right" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                8. IMPORTANT PORTALS — auto-scroll strip
                ═══════════════════════════════════════════════════ */}
            <section className="portals-section page-section reveal" ref={portalsSecRef}>
                <div className="container">
                    <div className="section-header-row center">
                        <span className="section-label">Government Resources</span>
                        <h2 className="section-title">Important Websites</h2>
                        <div className="section-divider section-divider--center" />
                    </div>

                    <div className="portals-track-wrapper" ref={portalsRef}>
                        <div className="portals-inner-track">
                            {[...portals, ...portals].map((p, i) => (
                                <a
                                    key={i}
                                    href={p.url}
                                    className="portal-item"
                                    onClick={e => handleExternalLink(e, p.url)}
                                    aria-label={`Visit ${p.name} (opens in new tab)`}
                                >
                                    <div className="portal-logo-box">
                                        <img src={p.logo} alt={p.name} draggable="false" />
                                    </div>
                                    <span className="portal-name">{p.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
