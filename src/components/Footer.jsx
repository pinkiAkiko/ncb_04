import { Link } from "react-router-dom";
import "./Footer.scss";
import { useCountUp } from "../hooks/useCountUp";

const footerLinks = {
    about: [
        { label: "Who We Are", path: "/about" },
        { label: "Origin & Evolution", path: "/historical-background" },
        { label: "Mission, Vision & Motto", path: "/motto-mission-vision" },
        { label: "Hierarchy & Structure", path: "/organization" },
        { label: "Our Offices", path: "/office-locator" },
        { label: "Our Partners", path: "/partners" },
    ],
    legal: [
        { label: "Acts & Rules", path: "/legislations" },
        { label: "Treaties", path: "/international/mlats" },
        { label: "Notifications", path: "/legal/notifications" },
        { label: "Important Judgements", path: "/legal/judgements" },
        { label: "Publications", path: "/media/annual-reports" },
        { label: "NDPS Court Cases", path: "/legal/court-cases" },
    ],
    services: [
        { label: "RTI & Vigilance", path: "/rti" },
        { label: "Tenders", path: "/tenders" },
        { label: "Join NCB", path: "/career/vacancies" },
        { label: "Grievance Redressal", path: "/grievance" },
        { label: "Alert Awareness", path: "/alert-awareness" },
        { label: "E-Pledge", path: "/e-pledge" },
    ],
    connect: [
        { label: "Contact Us", path: "/contact" },
        { label: "Submit a Tip (MANAS)", href: "https://ncbmanas.gov.in/", external: true },
        { label: "NIDAAN Portal", href: "https://nidaan.ncb.gov.in/", external: true },
        { label: "NCORD", href: "https://ncord.gov.in/", external: true },
        { label: "Drug Rehab Centres", path: "/rehabilitation-centres" },
        { label: "Citizen Charter", path: "/citizen-charter" },
    ],
};

const policies = [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Use", path: "/terms" },
    { label: "Disclaimer", path: "/disclaimer" },
    { label: "Accessibility Statement", path: "/accessibility" },
    { label: "Hyperlink Policy", path: "/hyperlink-policy" },
    { label: "Copyright Policy", path: "/copyright" },
    { label: "Citizen Charter", path: "/citizen-charter" },
    { label: "RTI", path: "/rti" },
    { label: "Sitemap", path: "/sitemap" },
    { label: "FAQ", path: "/faq" },
];

