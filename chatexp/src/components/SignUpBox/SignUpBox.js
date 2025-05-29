import React from 'react';
import './SignUpBox.css';

const SignUpBox = ({ children, className = '', ...props }) => (
  <div className={`signup-box ${className}`} {...props}>
    {children}
  </div>
);

export default SignUpBox;