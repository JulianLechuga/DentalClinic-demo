import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🦷</span>
          <span className="logo-text">Clínica<span className="logo-highlight">Dental</span></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink></li>
            <li><NavLink to="/tratamientos" className={({isActive}) => isActive ? 'active' : ''}>Tratamientos</NavLink></li>
            <li><NavLink to="/equipo" className={({isActive}) => isActive ? 'active' : ''}>Equipo</NavLink></li>
            <li><NavLink to="/nosotros" className={({isActive}) => isActive ? 'active' : ''}>Nosotros</NavLink></li>
            <li><NavLink to="/contacto" className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink></li>
          </ul>
        </nav>

        <div className="navbar-actions">
          <a href="tel:+34900123456" className="nav-phone">
            <Phone size={18} />
            <span className="phone-number">900 123 456</span>
          </a>
          <Link to="/citas" className="btn btn-primary d-none-mobile">
            Reservar Cita
          </Link>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
            <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/tratamientos" onClick={toggleMenu}>Tratamientos</Link></li>
            <li><Link to="/equipo" onClick={toggleMenu}>Equipo</Link></li>
            <li><Link to="/nosotros" onClick={toggleMenu}>Nosotros</Link></li>
            <li><Link to="/contacto" onClick={toggleMenu}>Contacto</Link></li>
            <li><Link to="/citas" className="mobile-nav-btn" onClick={toggleMenu}>Reservar Cita</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
