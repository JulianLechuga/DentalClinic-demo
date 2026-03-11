import React from 'react';
import { Award, GraduationCap, Star } from 'lucide-react';
import './Team.css';

const Team: React.FC = () => {
  return (
    <div className="team fade-in page-padding">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Nuestro Equipo Médico</h1>
          <p className="page-desc">Profesionales altamente cualificados y en constante formación, comprometidos con tu salud y bienestar dental.</p>
        </div>

        <div className="team-grid">
          {/* Dr. García */}
          <div className="team-member">
            <div className="member-image-wrapper">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dr. Carlos García" className="member-image" />
            </div>
            <div className="member-info">
              <h3 className="member-name">Dr. Carlos García</h3>
              <p className="member-role">Director Médico e Implantólogo</p>
              <div className="member-credentials">
                <div className="credential">
                  <GraduationCap size={16} />
                  <span>Licenciado en Odontología por la UCM</span>
                </div>
                <div className="credential">
                  <Award size={16} />
                  <span>Máster en Cirugía e Implantología</span>
                </div>
              </div>
              <p className="member-bio">Con más de 15 años de experiencia, el Dr. García lidera nuestro equipo quirúrgico. Su filosofía se basa en tratamientos mínimamente invasivos y una atención cercana al paciente.</p>
            </div>
          </div>

          {/* Dra. Martínez */}
          <div className="team-member">
            <div className="member-image-wrapper">
              <img src="https://images.unsplash.com/photo-1594824436951-7f12d2266fa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dra. Elena Martínez" className="member-image" />
            </div>
            <div className="member-info">
              <h3 className="member-name">Dra. Elena Martínez</h3>
              <p className="member-role">Especialista en Ortodoncia</p>
              <div className="member-credentials">
                <div className="credential">
                  <GraduationCap size={16} />
                  <span>Licenciada en Odontología por la UB</span>
                </div>
                <div className="credential">
                  <Star size={16} />
                  <span>Certificada en Ortodoncia Invisible</span>
                </div>
              </div>
              <p className="member-bio">La Dra. Martínez es una apasionada de la estética dental. Diseña cada sonrisa de forma única, buscando siempre la armonía facial de sus pacientes.</p>
            </div>
          </div>

          {/* Dra. López */}
          <div className="team-member">
            <div className="member-image-wrapper">
              <img src="https://images.unsplash.com/photo-1605809718428-ec2b2a6fce2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dra. Ana López" className="member-image" />
            </div>
            <div className="member-info">
              <h3 className="member-name">Dra. Ana López</h3>
              <p className="member-role">Odontología General y Estética</p>
              <div className="member-credentials">
                <div className="credential">
                  <GraduationCap size={16} />
                  <span>Licenciada en Odontología por la US</span>
                </div>
                <div className="credential">
                  <Award size={16} />
                  <span>Máster en Estética Dental</span>
                </div>
              </div>
              <p className="member-bio">Dedicada a la prevención y la estética restauradora. Su trato suave y meticuloso hace que incluso los pacientes más nerviosos se sientan relajados.</p>
            </div>
          </div>
        </div>

        <div className="clinic-philosophy">
          <h2>Nuestra Filosofía</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Innovación Constante</h3>
              <p>Invertimos en la última tecnología dental para ofrecer diagnósticos más precisos y tratamientos menos invasivos.</p>
            </div>
            <div className="philosophy-item">
              <h3>Trato Humano</h3>
              <p>Sabemos que ir al dentista puede generar ansiedad. Creamos un ambiente relajado y de confianza para cada paciente.</p>
            </div>
            <div className="philosophy-item">
              <h3>Excelencia Médica</h3>
              <p>Trabajamos solo con materiales de primera calidad y protocolos clínicos estrictos para garantizar los mejores resultados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
