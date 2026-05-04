import Header from "../components/Header";
import Footer from "../components/Footer";
import "./MainLayout.scss";

function MainLayout({ children }) {
    return (
        <div className="site-wrapper">
            <Header />
            <main id="main-content" className="site-main">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;
