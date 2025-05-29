import React from 'react';

const Custom = ({ type = 'text', placeholder = '', id }) => (
  <input
    type={type}
    id={id}
    className="form-control"
    placeholder={placeholder}
  />
);

export default Custom;