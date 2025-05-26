import React from 'react';
import './CustomInput.css';


const CustomInput = ({
  iconClass,
  type = 'text',
  placeholder = '',
  id,
  value,
  onChange,
  className = '',
  ...props
}) => (
  <div className={`input-wrapper mb-4 ${className}`}>
    {iconClass && <i className={`input-icon ${iconClass}`}></i>}
    <input
      type={type}
      className="form-control input-custom"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  </div>
);

export default CustomInput;