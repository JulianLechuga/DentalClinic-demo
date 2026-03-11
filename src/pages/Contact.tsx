import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact fade-in page-padding">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Contacto y Ubicación</h1>
          <p className="page-desc">Estamos aquí para resolver cualquier duda. Ven a visitarnos o ponte en contacto con nosotros.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-section">
            <h2 className="section-subtitle">Información de Contacto</h2>
            
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <Phone size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Teléfono</h3>
                  <a href="tel:+34900123456" className="contact-link">900 123 456</a>
                  <p className="contact-hint">Llamada gratuita</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Email</h3>
                  <a href="mailto:info@clinicadentaldemo.es" className="contact-link">info@clinicadentaldemo.es</a>
                  <p className="contact-hint">Respondemos en menos de 24h</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Dirección</h3>
                  <p className="contact-text">Calle Gran Vía, 42</p>
                  <p className="contact-text">28013 Madrid, España</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <Clock size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Horario</h3>
                  <p className="contact-text">Lunes - Viernes: 9:00 - 20:00</p>
                  <p className="contact-text">Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2 className="section-subtitle">Cómo Llegar</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12149.72895251817!2d-3.713437156914561!3d40.42144800366657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e07eb58d7%3A0xc0c9b6858eafb487!2sGran%20V%C3%ADa%2C%20Madrid!5e0!3m2!1ses!2ses!4v1709400000000!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Clínica Dental"
              ></iframe>
            </div>
            <div className="transport-info">
              <h3>Transporte Público</h3>
              <p>🚇 <strong>Metro:</strong> L2, L3 (Estación Callao o Plaza de España)</p>
              <p>🚌 <strong>Autobús:</strong> Líneas 1, 2, 46, 74, 146</p>
              <p>🅿️ <strong>Parking concertado:</strong> Parking Plaza de España (1h gratis para pacientes)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
