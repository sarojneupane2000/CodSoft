import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="header">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <ul className="social-links">
        <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        <li><a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
      </ul>
    </nav>
  );
};

export default Header;
