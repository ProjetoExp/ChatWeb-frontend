import React from 'react';
import './CustomTitle.css';

const CustomTitle = ({ children, className = '', ...props }) => (
  <h2 className={`tittle-custom fs-2 mb-4 ${className}`} {...props}>
    {children}
  </h2>
);

export default CustomTitle;