import React from "react";
import '../../styles/Login.css'; // Importa o CSS personalizado

function LoginPage() {
  return (
    // Container principal centralizado
    <div className="d-flex flex-column justify-content-center align-items-center container-custom">
      {/* Logo da marca */}
      <div className="brand-logo text-center fs-1">
        <span className="logo-icon gradient-text">&lt;/&gt;</span>
        <span className="logo-text gradient-text"> ChatExp</span>
      </div>

      {/* Caixa de login */}
      <div className="box-custom">
        <h2 className="tittle-custom fs-2 mb-4">Login</h2>

        <form>
          {/* Campo de email/usuário */}
          <div className="input-wrapper mb-4">
            <i className="fas fa-user input-icon"></i>
            <input
              type="text"
              className="form-control input-custom"
              id="email"
              placeholder="Email ou usuário"
            />
          </div>

          {/* Campo de senha */}
          <div className="input-wrapper mb-4">
            <i className="fas fa-lock input-icon"></i>
            <input
              type="password"
              className="form-control input-custom"
              id="senha"
              placeholder="Senha"
            />
          </div>

          {/* Checkbox "Lembre-se de mim" */}
          <div className="form-check custom-check text-white-50 mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="rememberMe"
            />
            <label className="form-check-label ms-2" htmlFor="rememberMe">
              Lembre-se de mim
            </label>
          </div>

          {/* Botão de login com texto gradiente */}
          <button type="submit" className="btn custom-btn w-100 fs-5 mb-2">
            <span className="gradient-text">Entrar</span>
          </button>

          {/* Link para recuperação de senha */}
          <a href="#" className="forgot-link d-block text-center mt-2">
            Esqueceu a senha?
          </a>
        </form>
      </div>

      {/* Rodapé com opção de cadastro */}
      <div className="custom-footer-text text-center mt-3">
        Novo aqui?{" "}
        <a href="#" className="register-link">
          Cadastre-se
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
