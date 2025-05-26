import React from 'react';
import './GradientText.css';

const GradientText = ({ children, className = '', ...props }) => (
  <span className={`gradient-text ${className}`} {...props}>
    {children}
  </span>
);

export default GradientText; 