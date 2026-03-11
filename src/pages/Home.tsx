import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-subtitle">Tu Sonrisa, Nuestra Prioridad</span>
            <h1 className="hero-title">Odontología de Excelencia en tu Ciudad</h1>
            <p className="hero-text">
              Tecnología de vanguardia, profesionales altamente cualificados y un trato personalizado para que luzcas la mejor de tus sonrisas.
            </p>
            <div className="hero-actions">
              <Link to="/citas" className="btn btn-primary">Reservar Consulta</Link>
              <Link to="/tratamientos" className="btn btn-outline">Nuestros Tratamientos</Link>
            </div>
            
            <div className="hero-features">
              <div className="feature"><CheckCircle2 size={18} className="feature-icon"/> <span>Primera visita gratuita</span></div>
              <div className="feature"><CheckCircle2 size={18} className="feature-icon"/> <span>Financiación a medida</span></div>
            </div>
          </div>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Clínica Dental Moderna" 
              className="hero-image"
            />
            <div className="experience-badge">
              <span className="badge-number">+15</span>
              <span className="badge-text">Años de<br/>Experiencia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section section-bg">
        <div className="container">
          <h2 className="section-title">Especialidades Dentales</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrapper">
                <Heart size={32} className="service-icon" />
              </div>
              <h3 className="service-title">Odontología General</h3>
              <p className="service-desc">Prevención, diagnóstico y tratamiento para mantener una salud bucodental óptima.</p>
              <Link to="/tratamientos" className="service-link">Saber más <ArrowRight size={16} /></Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon-wrapper">
                <Shield size={32} className="service-icon" />
              </div>
              <h3 className="service-title">Implantes Dentales</h3>
              <p className="service-desc">Recupera la funcionalidad y estética de tu boca con los mejores materiales.</p>
              <Link to="/tratamientos" className="service-link">Saber más <ArrowRight size={16} /></Link>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <Clock size={32} className="service-icon" />
              </div>
              <h3 className="service-title">Ortodoncia Invisible</h3>
              <p className="service-desc">Corrige tu sonrisa de forma discreta, cómoda y eficaz con alineadores transparentes.</p>
              <Link to="/tratamientos" className="service-link">Saber más <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Appointment CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para mejorar tu sonrisa?</h2>
            <p>Agenda tu primera consulta gratuita hoy mismo y déjanos cuidar de ti.</p>
            <Link to="/citas" className="btn btn-primary cta-btn">Pedir Cita Ahora</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
