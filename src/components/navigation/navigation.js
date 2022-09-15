import React from "react";
import { Link } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
    return (
      <div className="block">
        <Link to="/"><span>About Me:</span></Link>
        <div className="navigation">
          <ul>
         <li><Link to="/experience">Experience</Link></li>
         <li><Link to="/education">Education</Link></li>   
         <li><Link to="/contact-socials">Contact & Socials</Link></li>
         <li><Link to="/courses">Courses</Link></li>
         <li><Link to="/hobby">Hobby</Link></li>
          </ul>  
        </div>
      </div>
    );
  };

  export default Navigation;