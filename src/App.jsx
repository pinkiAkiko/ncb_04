import { useState } from 'react';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

function App() {
    const [preloaderDone, setPreloaderDone] = useState(false);

    return (
        <>
            {!preloaderDone && <Preloader onDone={() => setPreloaderDone(true)} />}
            <ScrollToTop />
            <AppRoutes />
        </>
    );
}

export default App;
