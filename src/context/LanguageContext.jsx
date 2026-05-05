import { createContext, useContext, useState, useCallback } from "react";

const STORAGE_KEY = "ncb_preferred_lang";

export const LANGUAGES = [
    { code: "en", label: "English",    native: "English"    },
    { code: "hi", label: "Hindi",      native: "हिंदी"       },
    { code: "bn", label: "Bengali",    native: "বাংলা"       },
    { code: "te", label: "Telugu",     native: "తెలుగు"      },
    { code: "mr", label: "Marathi",    native: "मराठी"       },
    { code: "ta", label: "Tamil",      native: "தமிழ்"       },
    { code: "gu", label: "Gujarati",   native: "ગુજરાતી"     },
    { code: "pa", label: "Punjabi",    native: "ਪੰਜਾਬੀ"      },
    { code: "kn", label: "Kannada",    native: "ಕನ್ನಡ"       },
    { code: "ml", label: "Malayalam",  native: "മലയാളം"      },
    { code: "or", label: "Odia",       native: "ଓଡ଼ିଆ"       },
    { code: "as", label: "Assamese",   native: "অসমীয়া"     },
];

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [selectedLang, setSelectedLang] = useState(
        () => localStorage.getItem(STORAGE_KEY)
    );
    const [showModal, setShowModal] = useState(false);

    const selectLanguage = useCallback((code) => {
        localStorage.setItem(STORAGE_KEY, code);
        setSelectedLang(code);
        setShowModal(false);

        // ── Bhasini integration point ─────────────────────────────
        // Replace the block below with Bhasini API calls when ready:
        //
        // import { bhasiniTranslate } from "../services/bhasini";
        // bhasiniTranslate({ targetLang: code, pageContent: document.body });
        //
        // The `code` values already match Bhasini's language_code field.
        // ─────────────────────────────────────────────────────────
    }, []);

    const resetLanguage = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        setSelectedLang(null);
    }, []);

    const openModal  = useCallback(() => setShowModal(true),  []);
    const closeModal = useCallback(() => setShowModal(false), []);

    return (
        <LanguageContext.Provider value={{ selectedLang, selectLanguage, resetLanguage, showModal, openModal, closeModal, LANGUAGES }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
