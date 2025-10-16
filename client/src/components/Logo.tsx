import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/logo.svg';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo">
  <img src={logoSvg} alt="Logo" className="logo-image" />
      <span className="logo-text">VK</span>
    </Link>
  );
};

export default Logo;