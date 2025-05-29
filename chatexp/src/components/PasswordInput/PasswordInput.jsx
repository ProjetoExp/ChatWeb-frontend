import React, { useState } from "react";
import './PasswordInput.css';

function PasswordInput({ iconClass, id, placeholder }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="password-input-container position-relative">
            {/* Ícone */}
            <i className={`fas ${iconClass} input-icon`}></i>

            {/* Campo de senha */}
            <input
                type={showPassword ? "text" : "password"}
                id={id}
                className="form-control password-input"
                placeholder={placeholder}
                required
            />

            {/* Botão de olho */}
            <span
                className="eye-icon position-absolute end-0 top-50 translate-middle-y me-3"
                onClick={() => setShowPassword(!showPassword)}
                role="button"
                tabIndex={0}
                aria-label="Mostrar senha"
            >
                {showPassword ? (
                    <i className="fas fa-eye-slash"></i>
                ) : (
                    <i className="fas fa-eye"></i>
                )}
            </span>
        </div>
    );
}

export default PasswordInput;