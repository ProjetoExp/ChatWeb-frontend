import React from 'react';
import './Logo.css';
import GradientText from '../../components/GradientText/GradientText.js';

const Logo = ({ size = 48, className = '', ...props }) => {
  return (
    <div className={`logo-container ${className}`} {...props}>
      <GradientText className="logo-gradient" style={{ fontSize: size }}>&lt;/&gt;</GradientText>
    </div>
  );
};

export default Logo; 