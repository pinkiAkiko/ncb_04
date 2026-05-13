import { useEffect, useState } from "react";
import "./Preloader.scss";

function Preloader({ onDone }) {
    const [phase, setPhase] = useState("visible"); // visible → fade → gone

    useEffect(() => {
        const t1 = setTimeout(() => {
            setPhase("fade");
            onDone?.(); // Trigger early to eliminate gap
        }, 2200);
        const t2 = setTimeout(() => setPhase("gone"), 2900);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [onDone]);

    if (phase === "gone") return null;

    return (
        <div className={`ncb-logo-loader ${phase === "fade" ? "fade-out" : ""}`}>
            <div className="loader-content">
                <div className="logo-wrapper">
                    <div className="pulse-ring" />
                    <img src="/logo.svg" alt="NCB Emblem" className="main-logo" />
                </div>
                <div className="loader-text">
                    <h1 className="org-name">Narcotics Control Bureau</h1>
                    <p className="gov-text">Government of India</p>
                </div>
            </div>
        </div>
    );
}

export default Preloader;
