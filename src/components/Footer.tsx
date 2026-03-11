import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">🦷</span>
            <span className="logo-text">Clínica<span className="logo-highlight">Dental</span></span>
          </Link>
          <p className="footer-desc">
            Especialistas en odontología integral y estética dental. Cuidamos de tu sonrisa con la tecnología más avanzada y un equipo humano excepcional.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Enlaces Rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/tratamientos">Tratamientos</Link></li>
            <li><Link to="/equipo">Nuestro Equipo</Link></li>
            <li><Link to="/citas">Reservar Cita</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Contacto</h3>
          <ul className="contact-info">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Calle Gran Vía, 42, 28013 Madrid, España</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>900 123 456</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>info@clinicadentaldemo.es</span>
            </li>
            <li>
              <Clock size={18} className="contact-icon" />
              <div>
                <p>Lunes - Viernes: 9:00 - 20:00</p>
                <p>Sábados: 10:00 - 14:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Clínica Dental Demo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
