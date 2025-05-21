import React from 'react';
import './LoginBox.css';

const LoginBox = ({ children, className = '', ...props }) => (
  <div className={`login-box ${className}`} {...props}>
    {children}
  </div>
);

export default LoginBox;