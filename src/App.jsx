import { useState } from 'react';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';
import LanguageModal from './components/LanguageModal';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppInner() {
    const [preloaderDone, setPreloaderDone] = useState(false);
    const { selectedLang, showModal } = useLanguage();

    if (!preloaderDone) {
        return <Preloader onDone={() => setPreloaderDone(true)} />;
    }

    if (!selectedLang || showModal) {
        return <LanguageModal />;
    }

    return (
        <>
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
