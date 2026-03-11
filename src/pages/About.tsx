import React from 'react';
import { Shield, Users, Heart, Award } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about fade-in page-padding">
      <div className="container">
        <div className="about-hero">
          <div className="about-hero-content">
            <h1 className="page-title">Sobre Nosotros</h1>
            <p className="page-desc text-left">
              Somos mucho más que una clínica dental. Somos un equipo de profesionales apasionados por devolver la salud y la confianza a las sonrisas de nuestros pacientes.
            </p>
          </div>
          <div className="about-hero-image">
            <img src="https://images.unsplash.com/photo-1516549655169-dc83a0020138?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Interior de la clínica dental" />
          </div>
        </div>

        <div className="about-history">
          <div className="history-text">
            <h2>Nuestra Historia</h2>
            <p>
              Fundada en 2008, Clínica Dental ha crecido desde una pequeña consulta de barrio hasta convertirse en uno de los centros de referencia en odontología integral de la ciudad. 
            </p>
            <p>
              A lo largo de estos más de 15 años, hemos atendido a más de 10.000 pacientes, manteniendo siempre intacto nuestro compromiso fundacional: tratar a cada persona con la misma dedicación y cuidado que ofreceríamos a nuestra propia familia.
            </p>
            <p>
              Nuestra evolución ha estado marcada por la incorporación constante de las últimas tecnologías, desde el escáner intraoral 3D hasta la sedación consciente, siempre pensando en la comodidad del paciente y la excelencia clínica.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">+15</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">+10k</span>
              <span className="stat-label">Pacientes Satisfechos</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4</span>
              <span className="stat-label">Especialistas</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Compromiso</span>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h2 className="text-center">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrapper">
                <Heart size={32} className="value-icon" />
              </div>
              <h3>Empatía</h3>
              <p>Escuchamos a nuestros pacientes y entendemos sus necesidades, miedos y expectativas desde el primer minuto.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <Shield size={32} className="value-icon" />
              </div>
              <h3>Integridad</h3>
              <p>Nuestros diagnósticos médicos siempre priorizan la salud del paciente por encima de cualquier otro interés.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <Award size={32} className="value-icon" />
              </div>
              <h3>Excelencia</h3>
              <p>Buscamos la perfección en cada tratamiento clínico gracias a protocolos rigurosos y materiales de primer nivel.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <Users size={32} className="value-icon" />
              </div>
              <h3>Cercanía</h3>
              <p>Convertimos la visita al dentista en una experiencia agradable, familiar y totalmente personalizada.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
