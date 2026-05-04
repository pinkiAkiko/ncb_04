import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Header.scss";

const navItems = [
    { label: "Home", path: "/" },
    {
        label: "About", path: "/about",
        children: [
            { label: "Who We Are", path: "/about" },
            { label: "Origin & Evolution", path: "/historical-background" },
            { label: "Mission, Vision & Motto", path: "/motto-mission-vision" },
            { label: "Hierarchy & Structure", path: "/organization" },
            { label: "Our Offices", path: "/office-locator" },
            {
                label: "Our Partners", path: "/partners",
                children: [
                    { label: "Related Links", path: "/related-links" },
                ]
            },
        ]
    },
    {
        label: "Media, News & Events", path: "/media/latest-news",
        children: [
            { label: "Latest News & Events", path: "/media/latest-news" },
            { label: "Important Seizures", path: "/media/seizures" },
            {
                label: "Photo Gallery", path: "/media/photo-gallery",
                children: [
                    { label: "Important Visitors", path: "/media/important-visitors" },
                ]
            },
            { label: "Video Gallery", path: "/media/video-gallery" },
            { label: "Press Releases", path: "/media/press-release" },
            { label: "Former NCB Heads", path: "/media/former-head" },
        ]
    },
    {
        label: "Join NCB", path: "/career/vacancies",
        children: [
            { label: "Current Vacancies", path: "/career/vacancies" },
            { label: "Recruitment Rules", path: "/recruitment-rules" },
        ]
    },
    { label: "Contact Us", path: "/contact" },
    {
        label: "Legal", path: "/legal/notifications",
        children: [
            { label: "Notifications", path: "/legal/notifications" },
            { label: "Important Judgements", path: "/legal/judgements" },
            { label: "Acts & Rules", path: "/legislations" },
            { label: "Treaties", path: "/international/mlats" },
            { label: "Publications", path: "/media/annual-reports" },
            { label: "NDPS Exclusive Court Cases", path: "/legal/court-cases" },
        ]
    },
    { label: "Alert Awareness", path: "/alert-awareness" },
    {
        label: "Others", path: "/others",
        children: [
            { label: "Drug Abuse", path: "/drug-abuse" },
            {
                label: "Employee Corner (APAR)", path: "/employee-corner",
                children: [
                    { label: "IGOT Karmayogi", path: "/igot-karmayogi" },
                ]
            },
            { label: "Vigilance", path: "/vigilance" },
            { label: "Tenders", path: "/tenders" },
        ]
    },
    {
        label: "Navigation", path: "/navigation",
        children: [
            { label: "E-Pledge", path: "/e-pledge" },
            { label: "Disposal of Drugs", path: "/disposal-of-drugs" },
            { label: "RTI & Vigilance", path: "/rti" },
            { label: "Circulars & Orders", path: "/circulars-orders" },
            { label: "Drug Rehabilitation Centres in India", path: "/rehabilitation-centres" },
            { label: "Citizen Charter", path: "/citizen-charter" },
            { label: "Grievance Redressal", path: "/grievance" },
            { label: "Internal Complaint Committee", path: "/internal-complaint-committee" },
            {
                label: "MoUs", path: "/mou",
                children: [
                    { label: "CBSE", path: "/mou/cbse" },
                    { label: "SPANDAN", path: "/mou/spandan" },
                    { label: "RRU", path: "/mou/rru" },
                    { label: "NFSU", path: "/mou/nfsu" },
                ]
            },
        ]
    },
];


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileAccordion, setMobileAccordion] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [lang, setLang] = useState("EN");
    const location = useLocation();
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
    }, [location.pathname]);

    useEffect(() => {
        setOpenSubDropdown(null);
    }, [openDropdown]);

    useEffect(() => {
        const handler = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const handleMobileAccordion = (label) => {
        setMobileAccordion(prev => prev === label ? null : label);
    };

    return (
        <>
            {/* ── Utility Bar ─────────────────────────────────── */}
            <div className="hdr-utility-bar">
                <div className="container hdr-utility-inner">
                    <div className="hdr-utility-left">
                        <a href="#main-content" className="skip-link">Skip to Main Content</a>
                        <span className="utility-gov-tag">
                            <i className="bi bi-globe2" /> Government of India
                        </span>
                        <span className="utility-divider" />
                        <a href="https://ncord.gov.in" target="_blank" rel="noopener noreferrer" className="utility-link">NCORD</a>
                        <a href="https://socialjustice.gov.in" target="_blank" rel="noopener noreferrer" className="utility-link">MoSJE</a>
                        <a href="https://www.unodc.org" target="_blank" rel="noopener noreferrer" className="utility-link">UNODC</a>
                    </div>
                    <div className="hdr-utility-right">
                        <a href="tel:1933" className="utility-helpline">
                            <i className="bi bi-telephone-fill" /> MANAS Helpline: 1933
                        </a>
                        <button className="utility-lang-btn" onClick={() => setLang(l => l === "EN" ? "HI" : "EN")} aria-label="Toggle language">
                            <i className="bi bi-translate" /> {lang === "EN" ? "हिंदी" : "English"}
                        </button>
                        <Link to="/login" className="utility-login-btn">
                            <i className="bi bi-person-circle" /> Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Mobile Helpline Strip (md and below) ─────────── */}
            <div className="hdr-mobile-helpline">
                <div className="hdr-mobile-helpline-left">
                    <i className="bi bi-telephone-fill" />
                    <a href="tel:1933" style={{ color: "inherit" }}>MANAS Helpline: 1933</a>
                </div>
                <div className="hdr-mobile-helpline-right">
                    <button className="utility-lang-btn" onClick={() => setLang(l => l === "EN" ? "HI" : "EN")} aria-label="Toggle language">
                        <i className="bi bi-translate" /> {lang === "EN" ? "हिंदी" : "English"}
                    </button>
                </div>
            </div>

            {/* ── Branding Row ─────────────────────────────────── */}
            <div className={`hdr-brand-row ${scrolled ? "compact" : ""}`}>
                <div className="container hdr-brand-inner">
                    <div className="hdr-brand-left">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                            alt="Emblem of India"
                            className="hdr-emblem"
                        />
                        <div className="hdr-org-text">
                            <span className="hdr-govt">Government of India — Ministry of Home Affairs</span>
                            <span className="hdr-name">Narcotics Control Bureau</span>
                            <span className="hdr-hindi">नारकोटिक्स कंट्रोल ब्यूरो</span>
                        </div>
                    </div>
                    <div className="hdr-brand-right">
                        <div className={`hdr-search-wrap ${searchOpen ? "open" : ""}`}>
                            <button className="hdr-search-toggle" onClick={() => setSearchOpen(s => !s)} aria-label="Search">
                                <i className={`bi bi-${searchOpen ? "x-lg" : "search"}`} />
                            </button>
                            {searchOpen && (
                                <div className="hdr-search-panel">
                                    <input type="text" placeholder="Search NCB website…" autoFocus aria-label="Search" />
                                    <button className="hdr-search-submit" aria-label="Submit search">
                                        <i className="bi bi-arrow-right" />
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="hdr-partner-logos">
                            <a href="https://ncbmanas.gov.in/" target="_blank" rel="noopener noreferrer" className="hdr-partner-link" aria-label="MANAS Portal">
                                <img src="/MANAS_Logo.jpeg" alt="MANAS" className="hdr-partner-img" />
                            </a>
                            <a href="http://web.umang.gov.in/landing/" target="_blank" rel="noopener noreferrer" className="hdr-partner-link" aria-label="UMANG Portal">
                                <img src="/Umang_Logo.png" alt="UMANG" className="hdr-partner-img" />
                            </a>
                        </div>
                        <Link to="/" className="hdr-logo-right" aria-label="NCB Home">
                            <img src="/logo.svg" alt="NCB Logo" className="hdr-ncb-logo-right" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Nav Row ───────────────────────────────────────── */}
            <div className={`hdr-nav-ticker-row ${scrolled ? "sticky" : ""}`} ref={navRef}>
                {/* Main Nav */}
                <nav className="hdr-main-nav" aria-label="Main Navigation">
                    <div className="container nav-inner">
                        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
                            <span /><span /><span />
                        </button>

                        <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`} role="menubar">
                            {/* Mobile header */}
                            <li className="mobile-nav-header">
                                <img src="/logo.svg" alt="NCB" />
                                <span>NCB India</span>
                                <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                                    <i className="bi bi-x-lg" />
                                </button>
                            </li>

                            {navItems.map((item) => (
                                <li
                                    key={item.label}
                                    className={`nav-item-li ${item.children ? "has-dropdown" : ""} ${openDropdown === item.label ? "dropdown-open" : ""}`}
                                    onMouseEnter={() => item.children && window.innerWidth > 992 && setOpenDropdown(item.label)}
                                    onMouseLeave={() => item.children && window.innerWidth > 992 && setOpenDropdown(null)}
                                    role="none"
                                >
                                    {item.children ? (
                                        <>
                                            <button
                                                className={`nav-link-btn ${[...item.children.map(c => c.path), item.path].includes(location.pathname) ? "active" : ""}`}
                                                onClick={() => window.innerWidth <= 992 && handleMobileAccordion(item.label)}
                                                aria-expanded={openDropdown === item.label}
                                                role="menuitem"
                                            >
                                                {item.label}
                                                <i className={`bi bi-chevron-${openDropdown === item.label || mobileAccordion === item.label ? "up" : "down"} nav-arrow`} />
                                            </button>
                                            <ul
                                                className={`nav-dropdown ${(openDropdown === item.label || (menuOpen && mobileAccordion === item.label)) ? "open" : ""}`}
                                                role="menu"
                                            >
                                                {item.children.map(child => {
                                                    const subKey = `${item.label}-${child.label}`;
                                                    return child.children ? (
                                                        <li
                                                            key={child.path}
                                                            role="none"
                                                            className="has-sub-dropdown"
                                                        >
                                                            <button
                                                                className={`dropdown-link dropdown-link--has-sub ${location.pathname === child.path || child.children.some(sc => sc.path === location.pathname) ? "active" : ""}`}
                                                                onClick={() => setOpenSubDropdown(prev => prev === subKey ? null : subKey)}
                                                                role="menuitem"
                                                                aria-expanded={openSubDropdown === subKey}
                                                            >
                                                                <i className="bi bi-chevron-right drop-arrow" />
                                                                {child.label}
                                                                <i className="bi bi-chevron-right sub-arrow" />
                                                            </button>
                                                            <ul
                                                                className={`nav-sub-dropdown ${openSubDropdown === subKey ? "open" : ""}`}
                                                                role="menu"
                                                            >
                                                                {child.children.map(subChild => (
                                                                    <li key={subChild.path} role="none">
                                                                        <NavLink
                                                                            to={subChild.path}
                                                                            className={({ isActive }) => `dropdown-link ${isActive ? "active" : ""}`}
                                                                            role="menuitem"
                                                                            onClick={() => setMenuOpen(false)}
                                                                        >
                                                                            <i className="bi bi-chevron-right drop-arrow" />
                                                                            {subChild.label}
                                                                        </NavLink>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ) : (
                                                        <li key={child.path} role="none">
                                                            <NavLink
                                                                to={child.path}
                                                                className={({ isActive }) => `dropdown-link ${isActive ? "active" : ""}`}
                                                                role="menuitem"
                                                                onClick={() => setMenuOpen(false)}
                                                            >
                                                                <i className="bi bi-chevron-right drop-arrow" />
                                                                {child.label}
                                                            </NavLink>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </>
                                    ) : (
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) => `nav-link-btn ${isActive ? "active" : ""}`}
                                            role="menuitem"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {item.label}
                                        </NavLink>
                                    )}
                                </li>
                            ))}

                            <li className="nav-item-li nav-cta-li">
                                <a
                                    href="https://ncbmanas.gov.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-submit-tip-btn"
                                >
                                    <i className="bi bi-megaphone" /> Submit Tip
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Mobile overlay */}
            {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
        </>
    );
}

export default Header;
