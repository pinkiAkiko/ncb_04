import { useState, useEffect } from "react";
import { useLanguage, LANGUAGES } from "../context/LanguageContext";
import ncbLogo from "../assets/logo.svg";
import "./LanguageModal.scss";

function LanguageModal() {
    const { selectLanguage, closeModal, selectedLang } = useLanguage();
    const [rotIdx, setRotIdx]     = useState(0);
    const [exiting, setExiting]   = useState(false);

    useEffect(() => {
        const t = setInterval(() => setRotIdx(i => (i + 1) % LANGUAGES.length), 1800);
        return () => clearInterval(t);
    }, []);

    const handleSelect = (code) => {
        setExiting(true);
        setTimeout(() => selectLanguage(code), 380);
    };

    const handleClose = () => {
        setExiting(true);
        setTimeout(() => closeModal(), 380);
    };

    return (
        <div className={`lm-overlay${exiting ? " lm-overlay--exit" : ""}`} role="dialog" aria-modal="true" aria-label="Language selection">
            <div className="lm-card">

                {/* Close button — only when re-opening from header */}
                {selectedLang && (
                    <button className="lm-close-btn" onClick={handleClose} aria-label="Close">
                        <i className="bi bi-x-lg" />
                    </button>
                )}

                {/* Header */}
                <div className="lm-header">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                        alt="Emblem of India"
                        className="lm-emblem"
                    />
                    <div className="lm-org">
                        <img src={ncbLogo} alt="NCB Logo" className="lm-ncb-logo" />
                        <div className="lm-org-text">
                            <span className="lm-org-name">Narcotics Control Bureau</span>
                            <span className="lm-org-sub">Ministry of Home Affairs, Government of India</span>
                        </div>
                    </div>
                </div>

                <div className="lm-divider" />

                {/* Rotating language display */}
                <div className="lm-rotating-wrap" aria-hidden="true">
                    {LANGUAGES.map((l, i) => {
                        const offset = (i - rotIdx + LANGUAGES.length) % LANGUAGES.length;
                        let cls = "lm-rot-item";
                        if (offset === 0)                           cls += " is-center";
                        else if (offset === 1 || offset === LANGUAGES.length - 1) cls += " is-side";
                        else                                        cls += " is-hidden";
                        return <span key={l.code} className={cls}>{l.native}</span>;
                    })}
                </div>

                {/* Prompt */}
                <p className="lm-prompt">
                    <span>Select your preferred language</span>
                    <span className="lm-prompt-sep">·</span>
                    <span>अपनी भाषा चुनें</span>
                </p>

                {/* Language grid */}
                <div className="lm-grid">
                    {LANGUAGES.map(l => (
                        <button
                            key={l.code}
                            className="lm-lang-btn"
                            onClick={() => handleSelect(l.code)}
                            lang={l.code}
                        >
                            <span className="lm-lang-native">{l.native}</span>
                            <span className="lm-lang-en">{l.label}</span>
                        </button>
                    ))}
                </div>

                <button className="lm-skip" onClick={() => handleSelect("en")}>
                    Skip — Continue in English
                </button>
            </div>
        </div>
    );
}

export default LanguageModal;
