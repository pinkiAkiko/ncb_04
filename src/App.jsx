import { useState } from 'react';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';
import LanguageModal from './components/LanguageModal';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppInner() {
    const [preloaderDone, setPreloaderDone] = useState(false);
    const { selectedLang, showModal } = useLanguage();

    return (
        <>
            {!preloaderDone && <Preloader onDone={() => setPreloaderDone(true)} />}
            {preloaderDone && (!selectedLang || showModal) && <LanguageModal />}
            <ScrollToTop />
            <AppRoutes />
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
