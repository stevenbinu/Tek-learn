import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <div className="logo-hexagon">
            <span>T</span>
          </div>
        </Link>
        
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </div>

        {/* We can still render the links in the mobile menu overlay */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/course" onClick={() => setIsOpen(false)}>Courses</Link></li>
          <li><Link to="/contact" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
