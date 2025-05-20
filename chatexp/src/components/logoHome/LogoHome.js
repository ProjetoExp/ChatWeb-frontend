import React from "react";
import logo from "../assets/logo.png"; // ajuste o caminho conforme onde salvou a imagem
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogoHeader.css"; // arquivo de estilos do componente

function LogoHeader() {
  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <span className="logo-icon gradient-text">&lt;/&gt;</span>
    </div>
  );
}

export default LogoHeader;
