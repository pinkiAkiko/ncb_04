import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
    return (
        <div className="not-found-page">
            <div className="container nf-container">
                <div className="nf-code">404</div>
                <div className="nf-divider" />
                <h1 className="nf-title">Page Not Found</h1>
                <p className="nf-desc">The page you are looking for does not exist or is under construction.</p>
                <div className="nf-actions">
                    <Link to="/" className="nf-home-btn">
                        <i className="bi bi-house-fill" /> Go to Homepage
                    </Link>
                    <Link to="/contact" className="nf-contact-btn">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
