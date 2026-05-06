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
                    <nav className="banner-breadcrumb" aria-label="Breadcrumb" role="navigation">
                        <ol
                            className="bc-list"
                            itemScope
                            itemType="https://schema.org/BreadcrumbList"
                        >
                            <li
                                className="bc-item"
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                <Link to="/" className="bc-link" itemProp="item">
                                    <i className="bi bi-house-fill" aria-hidden="true" />
                                    <span itemProp="name">Home</span>
                                </Link>
                                <meta itemProp="position" content="1" />
                            </li>
                            {breadcrumbs.map((bc, i) => (
                                <li
                                    key={i}
                                    className="bc-item"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="https://schema.org/ListItem"
                                >
                                    <i className="bi bi-chevron-right bc-sep" aria-hidden="true" />
                                    {i < breadcrumbs.length - 1 ? (
                                        <Link to={bc.path} className="bc-link" itemProp="item">
                                            <span itemProp="name">{bc.label}</span>
                                        </Link>
                                    ) : (
                                        <span
                                            className="bc-current"
                                            aria-current="page"
                                            itemProp="name"
                                        >{bc.label}</span>
                                    )}
                                    <meta itemProp="position" content={i + 2} />
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}
            </div>
        </section>
    );
}

export default PageBanner;
