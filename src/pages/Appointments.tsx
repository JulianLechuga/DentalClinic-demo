import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle } from 'lucide-react';
import './Appointments.css';

const Appointments: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="appointments fade-in page-padding">
      <div className="container map-container-override">
        <div className="appointments-wrapper">
          <div className="appointments-info">
            <h1 className="appointments-title">Reserva tu Cita</h1>
            <p className="appointments-desc">
              Déjanos tus datos y nos pondremos en contacto contigo lo antes posible para confirmar la fecha y hora de tu consulta.
            </p>
            
            <div className="info-cards">
              <div className="info-card">
                <Calendar className="info-icon" size={24} />
                <div className="info-card-content">
                  <h3>Primera Visita Gratuita</h3>
                  <p>Diagnóstico completo sin compromiso.</p>
                </div>
              </div>
              
              <div className="info-card">
                <Clock className="info-icon" size={24} />
                <div className="info-card-content">
                  <h3>Horario Amplio</h3>
                  <p>Lunes a Viernes de 9:00 a 20:00. Sábados de 10:00 a 14:00.</p>
                </div>
              </div>
            </div>
            
            <div className="emergency-contact">
              <div className="emergency-badge">Urgencias 24h</div>
              <p>Si tienes una urgencia dental, llámanos directamente al:</p>
              <a href="tel:+34900123456" className="emergency-phone"><Phone size={20} /> 900 123 456</a>
            </div>
          </div>

          <div className="appointments-form-container">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon-wrapper">
                  <CheckCircle size={48} className="success-icon" />
                </div>
                <h2>¡Solicitud Recibida!</h2>
                <p>Gracias por contactar con nosotros. Nuestro equipo te llamará en breve para confirmar tu cita.</p>
                <button className="btn btn-outline mt-4" onClick={() => setSubmitted(false)}>Solicitar otra cita</button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <div className="input-with-icon">
                    <User size={18} className="input-icon" />
                    <input type="text" id="name" required placeholder="Ej: Juan Pérez" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono *</label>
                    <div className="input-with-icon">
                      <Phone size={18} className="input-icon" />
                      <input type="tel" id="phone" required placeholder="Ej: 600 000 000" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="ejemplo@correo.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="treatment">Tratamiento de Interés</label>
                  <select id="treatment">
                    <option value="">Selecciona una opción...</option>
                    <option value="revision">Primera Revisión (Gratuita)</option>
                    <option value="limpieza">Limpieza Dental</option>
                    <option value="ortodoncia">Ortodoncia</option>
                    <option value="implantes">Implantes Dentales</option>
                    <option value="blanqueamiento">Blanqueamiento</option>
                    <option value="urgencia">Urgencia Dental</option>
                    <option value="otro">Otro tratamiento</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Comentarios o Dudas (Opcional)</label>
                  <textarea id="message" rows={4} placeholder="¿Tienes alguna preferencia de horario o nota adicional?"></textarea>
                </div>

                <div className="form-check">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy">He leído y acepto la <a href="#">Política de Privacidad</a>.</label>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">Confirmar Solicitud de Cita</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
