import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RTI from "../pages/RTI";
import Tenders from "../pages/Tenders";
import OfficeLocator from "../pages/OfficeLocator";
import RedCornerNotice from "../pages/RedCornerNotice";
import OurOfficers from "../pages/OurOfficers";
import NotFound from "../pages/NotFound";
import PageStub from "../pages/PageStub";

const stub = (title, subtitle, breadcrumbs) => (
    <MainLayout>
        <PageStub title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
    </MainLayout>
);

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />

            {/* ── About ────────────────────────────────────── */}
            <Route path="/about"               element={<MainLayout><About /></MainLayout>} />
            <Route path="/historical-background" element={stub("Origin & Evolution", "NCB's journey since 1986", [{ label: "About", path: "/about" }, { label: "Origin & Evolution", path: "/historical-background" }])} />
            <Route path="/motto-mission-vision"  element={stub("Mission, Vision & Motto", "The ethos that guides NCB", [{ label: "About", path: "/about" }, { label: "Mission, Vision & Motto", path: "/motto-mission-vision" }])} />
            <Route path="/organization"          element={stub("Hierarchy & Structure", "NCB's organizational hierarchy", [{ label: "About", path: "/about" }, { label: "Hierarchy & Structure", path: "/organization" }])} />
            <Route path="/office-locator"        element={<MainLayout><OfficeLocator /></MainLayout>} />
            <Route path="/our-officers"          element={<MainLayout><OurOfficers /></MainLayout>} />
            <Route path="/partners"              element={stub("Our Partners", "NCB's national and international partners", [{ label: "About", path: "/about" }, { label: "Our Partners", path: "/partners" }])} />

            {/* ── Media, News & Events ─────────────────────── */}
            <Route path="/media/latest-news"       element={stub("Latest News & Events", "Press releases and news updates", [{ label: "Media", path: "/media/latest-news" }, { label: "Latest News", path: "/media/latest-news" }])} />
            <Route path="/media/seizures"          element={stub("Important Seizures", "Significant drug seizure operations", [{ label: "Media", path: "/media/latest-news" }, { label: "Important Seizures", path: "/media/seizures" }])} />
            <Route path="/media/photo-gallery"     element={stub("Photo Gallery", "Photos from NCB operations and events", [{ label: "Media", path: "/media/latest-news" }, { label: "Photo Gallery", path: "/media/photo-gallery" }])} />
            <Route path="/media/important-visitors" element={stub("Important Visitors", "Distinguished visitors to NCB", [{ label: "Media", path: "/media/latest-news" }, { label: "Important Visitors", path: "/media/important-visitors" }])} />
            <Route path="/media/video-gallery"     element={stub("Video Gallery", "Official videos from NCB", [{ label: "Media", path: "/media/latest-news" }, { label: "Video Gallery", path: "/media/video-gallery" }])} />
            <Route path="/media/press-release"     element={stub("Press Releases", "Official press releases from NCB", [{ label: "Media", path: "/media/latest-news" }, { label: "Press Releases", path: "/media/press-release" }])} />
            <Route path="/media/former-head"       element={stub("Former NCB Heads", "Directors General who led NCB", [{ label: "Media", path: "/media/latest-news" }, { label: "Former NCB Heads", path: "/media/former-head" }])} />
            <Route path="/media/annual-reports"    element={stub("Annual Reports", "NCB Annual Reports", [{ label: "Media", path: "/media/latest-news" }, { label: "Annual Reports", path: "/media/annual-reports" }])} />
            <Route path="/media/awareness-videos"  element={stub("Awareness Videos", "Anti-drug awareness campaign videos", [{ label: "Media", path: "/media/latest-news" }])} />

            {/* ── Join NCB ─────────────────────────────────── */}
            <Route path="/career/vacancies"  element={stub("Current Vacancies", "Open positions and recruitment notices at NCB", [{ label: "Join NCB", path: "/career/vacancies" }, { label: "Current Vacancies", path: "/career/vacancies" }])} />
            <Route path="/recruitment-rules" element={stub("Recruitment Rules", "Recruitment rules for NCB officers", [{ label: "Join NCB", path: "/career/vacancies" }, { label: "Recruitment Rules", path: "/recruitment-rules" }])} />

            {/* ── Contact Us ───────────────────────────────── */}
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />

            {/* ── Legal ────────────────────────────────────── */}
            <Route path="/legal/notifications" element={stub("Notifications", "Official NCB notifications and circulars", [{ label: "Legal", path: "/legal/notifications" }, { label: "Notifications", path: "/legal/notifications" }])} />
            <Route path="/legal/judgements"    element={stub("Important Judgements", "Landmark court judgements on drug offences", [{ label: "Legal", path: "/legal/notifications" }, { label: "Important Judgements", path: "/legal/judgements" }])} />
            <Route path="/legal/court-cases"   element={stub("NDPS Exclusive Court Cases", "Cases under NDPS Exclusive Courts", [{ label: "Legal", path: "/legal/notifications" }, { label: "NDPS Court Cases", path: "/legal/court-cases" }])} />
            <Route path="/legislations"        element={stub("Acts & Rules", "NDPS Act, Rules and International Conventions", [{ label: "Legal", path: "/legal/notifications" }, { label: "Acts & Rules", path: "/legislations" }])} />
            <Route path="/international/mlats" element={stub("Treaties", "MLATs and International Conventions", [{ label: "Legal", path: "/legal/notifications" }, { label: "Treaties", path: "/international/mlats" }])} />
            <Route path="/acts/ndps-1985"      element={stub("NDPS Act 1985", "", [])} />
            <Route path="/acts/vienna-1988"    element={stub("Vienna Convention 1988", "", [])} />
            <Route path="/bilateral-agreements" element={stub("Bilateral Agreements", "NCB bilateral drug control agreements", [])} />
            <Route path="/international/extradition" element={stub("Extradition Treaties", "Extradition arrangements", [])} />

            {/* ── Alert Awareness ──────────────────────────── */}
            <Route path="/alert-awareness" element={stub("Alert Awareness", "Public drug awareness alerts and advisories", [{ label: "Alert Awareness", path: "/alert-awareness" }])} />
            <Route path="/scam-alert"      element={stub("Alert Awareness", "Beware of scammers impersonating NCB", [{ label: "Alert Awareness", path: "/alert-awareness" }])} />

            {/* ── Others ───────────────────────────────────── */}
            <Route path="/drug-abuse"       element={stub("Drug Abuse", "Information on drug abuse prevention and rehabilitation", [{ label: "Others", path: "/others" }, { label: "Drug Abuse", path: "/drug-abuse" }])} />
            <Route path="/employee-corner"  element={stub("Employee Corner (APAR)", "Resources for NCB employees — APAR and services", [{ label: "Others", path: "/others" }, { label: "Employee Corner", path: "/employee-corner" }])} />
            <Route path="/igot-karmayogi"   element={stub("IGOT Karmayogi", "Integrated Government Online Training platform", [{ label: "Others", path: "/others" }, { label: "IGOT Karmayogi", path: "/igot-karmayogi" }])} />
            <Route path="/vigilance"        element={stub("Vigilance", "NCB Vigilance Cell", [{ label: "Others", path: "/others" }, { label: "Vigilance", path: "/vigilance" }])} />
            <Route path="/tenders"          element={<MainLayout><Tenders /></MainLayout>} />

            {/* ── Navigation menu ──────────────────────────── */}
            <Route path="/e-pledge"                     element={stub("E-Pledge", "Take the anti-drug pledge online", [{ label: "Navigation", path: "/navigation" }, { label: "E-Pledge", path: "/e-pledge" }])} />
            <Route path="/disposal-of-drugs"            element={stub("Disposal of Drugs", "Procedures for disposal of seized narcotics", [{ label: "Navigation", path: "/navigation" }, { label: "Disposal of Drugs", path: "/disposal-of-drugs" }])} />
            <Route path="/rti"                          element={<MainLayout><RTI /></MainLayout>} />
            <Route path="/circulars-orders"             element={stub("Circulars & Orders", "Internal circulars and official orders", [{ label: "Navigation", path: "/navigation" }, { label: "Circulars & Orders", path: "/circulars-orders" }])} />
            <Route path="/rehabilitation-centres"       element={stub("Drug Rehabilitation Centres", "Rehabilitation centres across India", [{ label: "Navigation", path: "/navigation" }, { label: "Rehab Centres", path: "/rehabilitation-centres" }])} />
            <Route path="/citizen-charter"              element={stub("Citizen Charter", "NCB's commitment to citizens", [{ label: "Navigation", path: "/navigation" }, { label: "Citizen Charter", path: "/citizen-charter" }])} />
            <Route path="/grievance"                    element={stub("Grievance Redressal", "Submit a grievance or complaint", [{ label: "Navigation", path: "/navigation" }, { label: "Grievance Redressal", path: "/grievance" }])} />
            <Route path="/internal-complaint-committee" element={stub("Internal Complaint Committee", "ICC under Prevention of Sexual Harassment Act", [{ label: "Navigation", path: "/navigation" }, { label: "ICC", path: "/internal-complaint-committee" }])} />
            <Route path="/mou"                          element={stub("MoUs", "Memoranda of Understanding", [{ label: "Navigation", path: "/navigation" }, { label: "MoUs", path: "/mou" }])} />

            {/* ── Most Wanted / Red Corner ──────────────────── */}
            <Route path="/red-corner-notice" element={<MainLayout><RedCornerNotice /></MainLayout>} />
            <Route path="/most-wanted"       element={<MainLayout><RedCornerNotice /></MainLayout>} />
            <Route path="/coordination"      element={stub("International Cooperation", "NCB's global partnerships", [])} />

            {/* ── Static / Policy pages ────────────────────── */}
            <Route path="/login"            element={stub("Employee Login", "Internal staff login portal", [])} />
            <Route path="/faq"              element={stub("FAQs", "Frequently asked questions", [])} />
            <Route path="/sitemap"          element={stub("Sitemap", "Full site structure", [])} />
            <Route path="/privacy"          element={stub("Privacy Policy", "", [])} />
            <Route path="/terms"            element={stub("Terms of Use", "", [])} />
            <Route path="/disclaimer"       element={stub("Disclaimer", "", [])} />
            <Route path="/accessibility"    element={stub("Accessibility Statement", "", [])} />
            <Route path="/copyright"        element={stub("Copyright Policy", "", [])} />
            <Route path="/hyperlink-policy" element={stub("Hyperlink Policy", "", [])} />
            <Route path="/resources/seizure-reports" element={stub("Drug Seizure Reports", "", [])} />

            {/* Catch-all */}
            <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
        </Routes>
    );
}

export default AppRoutes;
