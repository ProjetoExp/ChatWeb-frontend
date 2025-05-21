import React from 'react';
import './BoxContainer.css';

const BoxContainer = ({ children, className = '', ...props }) => {
  return (
    <div className={`box-container ${className}`} {...props}>
      {children}
    </div>
  );
};

export default BoxContainer; 