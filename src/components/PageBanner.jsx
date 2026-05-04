import { Link } from "react-router-dom";
import "./PageBanner.scss";

function PageBanner({ title, subtitle, breadcrumbs = [], bgImage }) {
    return (
        <section
            className="page-banner"
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
            aria-label={`${title} page header`}
        >
            <div className="page-banner-overlay" />
            <div className="container page-banner-content">
                <div className="banner-gold-line" />
                <h1 className="banner-title">{title}</h1>
                {subtitle && <p className="banner-subtitle">{subtitle}</p>}
                {breadcrumbs.length > 0 && (
                    <nav className="banner-breadcrumb" aria-label="Breadcrumb">
                        <Link to="/" className="bc-link">
                            <i className="bi bi-house-fill" /> Home
                        </Link>
                        {breadcrumbs.map((bc, i) => (
                            <span key={i}>
                                <i className="bi bi-chevron-right bc-sep" />
                                {i < breadcrumbs.length - 1 ? (
                                    <Link to={bc.path} className="bc-link">{bc.label}</Link>
                                ) : (
                                    <span className="bc-current">{bc.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}
            </div>
        </section>
    );
}

export default PageBanner;
