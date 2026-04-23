import './SharedPageStyles.css';
import { Clock, CheckCircle2 } from 'lucide-react';

const Course = () => {
  return (
    <div className="course-page">
      <header className="page-header" style={{ paddingBottom: '2rem' }}>
        <div className="glow-white"></div>
        <div className="container">
          <div className="program-tag" style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
            Trending
          </div>
          <h1 className="page-title">UI/UX with <span className="text-accent">AI</span></h1>
          <p className="page-subtitle">Design stunning user experiences with Figma, prototyping, and AI-powered design tools.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={20} />
              <span>3 Months Duration</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <strong style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>₹9,999</strong>
            </div>
          </div>
        </div>
      </header>
      
      <section className="page-content container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
          
          {/* Left Column: What you'll learn */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>What you'll learn</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Mastering Figma & Prototyping',
                'User Research and Persona Creation',
                'Wireframing & High-Fidelity Design',
                'Integrating AI tools in Design Workflow',
                'Creating a stunning portfolio'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={20} color="var(--accent-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Enrollment Card */}
          <div style={{ backgroundColor: 'var(--surface-color)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border-color)', height: 'fit-content' }}>
            <h3 style={{ marginBottom: '1rem' }}>Enroll Now</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Join the next cohort starting soon. Limited seats available.</p>
            <button className="btn btn-accent" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
              Start your Journey
            </button>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '1rem' }}>
              14-day money-back guarantee
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Course;
