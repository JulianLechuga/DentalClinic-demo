import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Team from './pages/Team';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointments from './pages/Appointments';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tratamientos" element={<Treatments />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/citas" element={<Appointments />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
