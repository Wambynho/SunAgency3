import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Barre de navigation */}
        <nav style={{ backgroundColor: '#FFD700', padding: '10px', textAlign: 'center' }}>
          <Link to="/" style={{ margin: '10px' }}>Accueil</Link>
          <Link to="/services" style={{ margin: '10px' }}>Services</Link>
          <Link to="/destinations" style={{ margin: '10px' }}>Destinations</Link>
          <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
        </nav>

        {/* Gestion des routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
