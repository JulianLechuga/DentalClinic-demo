import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Treatments.css';

const Treatments: React.FC = () => {
  return (
    <div className="treatments fade-in page-padding">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Nuestros Tratamientos</h1>
          <p className="page-desc">Ofrecemos soluciones integrales para todas tus necesidades dentales con la tecnología más avanzada del mercado.</p>
        </div>

        <div className="treatments-list">
          {/* Limpieza y Prevención */}
          <div className="treatment-item">
            <div className="treatment-content">
              <h2>Limpieza Dental y Prevención</h2>
              <p>La base de una sonrisa sana es una buena prevención. Nuestra limpieza profesional elimina el sarro y la placa bacteriana, previniendo enfermedades periodontales y caries.</p>
              <ul className="treatment-features">
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Eliminación de placa bacteriana y sarro</span></li>
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Pulido dental para eliminar manchas superficiales</span></li>
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Aplicación de flúor protector</span></li>
              </ul>
              <Link to="/citas" className="btn btn-outline treatment-btn">Reservar Cita <ArrowRight size={16} /></Link>
            </div>
            <div className="treatment-image-wrapper">
              <img src="https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Limpieza dental profesional" className="treatment-image" />
            </div>
          </div>

          {/* Ortodoncia */}
          <div className="treatment-item reverse">
            <div className="treatment-content">
              <h2>Ortodoncia Invisible y Tradicional</h2>
              <p>Alineamos tu sonrisa con las técnicas más modernas. Especialistas en ortodoncia invisible (alineadores transparentes) para un tratamiento discreto y cómodo.</p>
              <ul className="treatment-features">
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Alineadores transparentes removibles</span></li>
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Brackets estéticos y metálicos</span></li>
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Estudio 3D personalizado de tu sonrisa</span></li>
              </ul>
              <Link to="/citas" className="btn btn-outline treatment-btn">Estudio Gratuito <ArrowRight size={16} /></Link>
            </div>
            <div className="treatment-image-wrapper">
              <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ortodoncia y brackets" className="treatment-image" />
            </div>
          </div>

          {/* Implantes Dentales */}
          <div className="treatment-item">
            <div className="treatment-content">
              <h2>Implantes Dentales</h2>
              <p>Recupera la funcionalidad y estética de tu boca de forma permanente. Utilizamos implantes de titanio de máxima calidad y biocompatibilidad.</p>
              <ul className="treatment-features">
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Cirugía mínimamente invasiva</span></li>
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Materiales 100% biocompatibles</span></li>
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Posibilidad de carga inmediata en el mismo día</span></li>
              </ul>
              <Link to="/citas" className="btn btn-outline treatment-btn">Consultar Caso <ArrowRight size={16} /></Link>
            </div>
            <div className="treatment-image-wrapper">
              <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Implantes dentales" className="treatment-image" />
            </div>
          </div>

          {/* Blanqueamiento */}
          <div className="treatment-item reverse">
            <div className="treatment-content">
              <h2>Blanqueamiento Dental</h2>
              <p>Consigue una sonrisa más blanca y luminosa en una sola sesión. Tratamiento seguro que no daña el esmalte de tus dientes.</p>
              <ul className="treatment-features">
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Resultados visibles desde la primera sesión</span></li>
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Tratamiento en clínica o ambulatorio (en casa)</span></li>
                <li><CheckCircle2 size={18} className="feature-icon"/> <span>Protección de encías y esmalte</span></li>
              </ul>
              <Link to="/citas" className="btn btn-outline treatment-btn">Saber Más <ArrowRight size={16} /></Link>
            </div>
            <div className="treatment-image-wrapper">
              <img src="https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Blanqueamiento dental y sonrisa" className="treatment-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
