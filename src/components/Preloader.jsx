import { useEffect, useState } from "react";
import "./Preloader.scss";

function Preloader({ onDone }) {
    const [phase, setPhase] = useState("visible"); // visible → fade → gone

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("fade"), 2200);
        const t2 = setTimeout(() => { setPhase("gone"); onDone?.(); }, 2900);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [onDone]);

    if (phase === "gone") return null;

    return (
        <div className={`ncb-preloader ${phase === "fade" ? "fade-out" : ""}`}>
            <div className="preloader-inner">
                <div className="preloader-ring outer" />
                <div className="preloader-ring inner" />
                <div className="preloader-emblem">
                    <img src="/logo.svg" alt="NCB Emblem" />
                </div>
            </div>
            <div className="preloader-text">
                <span className="preloader-org">Narcotics Control Bureau</span>
                <span className="preloader-sub">Government of India</span>
            </div>
        </div>
    );
}

export default Preloader;
