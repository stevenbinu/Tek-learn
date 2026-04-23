import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Store, Users, Award, BookOpen, FileCode2, Monitor, PenTool, Database } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import './Home.css';

const Home = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeCourse, setActiveCourse] = useState(1); // 0, 1, 2
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "Do I need prior experience to join?",
      answer: "Not at all! All our courses are beginner-friendly. We start from the absolute basics and take you to industry-ready level."
    },
    {
      question: "How does the internship program work?",
      answer: "After completing 60% of your course, you get placed on a live startup project, working as a real team member with real deliverables."
    },
    {
      question: "Will I get a job?",
      answer: "We have a 95% placement rate. Our dedicated career team helps you with resume building, interview prep, and job referrals."
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const courses = [
    {
      title: "Data Science",
      description: "Master Python, ML & data visualization with real datasets and capstone projects.",
      price: "₹12,999",
      duration: "3 Months",
      icon: <Database size={48} />
    },
    {
      title: "UI/UX with AI",
      description: "Design stunning user experiences with Figma, prototyping, and AI-powered design tools.",
      price: "₹9,999",
      duration: "3 Months",
      icon: <PenTool size={48} />
    },
    {
      title: "Full Stack Development",
      description: "Master MERN stack. Build scalable web applications from scratch with real-world projects.",
      price: "₹14,999",
      duration: "6 Months",
      icon: <FileCode2 size={48} />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCourse((prev) => (prev + 1) % courses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [courses.length]);



  return (
    <div className="home">
      {/* Glow Cursor Effect */}
      <div 
        className="cursor-glow" 
        style={{ 
          left: `${cursorPos.x}px`, 
          top: `${cursorPos.y}px` 
        }} 
      />

      {/* 1. Hero Section - Main landing view */}
      <section className="hero">
        {/* Floating background animation wrapper */}
        <div className="floating-squares">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="square" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}></div>
          ))}
        </div>
        
        {/* Main hero content container */}
        <div className="container hero-container">
          <h1 className="hero-title text-gradient">Empowering The Youth<br/>To Lead</h1>
          <p className="hero-subtitle">
            Bridge the gap between education and industry with real-world,<br/>
            project-based learning designed for the next generation.
          </p>
          {/* Call-to-action buttons for Hero section */}
          <div className="hero-cta">
            {/* Primary registration button */}
            <button className="btn btn-outline-light">Join Now</button>
            {/* Secondary exploration button */}
            <button className="btn btn-outline-light">Explore Courses</button>
          </div>
        </div>
      </section>

      {/* 2. Featured Programs Section - 2 cards */}
      <section className="featured-programs-section container">
        {/* 2-column grid layout for featured items */}
        <div className="grid-2">
          {/* Card 1 */}
          <div className="featured-card">
            <h2><span className="text-accent">Hive</span> Internship Program</h2>
            <p>Real-world experience with live startup projects.</p>
            <button className="btn btn-outline-light mt-4" style={{ borderRadius: '30px' }}>Learn More</button>
          </div>
          {/* Card 2 */}
          <div className="featured-card">
            <h2><span className="text-accent">Pro</span> Mentorship</h2>
            <p>1-on-1 guidance from top industry experts.</p>
            <button className="btn btn-outline-light mt-4" style={{ borderRadius: '30px' }}>Explore</button>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Teklearn (Bento Box) - Feature highlights */}
      <section className="why-choose-bento section-padding container">
        <h2 className="section-title text-center text-gradient" style={{ marginBottom: '1rem' }}>Why Choose Teklearn</h2>
        <p className="section-subtitle text-center" style={{ marginBottom: '3rem' }}>Everything you need to launch your tech career with confidence.</p>
        
        {/* CSS Grid layout container for Bento Box items */}
        <div className="bento-grid">
          
          {/* Item 1 - Wide */}
          <div className="bento-item item-1">
            <div className="feature-icon"><TrendingUp size={28} /></div>
            <h3>Project-Based Learning</h3>
            <p>Work on real-world projects that mirror actual industry workflows and outcomes, rather than just following tutorials.</p>
          </div>
          
          {/* Item 2 */}
          <div className="bento-item item-2">
            <div className="feature-icon"><Store size={28} /></div>
            <h3>Industry Simulation</h3>
            <p>Experience a real company environment with sprints, standups, and strict deadlines.</p>
          </div>
          
          {/* Item 3 - Tall */}
          <div className="bento-item item-3">
            <div className="feature-icon"><Users size={28} /></div>
            <h3>Strong Portfolio</h3>
            <p>Graduate with a comprehensive portfolio that speaks for itself. Show potential recruiters and clients actual products you've built, deployed, and scaled.</p>
          </div>
          
          {/* Item 4 - Wide */}
          <div className="bento-item item-4">
            <div className="feature-icon"><Award size={28} /></div>
            <h3>Internship Experience</h3>
            <p>Work on live startup projects and get certified internship experience while you learn.</p>
          </div>

          {/* Item 5 */}
          <div className="bento-item item-5">
            <div className="feature-icon"><BookOpen size={28} /></div>
            <h3>Job-Ready Skills</h3>
            <p>Gain the exact technical and soft skills top employers demand from day one.</p>
          </div>

          {/* Item 6 */}
          <div className="bento-item item-6">
            <div className="feature-icon"><FileCode2 size={28} /></div>
            <h3>Beginner Friendly</h3>
            <p>Zero prerequisites needed. We guide you from absolute basics to a job-ready professional.</p>
          </div>

        </div>

        {/* Centered CTA container */}
        <div className="text-center" style={{ marginTop: '4rem' }}>
          {/* Primary journey starter button */}
          <button className="btn btn-outline-light" style={{ padding: '1rem 2.5rem', borderRadius: '30px' }}>Start your Journey</button>
        </div>
      </section>

      {/* 4. Join Hive - Community building section */}
      <section className="join-hive-wrapper container section-padding">
        {/* Container with custom glowing border effect */}
        <div className="join-hive-card glowing-border">
          <h2 className="hive-title">Join <span className="text-accent">Hive</span></h2>
          <h3 className="hive-subtitle">BUILD. BREAK. <span className="text-accent">REPEAT.</span></h3>
          <p>Connect, collaborate, and grow with thousands of like-minded tech learners.</p>
          
          {/* Flex container for community features */}
          <div className="hive-features">
            <span>Community Learning</span>
            <span>Collaboration</span>
            <span>Networking</span>
            <span>Growth</span>
          </div>
          
          {/* Button to navigate to Hive community page */}
          <button className="btn btn-accent mt-4" style={{ padding: '0.8rem 2.5rem', borderRadius: '30px' }}>Explore Hive</button>
        </div>
      </section>

      {/* 5. Our Programs - Distinct offerings for students vs builders */}
      <section className="programs-section section-padding container">
        <h2 className="section-title center text-gradient">Our Programs</h2>
        
        {/* 2-column grid layout for program cards */}
        <div className="grid-2 programs-grid">
          {/* Student program card layout */}
          <div className="program-card">
            <div className="program-badge">For Students</div>
            <h3>College Programs</h3>
            <ul>
              <li>Industry-aligned curriculum</li>
              <li>Placement assistance</li>
              <li>Faculty development programs</li>
            </ul>
            {/* Button to learn more about student programs */}
            <button className="program-btn mt-auto">Learn More</button>
          </div>
          {/* Startup program card layout */}
          <div className="program-card">
            <div className="program-badge">For Builders</div>
            <h3>Startup Programs</h3>
            <ul>
              <li>Access to trained talent pool</li>
              <li>Customized talent solutions</li>
              <li>Flexible engagement models</li>
            </ul>
            {/* Button to explore builder programs */}
            <button className="program-btn mt-auto">Explore Program</button>
          </div>
        </div>
      </section>

      {/* 6. Explore Our Courses (Coverflow) - Interactive 3D carousel */}
      <section className="courses-coverflow-section section-padding">
        <div className="container">
          <h2 className="section-title center text-gradient">Explore Our Courses</h2>
          <p className="section-subtitle center">Real projects. Real skills. Real outcomes. Learn from industry professionals.</p>
          
          {/* Container holding absolute-positioned coverflow items */}
          <div className="coverflow-container">
            {courses.map((course, idx) => {
              let positionClass = 'hidden';
              if (idx === activeCourse) positionClass = 'active';
              else if (idx === activeCourse - 1) positionClass = 'prev';
              else if (idx === activeCourse + 1) positionClass = 'next';
              
              return (
                <div 
                  key={idx} 
                  className={`coverflow-item ${positionClass}`}
                  onClick={() => {
                    if(idx === activeCourse - 1 || idx === activeCourse + 1) setActiveCourse(idx);
                  }}
                >
                  <CourseCard 
                    title={course.title}
                    description={course.description}
                    price={course.price}
                    duration={course.duration}
                    imagePlaceholder={course.icon}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. What Our Students Say - Social proof and reviews */}
      <section className="testimonials-section section-padding container">
        <h2 className="section-title center">What Our Students Say</h2>
        {/* 2-column grid for testimonial cards */}
        <div className="grid-2 testimonials-two-col">
          <div className="testimonial-card highlighted">
            <div className="stars">★★★★★</div>
            <p>"Teklearn completely transformed my career. The projects were real and mentors were amazing! Got placed within 2 months of completing."</p>
            <div className="student-info">
              <div className="student-initials">AM</div>
              <div>
                <h4>Arjun Menon</h4>
                <p>Data Analyst @ Infosys</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"The UI/UX course was fantastic. Working on actual client projects gave me confidence to land my first design role before graduation."</p>
            <div className="student-info">
              <div className="student-initials">PS</div>
              <div>
                <h4>Priya Sharma</h4>
                <p>UI Designer @ Startup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs - Frequently Asked Questions block */}
      <section className="faq-section section-padding container">
        <h2 className="section-title center">Frequently Asked Questions</h2>
        {/* Vertical flex list for FAQ items */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item-box ${activeFaq === index ? 'active' : ''}`}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              <h3>{faq.question}</h3>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Final Call-to-Action section */}
      <section className="cta-section section-padding container" style={{ marginBottom: '4rem' }}>
        {/* Content wrapper card */}
        <div className="cta-card">
          <h2>Start Building Your Career Today</h2>
          {/* Flex container for bottom CTAs */}
          <div className="cta-buttons mt-4">
            {/* Final registration button */}
            <button className="btn btn-outline-light" style={{ padding: '1rem 2.5rem', borderRadius: '30px' }}>Join Now</button>
            {/* Consultation booking button */}
            <button className="btn btn-outline-light" style={{ padding: '1rem 2.5rem', borderRadius: '30px' }}>Book Free Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
