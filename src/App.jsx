import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Audio from './pages/Audio';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

import bioList from './assets/descriptions/bioList';
import cv from './assets/descriptions/cv';
import servicesList from './assets/descriptions/servicesList';

import collabsAlbumList from './assets/audio/collabsAlbumList';
import productionHighlightList from './assets/audio/productionHighlightList';
import earlyProductionList from './assets/audio/earlyProductionList';
import lateProductionList from './assets/audio/lateProductionList';
import producingList from './assets/audio/producingList';
import remixedList from './assets/audio/remixedList';
import tvBrandsComertialsList from './assets/audio/tvBrandsComertialsList';
import soundtracksList from './assets/audio/soundtracksList';

function App() {
    // HOME page
    const { cvSections } = cv;

    //BIO page
    const { bio } = bioList;

    // AUDIO page
    const { collabs } = collabsAlbumList;
    const { productionHighlight } = productionHighlightList;
    const { earlyProduction } = earlyProductionList;
    const { lateProduction } = lateProductionList;
    const { producing } = producingList;
    const { remixed } = remixedList;
    const { tvBrandsComertials } = tvBrandsComertialsList;
    const { soundtracks } = soundtracksList;

    // SEVICES
    const { services } = servicesList;

    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            cvSections={cvSections}
                            productionHighlight={productionHighlight}
                        />
                    }
                />
                <Route
                    path="/audio"
                    element={
                        <Audio
                            collabs={collabs}
                            productionHighlight={productionHighlight}
                            earlyProduction={earlyProduction}
                            lateProduction={lateProduction}
                            producing={producing}
                            remixed={remixed}
                            tvBrandsComertials={tvBrandsComertials}
                            soundtracks={soundtracks}
                        />
                    }
                />
                <Route
                    path="/services"
                    element={<Services services={services} />}
                />
                <Route path="/bio" element={<Bio bio={bio} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
