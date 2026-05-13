import { useState } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';
import LanguageModal from './components/LanguageModal';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppInner() {
    const [preloaderDone, setPreloaderDone] = useState(false);
    const { selectedLang, showModal } = useLanguage();

    // The modal should only be "visible" to the user after preloader
    const isModalActive = !selectedLang || showModal;

    return (
        <>
            {/* Render app content immediately so it's ready behind the loader */}
            <div className={`app-content ${isModalActive ? 'blurred' : ''}`}>
                <ScrollToTop />
                <AppRoutes />
            </div>

            {/* Show modal only after preloader finishes */}
            {preloaderDone && isModalActive && <LanguageModal />}

            {/* Preloader stays on top until done */}
            {!preloaderDone && <Preloader onDone={() => setPreloaderDone(true)} />}
        </>
    );
}

function App() {
    return (
        <LanguageProvider>
            <AppInner />
        </LanguageProvider>
    );
}

export default App;