function Footer() {
    const { ref: visitorRef, displayed: visitorCount } = useCountUp("2,84,19,670", 2800);

    const handleExternalLink = (e, url) => {
        e.preventDefault();
        if (window.confirm("You are being redirected to an external website. Continue?")) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <footer className="ncb-footer">
            {/* ── Newsletter Band ────────────────────────────── */}
            <div className="footer-newsletter-band">
                <div className="container newsletter-inner">
                    <div className="newsletter-text">
                        <i className="bi bi-envelope-open-heart" />
                        <div>
                            <span className="nl-heading">Stay Updated</span>
                            <span className="nl-sub">Subscribe to NCB newsletters, alerts, and press releases</span>
                        </div>
                    </div>
                    <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email address" aria-label="Email for newsletter" required />
                        <button type="submit">Subscribe <i className="bi bi-send-fill" /></button>
                    </form>
                </div>
            </div>

            {/* ── Main Footer ───────────────────────────────── */}
            <div className="footer-main">
                <div className="container footer-main-grid">
                    {/* Brand col */}
                    <div className="footer-brand-col">
                        <div className="footer-brand-row">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                                alt="Emblem of India"
                                className="footer-emblem"
                            />
                            <img src="/logo.svg" alt="NCB Logo" className="footer-logo" />
                        </div>
                        <h2 className="footer-org-name">Narcotics Control Bureau</h2>
                        <p className="footer-org-sub">Ministry of Home Affairs, Government of India</p>
                        <p className="footer-desc">
                            Apex coordinating agency for drug law enforcement. Committed to a Drug-Free India through enforcement, intelligence, and international cooperation.
                        </p>
                        <div className="footer-helpline-box">
                            <i className="bi bi-telephone-fill" />
                            <div>
                                <span className="hl-label">MANAS Helpline</span>
                                <a href="tel:1933" className="hl-number">1933</a>
                            </div>
                        </div>
                        <div className="footer-social-row">
                            <span className="footer-social-label">Follow Us:</span>
                            <a href="https://x.com/narcoticsbureau" target="_blank" rel="noopener noreferrer" className="social-icon-btn social-icon-btn--x" aria-label="X / Twitter"><i className="bi bi-twitter-x" /></a>
                            <a href="https://www.facebook.com/narcoticscontrolbureauindia" target="_blank" rel="noopener noreferrer" className="social-icon-btn social-icon-btn--fb" aria-label="Facebook"><i className="bi bi-facebook" /></a>
                            <a href="https://www.youtube.com/channel/UCb3-9pF4m0BbLpW-yfR1Ipg" target="_blank" rel="noopener noreferrer" className="social-icon-btn social-icon-btn--yt" aria-label="YouTube"><i className="bi bi-youtube" /></a>
                            <a href="https://www.instagram.com/india.ncb" target="_blank" rel="noopener noreferrer" className="social-icon-btn social-icon-btn--ig" aria-label="Instagram"><i className="bi bi-instagram" /></a>
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="footer-links-group">
                        <h3 className="footer-col-heading">About NCB</h3>
                        <ul className="footer-link-list">
                            {footerLinks.about.map(l => (
                                <li key={l.path}>
                                    <Link to={l.path} className="footer-link">
                                        <i className="bi bi-chevron-right" />{l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h3 className="footer-col-heading">Legal</h3>
                        <ul className="footer-link-list">
                            {footerLinks.legal.map(l => (
                                <li key={l.path}>
                                    <Link to={l.path} className="footer-link">
                                        <i className="bi bi-chevron-right" />{l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h3 className="footer-col-heading">Services</h3>
                        <ul className="footer-link-list">
                            {footerLinks.services.map(l => (
                                <li key={l.path}>
                                    <Link to={l.path} className="footer-link">
                                        <i className="bi bi-chevron-right" />{l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h3 className="footer-col-heading">Quick Connect</h3>
                        <ul className="footer-link-list">
                            {footerLinks.connect.map(l => (
                                <li key={l.path || l.href}>
                                    {l.external ? (
                                        <a href={l.href} className="footer-link" onClick={e => handleExternalLink(e, l.href)}>
                                            <i className="bi bi-chevron-right" />{l.label}
                                        </a>
                                    ) : (
                                        <Link to={l.path} className="footer-link">
                                            <i className="bi bi-chevron-right" />{l.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="footer-visitor-box">
                            <i className="bi bi-people-fill" />
                            <div>
                                <span className="vis-label">Visitors</span>
                                <span className="vis-count" ref={visitorRef}>{visitorCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Policy Bar ────────────────────────────────── */}
            <div className="footer-policy-bar">
                <div className="container policy-bar-inner">
                    <div className="policy-links">
                        {policies.map((p, i) => (
                            <span key={p.path} className="policy-item">
                                <Link to={p.path} className="policy-link">{p.label}</Link>
                                {i < policies.length - 1 && <span className="policy-sep">|</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </div>


            {/* ── Bottom Bar ────────────────────────────────── */}
            <div className="footer-bottom-bar">
                <div className="container bottom-bar-inner">
                    <span className="footer-copyright">
                        © {new Date().getFullYear()} Narcotics Control Bureau, Government of India. All Rights Reserved.
                    </span>
                    <span className="footer-last-updated">
                        <i className="bi bi-clock-fill" /> Last Updated: June 2026
                    </span>
                    <span className="footer-website-owner">
                        <i className="bi bi-building" /> Website Owned by: NCB, MHA
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
