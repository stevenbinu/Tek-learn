import './SharedPageStyles.css';
import { BookOpen, Briefcase, Code } from 'lucide-react';

const Services = () => {
  return (
    <div className="services-page">
      <header className="page-header">
        <div className="glow-yellow"></div>
        <div className="container">
          <h1 className="page-title">Our <span className="text-accent">Services</span></h1>
          <p className="page-subtitle">Comprehensive solutions for students and enterprises.</p>
        </div>
      </header>
      
      <section className="page-content container">
        <div className="cta-grid" style={{ marginTop: '2rem' }}>
          <div className="cta-card">
            <BookOpen size={40} className="cta-icon" />
            <h3>College Programs</h3>
            <p>Industry-aligned curriculum with placement assistance and mentorship from top engineers. Get ready for your dream job.</p>
          </div>
          <div className="cta-card cta-card-accent">
            <Briefcase size={40} className="cta-icon" />
            <h3>Corporate Training</h3>
            <p>Pre-vetted talent pool and customized talent solutions for your organizational needs. Upskill your workforce.</p>
          </div>
          <div className="cta-card">
            <Code size={40} className="cta-icon" />
            <h3>Live Projects</h3>
            <p>Work on live startup projects and get certified internship experience to build your portfolio.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
