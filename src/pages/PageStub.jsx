import PageBanner from "../components/PageBanner";
import "./PageStub.scss";

function PageStub({ title, subtitle, breadcrumbs = [] }) {
    return (
        <div className="page-stub">
            <PageBanner title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
            <div className="page-section">
                <div className="container stub-container">
                    <div className="stub-icon"><i className="bi bi-file-earmark-text" /></div>
                    <h2 className="stub-title">{title}</h2>
                    <p className="stub-desc">This section is currently under construction. Please check back soon or contact us for more information.</p>
                    <div className="stub-helpline">
                        <i className="bi bi-telephone-fill" />
                        <span>For urgent queries: <a href="tel:1933">MANAS Helpline 1933</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageStub;
