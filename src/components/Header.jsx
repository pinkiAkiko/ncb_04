import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useLanguage, LANGUAGES } from "../context/LanguageContext";
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
            { label: "Our Officers", path: "/our-officers" },
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

// ── Accessibility tool definitions ────────────────────────
const A11Y_TOOLS = [
    { key: "darkContrast", icon: "bi-brightness-high-fill", label: "Dark Contrast" },
    { key: "invert", icon: "bi-circle-half", label: "Invert" },
    { key: "saturation", icon: "bi-droplet-half", label: "Saturation" },
    { key: "fontLarge", icon: null, textIcon: "A+", label: "Text Size +" },
    { key: "fontSmall", icon: null, textIcon: "A−", label: "Text Size −" },
    { key: "highlightLinks", icon: "bi-link-45deg", label: "Highlight Links" },
    { key: "hideImages", icon: "bi-image-slash", label: "Hide Images" },
    { key: "defaultCursor", icon: "bi-cursor-fill", label: "Default Cursor" },
];

const LS = (k) => localStorage.getItem(k) === "1";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileAccordion, setMobileAccordion] = useState(null);
    const [mobileSubAccordion, setMobileSubAccordion] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [a11yOpen, setA11yOpen] = useState(false);

    // ── Accessibility states ───────────────────────────────
    const [fontSize, setFontSize] = useState(() => localStorage.getItem("ncb-font-size") || "normal");
    const [darkContrast, setDarkContrast] = useState(() => LS("ncb-dark-contrast"));
    const [invert, setInvert] = useState(() => LS("ncb-invert"));
    const [saturation, setSaturation] = useState(() => LS("ncb-saturation"));
    const [highlightLinks, setHighlightLinks] = useState(() => LS("ncb-highlight-links"));
    const [hideImages, setHideImages] = useState(() => LS("ncb-hide-images"));
    const [defaultCursor, setDefaultCursor] = useState(() => LS("ncb-default-cursor"));

    const { selectedLang, openModal } = useLanguage();
    const location = useLocation();
    const navRef = useRef(null);

    // ── GIGW: Font-size scaling ────────────────────────────
    useEffect(() => {
        document.documentElement.setAttribute("data-font-size", fontSize);
        localStorage.setItem("ncb-font-size", fontSize);
    }, [fontSize]);

    // ── GIGW: Combined CSS filters (contrast / invert / grayscale) ──
    useEffect(() => {
        const f = [];
        if (darkContrast) f.push("contrast(1.7) brightness(0.85)");
        if (invert) f.push("invert(1) hue-rotate(180deg)");
        if (saturation) f.push("grayscale(1)");
        document.documentElement.style.filter = f.join(" ");
        localStorage.setItem("ncb-dark-contrast", darkContrast ? "1" : "0");
        localStorage.setItem("ncb-invert", invert ? "1" : "0");
        localStorage.setItem("ncb-saturation", saturation ? "1" : "0");
    }, [darkContrast, invert, saturation]);

    // ── GIGW: Body-class accessibility features ────────────
    useEffect(() => {
        document.body.classList.toggle("a11y-highlight-links", highlightLinks);
        localStorage.setItem("ncb-highlight-links", highlightLinks ? "1" : "0");
    }, [highlightLinks]);

    useEffect(() => {
        document.body.classList.toggle("a11y-hide-images", hideImages);
        localStorage.setItem("ncb-hide-images", hideImages ? "1" : "0");
    }, [hideImages]);

    useEffect(() => {
        document.body.classList.toggle("a11y-default-cursor", defaultCursor);
        localStorage.setItem("ncb-default-cursor", defaultCursor ? "1" : "0");
    }, [defaultCursor]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setA11yOpen(false);
        setMobileAccordion(null);
        setMobileSubAccordion(null);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = (menuOpen || a11yOpen) ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen, a11yOpen]);

    const toggleMobileAccordion = (label) => { setMobileAccordion(p => p === label ? null : label); setMobileSubAccordion(null); };
    const toggleMobileSubAccordion = (key) => setMobileSubAccordion(p => p === key ? null : key);

    const resetA11y = () => {
        setFontSize("normal");
        setDarkContrast(false);
        setInvert(false);
        setSaturation(false);
        setHighlightLinks(false);
        setHideImages(false);
        setDefaultCursor(false);
    };

    // Map tool key → toggle handler
    const toolHandlers = {
        darkContrast: () => setDarkContrast(v => !v),
        invert: () => setInvert(v => !v),
        saturation: () => setSaturation(v => !v),
        fontLarge: () => setFontSize(s => s === "large" ? "normal" : "large"),
        fontSmall: () => setFontSize(s => s === "small" ? "normal" : "small"),
        highlightLinks: () => setHighlightLinks(v => !v),
        hideImages: () => setHideImages(v => !v),
        defaultCursor: () => setDefaultCursor(v => !v),
    };

    const toolActive = {
        darkContrast: darkContrast,
        invert: invert,
        saturation: saturation,
        fontLarge: fontSize === "large",
        fontSmall: fontSize === "small",
        highlightLinks: highlightLinks,
        hideImages: hideImages,
        defaultCursor: defaultCursor,
    };

    const toolDisabled = {
        fontLarge: fontSize === "small",
        fontSmall: fontSize === "large",
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
                        <button className="utility-lang-btn" onClick={openModal} aria-label="Change language">
                            <i className="bi bi-translate" /> {LANGUAGES.find(l => l.code === selectedLang)?.native ?? "हिंदी"}
                        </button>
                        <Link to="/login" className="utility-login-btn">
                            <i className="bi bi-person-circle" /> Login
                        </Link>
                        <span className="utility-divider" />
                        {/* Accessibility icon + Screen Reader — after Login (GIGW) */}
                        <a
                            href="https://www.nvaccess.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="utility-sr-link"
                            aria-label="Screen Reader information"
                            title="Screen Reader"
                        >
                            <i className="bi bi-ear-fill" aria-hidden="true" />
                            <span>Screen Reader</span>
                        </a>
                        <button
                            className={`utility-a11y-icon-btn${a11yOpen ? " active" : ""}`}
                            onClick={() => setA11yOpen(o => !o)}
                            aria-label="Accessibility options"
                            aria-expanded={a11yOpen}
                            title="Accessibility tools"
                        >
                            <i className="bi bi-universal-access" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile Helpline Strip ─────────────────────────── */}
            <div className="hdr-mobile-helpline">
                <div className="hdr-mobile-helpline-left">
                    <i className="bi bi-telephone-fill" />
                    <a href="tel:1933" style={{ color: "inherit" }}>MANAS Helpline: 1933</a>
                </div>
                <div className="hdr-mobile-helpline-right">
                    <button
                        className={`utility-a11y-icon-btn${a11yOpen ? " active" : ""}`}
                        onClick={() => setA11yOpen(o => !o)}
                        aria-label="Accessibility options"
                        title="Accessibility"
                    >
                        <i className="bi bi-universal-access" aria-hidden="true" />
                    </button>
                    <button className="utility-lang-btn" onClick={openModal} aria-label="Change language">
                        <i className="bi bi-translate" /> {LANGUAGES.find(l => l.code === selectedLang)?.native ?? "हिंदी"}
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
                <nav className="hdr-main-nav" aria-label="Main Navigation">
                    <div className="container nav-inner">
                        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
                            <span /><span /><span />
                        </button>

                        <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`} role="menubar">
                            <li className="mobile-nav-header">
                                <img src="/logo.svg" alt="NCB" />
                                <span>NCB India</span>
                                <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                                    <i className="bi bi-x-lg" />
                                </button>
                            </li>

                            {navItems.map((item) => (
                                <li key={item.label} className={`nav-item-li ${item.children ? "has-dropdown" : ""}`} role="none">
                                    {item.children ? (
                                        <>
                                            <button
                                                className={`nav-link-btn ${[...item.children.map(c => c.path), item.path].includes(location.pathname) ? "active" : ""}`}
                                                onClick={() => { if (window.innerWidth <= 992) toggleMobileAccordion(item.label); }}
                                                aria-haspopup="true"
                                                role="menuitem"
                                            >
                                                {item.label}
                                                <i className={`bi bi-chevron-down nav-arrow ${mobileAccordion === item.label ? "rotated" : ""}`} />
                                            </button>

                                            <ul className={`nav-dropdown ${mobileAccordion === item.label ? "open" : ""}`} role="menu">
                                                {item.children.map(child => {
                                                    const subKey = `${item.label}__${child.label}`;
                                                    return child.children ? (
                                                        <li key={child.path} role="none" className="has-sub-dropdown">
                                                            <button
                                                                className={`dropdown-link dropdown-link--has-sub ${location.pathname === child.path || child.children.some(sc => sc.path === location.pathname) ? "active" : ""}`}
                                                                onClick={() => toggleMobileSubAccordion(subKey)}
                                                                aria-expanded={mobileSubAccordion === subKey}
                                                                role="menuitem"
                                                            >
                                                                <i className="bi bi-chevron-right drop-arrow" />
                                                                {child.label}
                                                                <i className={`bi bi-chevron-right sub-arrow ${mobileSubAccordion === subKey ? "rotated" : ""}`} />
                                                            </button>
                                                            <ul className={`nav-sub-dropdown ${mobileSubAccordion === subKey ? "open" : ""}`} role="menu">
                                                                {child.children.map(subChild => (
                                                                    <li key={subChild.path} role="none">
                                                                        <NavLink
                                                                            to={subChild.path}
                                                                            className={({ isActive }) => `dropdown-link sub-dropdown-link ${isActive ? "active" : ""}`}
                                                                            role="menuitem"
                                                                            onClick={() => setMenuOpen(false)}
                                                                        >
                                                                            <i className="bi bi-dash drop-arrow" />
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
                                <a href="https://ncbmanas.gov.in/" target="_blank" rel="noopener noreferrer" className="nav-submit-tip-btn">
                                    <i className="bi bi-megaphone" /> Submit Tip
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Mobile nav overlay */}
            {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

            {/* ── Accessibility Drawer Overlay ──────────────────── */}
            {a11yOpen && <div className="a11y-drawer-overlay" onClick={() => setA11yOpen(false)} aria-hidden="true" />}

            {/* ── Accessibility Drawer ──────────────────────────── */}
            <div
                className={`a11y-drawer${a11yOpen ? " open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label="Accessibility Settings"
                aria-hidden={!a11yOpen}
            >
                {/* Header */}
                <div className="a11y-drawer-header">
                    <span className="a11y-drawer-title">
                        <i className="bi bi-universal-access" aria-hidden="true" />
                        Accessibility
                    </span>
                    <button className="a11y-drawer-close" onClick={() => setA11yOpen(false)} aria-label="Close">
                        <i className="bi bi-x-lg" />
                    </button>
                </div>

                {/* Screen Reader */}
                <div className="a11y-drawer-section">
                    <span className="a11y-drawer-label">Screen Reader</span>
                    <a
                        href="https://www.nvaccess.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="a11y-drawer-sr-btn"
                        aria-label="Download NVDA Screen Reader"
                    >
                        <i className="bi bi-ear-fill" aria-hidden="true" />
                        <div>
                            <strong>NVDA Screen Reader</strong>
                            <span>Free download for Windows</span>
                        </div>
                        <i className="bi bi-arrow-up-right" aria-hidden="true" />
                    </a>
                </div>

                {/* 8-tile accessibility tools grid */}
                <div className="a11y-drawer-section">
                    <span className="a11y-drawer-label">Accessibility Tools</span>
                    <div className="a11y-tools-grid">
                        {A11Y_TOOLS.map(tool => (
                            <button
                                key={tool.key}
                                className={`a11y-tool-btn${toolActive[tool.key] ? " active" : ""}${toolDisabled[tool.key] ? " disabled" : ""}`}
                                onClick={toolHandlers[tool.key]}
                                disabled={toolDisabled[tool.key]}
                                aria-pressed={toolActive[tool.key]}
                                aria-label={tool.label}
                                title={tool.label}
                            >
                                <div className="a11y-tool-icon-wrap" aria-hidden="true">
                                    {tool.icon
                                        ? <i className={`bi ${tool.icon}`} />
                                        : <span className="a11y-tool-text-icon">{tool.textIcon}</span>
                                    }
                                </div>
                                <span className="a11y-tool-label">{tool.label}</span>
                                {toolActive[tool.key] && <span className="a11y-tool-active-dot" aria-hidden="true" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Reset */}
                <div className="a11y-drawer-section">
                    <button className="a11y-drawer-reset" onClick={resetA11y}>
                        <i className="bi bi-arrow-counterclockwise" aria-hidden="true" /> Reset All to Default
                    </button>
                </div>

                {/* Footer */}
                <div className="a11y-drawer-footer">
                    <p>This website follows GIGW Guidelines (WCAG 2.1 Level AA).</p>
                    <Link to="/accessibility" className="a11y-footer-link" onClick={() => setA11yOpen(false)}>
                        View Accessibility Statement
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;
