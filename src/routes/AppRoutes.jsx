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
import HistoricalBackground from "../pages/HistoricalBackground";
import MissionVision from "../pages/MissionVision";
import Organization from "../pages/Organization";
import Partners from "../pages/Partners";
import NotFound from "../pages/NotFound";
import PageStub from "../pages/PageStub";
import DrugAbuse from "../pages/DrugAbuse";
import AlertAwareness from "../pages/AlertAwareness";
import ScamAlert from "../pages/ScamAlert";
import RehabCentres from "../pages/RehabCentres";
import Grievance from "../pages/Grievance";
import EPledge from "../pages/EPledge";
import AnnualReports from "../pages/AnnualReports";
import Legislations from "../pages/Legislations";
import Notifications from "../pages/Notifications";
import Judgements from "../pages/Judgements";
import Vacancies from "../pages/Vacancies";
import RecruitmentRules from "../pages/RecruitmentRules";
import LatestNews from "../pages/LatestNews";
import PressRelease from "../pages/PressRelease";
import PhotoGallery from "../pages/PhotoGallery";
import VideoGallery from "../pages/VideoGallery";
import Seizures from "../pages/Seizures";
import FormerHeads from "../pages/FormerHeads";

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
            <Route path="/about" element={<MainLayout><About /></MainLayout>} />
            <Route path="/historical-background" element={<MainLayout><HistoricalBackground /></MainLayout>} />
            <Route path="/motto-mission-vision" element={<MainLayout><MissionVision /></MainLayout>} />
            <Route path="/organization" element={<MainLayout><Organization /></MainLayout>} />
            <Route path="/office-locator" element={<MainLayout><OfficeLocator /></MainLayout>} />
            <Route path="/our-officers" element={<MainLayout><OurOfficers /></MainLayout>} />
            <Route path="/partners" element={<MainLayout><Partners /></MainLayout>} />

            {/* ── Media, News & Events ─────────────────────── */}
            <Route path="/media/latest-news" element={<MainLayout><LatestNews /></MainLayout>} />
            <Route path="/media/seizures" element={<MainLayout><Seizures /></MainLayout>} />
            <Route path="/media/photo-gallery" element={<MainLayout><PhotoGallery /></MainLayout>} />
            <Route path="/media/important-visitors" element={stub("Important Visitors", "Distinguished visitors to NCB", [{ label: "Media", path: "/media/latest-news" }, { label: "Important Visitors", path: "/media/important-visitors" }])} />
            <Route path="/media/video-gallery" element={<MainLayout><VideoGallery /></MainLayout>} />
            <Route path="/media/press-release" element={<MainLayout><PressRelease /></MainLayout>} />
            <Route path="/media/former-head" element={<MainLayout><FormerHeads /></MainLayout>} />
            <Route path="/media/annual-reports" element={<MainLayout><AnnualReports /></MainLayout>} />
            <Route path="/media/awareness-videos" element={stub("Awareness Videos", "Anti-drug awareness campaign videos", [{ label: "Media", path: "/media/latest-news" }])} />

            {/* ── Join NCB ─────────────────────────────────── */}
            <Route path="/career/vacancies" element={<MainLayout><Vacancies /></MainLayout>} />
            <Route path="/recruitment-rules" element={<MainLayout><RecruitmentRules /></MainLayout>} />

            {/* ── Contact Us ───────────────────────────────── */}
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />

            {/* ── Legal ────────────────────────────────────── */}
            <Route path="/legal/notifications" element={<MainLayout><Notifications /></MainLayout>} />
            <Route path="/legal/judgements" element={<MainLayout><Judgements /></MainLayout>} />
            <Route path="/legal/court-cases" element={stub("NDPS Exclusive Court Cases", "Cases under NDPS Exclusive Courts", [{ label: "Legal", path: "/legal/notifications" }, { label: "NDPS Court Cases", path: "/legal/court-cases" }])} />
            <Route path="/legislations" element={<MainLayout><Legislations /></MainLayout>} />
            <Route path="/international/mlats" element={stub("Treaties", "MLATs and International Conventions", [{ label: "Legal", path: "/legal/notifications" }, { label: "Treaties", path: "/international/mlats" }])} />
            <Route path="/acts/ndps-1985" element={stub("NDPS Act 1985", "", [])} />
            <Route path="/acts/vienna-1988" element={stub("Vienna Convention 1988", "", [])} />
            <Route path="/bilateral-agreements" element={stub("Bilateral Agreements", "NCB bilateral drug control agreements", [])} />
            <Route path="/international/extradition" element={stub("Extradition Treaties", "Extradition arrangements", [])} />

            {/* ── Alert Awareness ──────────────────────────── */}
            <Route path="/alert-awareness" element={<MainLayout><AlertAwareness /></MainLayout>} />
            <Route path="/scam-alert" element={<MainLayout><ScamAlert /></MainLayout>} />

            {/* ── Others ───────────────────────────────────── */}
            <Route path="/drug-abuse" element={<MainLayout><DrugAbuse /></MainLayout>} />
            <Route path="/employee-corner" element={stub("Employee Corner", "Resources for NCB employees — APAR and services", [{ label: "Others", path: "/others" }, { label: "Employee Corner", path: "/employee-corner" }])} />
            <Route path="/igot-karmayogi" element={stub("IGOT Karmayogi", "Integrated Government Online Training platform", [{ label: "Others", path: "/others" }, { label: "IGOT Karmayogi", path: "/igot-karmayogi" }])} />
            <Route path="/vigilance" element={stub("Vigilance", "NCB Vigilance Cell", [{ label: "Others", path: "/others" }, { label: "Vigilance", path: "/vigilance" }])} />
            <Route path="/tenders" element={<MainLayout><Tenders /></MainLayout>} />

            {/* ── Navigation menu ──────────────────────────── */}
            <Route path="/e-pledge" element={<MainLayout><EPledge /></MainLayout>} />
            <Route path="/disposal-of-drugs" element={stub("Disposal of Drugs", "Procedures for disposal of seized narcotics", [{ label: "Navigation", path: "/navigation" }, { label: "Disposal of Drugs", path: "/disposal-of-drugs" }])} />
            <Route path="/rti" element={<MainLayout><RTI /></MainLayout>} />
            <Route path="/circulars-orders" element={stub("Circulars & Orders", "Internal circulars and official orders", [{ label: "Navigation", path: "/navigation" }, { label: "Circulars & Orders", path: "/circulars-orders" }])} />
            <Route path="/rehabilitation-centres" element={<MainLayout><RehabCentres /></MainLayout>} />
            <Route path="/citizen-charter" element={stub("Citizen Charter", "NCB's commitment to citizens", [{ label: "Navigation", path: "/navigation" }, { label: "Citizen Charter", path: "/citizen-charter" }])} />
            <Route path="/grievance" element={<MainLayout><Grievance /></MainLayout>} />
            <Route path="/internal-complaint-committee" element={stub("Internal Complaint Committee", "ICC under Prevention of Sexual Harassment Act", [{ label: "Navigation", path: "/navigation" }, { label: "ICC", path: "/internal-complaint-committee" }])} />
            <Route path="/mou" element={stub("MoUs", "Memoranda of Understanding", [{ label: "Navigation", path: "/navigation" }, { label: "MoUs", path: "/mou" }])} />

            {/* ── Most Wanted / Red Corner ──────────────────── */}
            <Route path="/red-corner-notice" element={<MainLayout><RedCornerNotice /></MainLayout>} />
            <Route path="/most-wanted" element={<MainLayout><RedCornerNotice /></MainLayout>} />
            <Route path="/coordination" element={stub("International Cooperation", "NCB's global partnerships", [])} />

            {/* ── Static / Policy pages ────────────────────── */}
            <Route path="/login" element={stub("Employee Login", "Internal staff login portal", [])} />
            <Route path="/faq" element={stub("FAQs", "Frequently asked questions", [])} />
            <Route path="/sitemap" element={stub("Sitemap", "Full site structure", [])} />
            <Route path="/privacy" element={stub("Privacy Policy", "", [])} />
            <Route path="/terms" element={stub("Terms of Use", "", [])} />
            <Route path="/disclaimer" element={stub("Disclaimer", "", [])} />
            <Route path="/accessibility" element={stub("Accessibility Statement", "", [])} />
            <Route path="/copyright" element={stub("Copyright Policy", "", [])} />
            <Route path="/hyperlink-policy" element={stub("Hyperlink Policy", "", [])} />
            <Route path="/resources/seizure-reports" element={stub("Drug Seizure Reports", "", [])} />

            {/* Catch-all */}
            <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
        </Routes>
    );
}

export default AppRoutes;
