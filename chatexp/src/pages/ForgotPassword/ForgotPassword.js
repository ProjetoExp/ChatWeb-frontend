import React from "react";
import '../../styles/Login.css' //importando css customizado
import './ForgotPassword.css'

function ForgotPassword() {
    return (
        // container principal centralizado
        <div className="d-flex flex-column justify-content-center align-items-center container-custom">
            {/* Logo da marca */}
            <div className="brand-logo text-center fs-1">
                <span className="logo-icon gradient-text">&lt;/&gt;</span>
                <span className="logo-text gradient-text"> ChatExp</span>
            </div>
            <div className="box-custom">
                <h2 className="tittle-custom fs-2 mb-4">Recuperar a Senha</h2>

                <form>
                    {/* campo de inserção do e-mail */}
                    <div className="input-group input-custom-group mb-5">
                        <span className="input-group-text custom-icon">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <input 
                            type="e-mail" 
                            className="form-control input-custom " 
                            id="e-mail" 
                            placeholder="Digite seu e-mail" 
                        />
                    </div>
                        <div className="form-text fs-5 custom-form-text">
                            Enviaremos um e-mail para você,
                            clique no link para redefinir sua
                            senha
                        </div>
                    <button type="submit"  className="btn custom-btn w-100 fs-5 mb-4">
                        <span className="gradient-text">Enviar</span>
                    </button>

                </form>
            </div>
        </div>

    );
}

export default ForgotPassword;