import React from 'react';

const PageContainer = ({ children, className = '', ...props }) => (
  <div className={`min-vh-100 d-flex flex-column justify-content-center align-items-center ${className}`} {...props}>
    {children}
  </div>
);

export default PageContainer;