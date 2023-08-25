import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Audio from './pages/Audio';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/vytautas-portfolio" element={<Home />} />
                <Route path="/audio" element={<Audio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/bio" element={<Bio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
