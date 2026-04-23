import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import './CourseCard.css';

const CourseCard = ({ title, description, price, duration, imagePlaceholder }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        {imagePlaceholder ? (
          <div className="placeholder-img">
             {imagePlaceholder}
          </div>
        ) : (
          <img src="https://via.placeholder.com/400x200/1a1a1a/ffffff?text=Course+Image" alt={title} />
        )}
        <div className="tag">Trending</div>
      </div>
      
      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-desc">{description}</p>
        
        <div className="course-meta">
          <div className="price">{price}</div>
          <div className="duration">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
        </div>
        
        <Link to="/course" className="btn btn-primary course-btn">
          View Course <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
