import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Tek<span>Learn</span></h3>
          <p>Real projects. Real skills. Real outcomes. Learn from industry professionals.</p>
          <div className="social-links">
            <a href="#" aria-label="Email"><Mail size={20} /></a>
            <a href="#" aria-label="Phone"><Phone size={20} /></a>
            <a href="#" aria-label="Location"><MapPin size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Programs</h4>
            <Link to="/course">UI/UX with AI</Link>
            <Link to="/course">Full Stack Dev</Link>
            <Link to="/course">Data Science</Link>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/services">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TekLearn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
