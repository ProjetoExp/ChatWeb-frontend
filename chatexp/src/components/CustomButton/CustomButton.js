import React from "react";
import "./CustomButton.css";
import GradientText from "../../components/GradientText/GradientText.js";

const CustomButton = ({ children, className = "", ...props }) => {
  return (
    <button type="submit" className={`btn btn-dark w-100 fs-5 mb-2 ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
