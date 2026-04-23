import './SharedPageStyles.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="page-header">
        <div className="glow-white"></div>
        <div className="container">
          <h1 className="page-title">About <span className="text-accent">TekLearn</span></h1>
          <p className="page-subtitle">We are on a mission to bridge the gap between academic learning and industry demands.</p>
        </div>
      </header>
      
      <section className="page-content container text-center">
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            TekLearn was founded with a simple idea: education should lead directly to outcomes. 
            We believe that the best way to learn is by doing real projects under the guidance of industry professionals.
          </p>
          <p>
            Our community brings together thousands of learners, builders, and mentors to collaborate, innovate, and grow. 
            Whether you are a college student looking for your first job, or a corporate professional upgrading your skills, 
            TekLearn provides the platform and curriculum to accelerate your journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
