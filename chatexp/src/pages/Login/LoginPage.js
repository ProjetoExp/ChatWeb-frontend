import React from "react";
import './LoginPage.css'; // Importa o CSS personalizado
import Logo from '../../components/Logo/Logo.js';
import LogoText from '../../components/LogoText/LogoText.js';
import GradientText from '../../components/GradientText/GradientText.js';
import LoginBox from '../../components/LoginBox/LoginBox.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import PageContainer from '../../components/PageContainer/PageContainer.js';
import CustomTitle from '../../components/CustomTitle/CustomTitle.js';

function LoginPage() {
  return (
    <PageContainer>
      {/* Logo da marca */}
      <div className="d-flex flex-row align-items-center brand-logo text-center fs-1 mb-5">
        <Logo />
        <LogoText className="ms-2" />
      </div>

      {/* Caixa de login */}
      <LoginBox>
        <CustomTitle>Login</CustomTitle>

        <form>
          {/* Campo de email/usuário */}
          <CustomInput
            iconClass="fas fa-user"
            type="text"
            id="email"
            placeholder="Email ou usuário"
            required
          />

          {/* Campo de senha */}
          <CustomInput
            iconClass="fas fa-lock"
            type="password"
            id="senha"
            placeholder="Senha"
            required
          />

          {/* Checkbox "Lembre-se de mim" */}
          <div className="form-check custom-check text-white-50 mb-3 mt-3">
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
          <CustomButton type="submit" className="w-100 fs-5 mb-2">
            <GradientText>Entrar</GradientText>
          </CustomButton>

          {/* Link para recuperação de senha */}
          <a href="#" className="forgot-link d-block text-center mt-2">
            Esqueceu a senha?
          </a>
        </form>
      </LoginBox>

      {/* Rodapé com opção de cadastro */}
      <div className="custom-footer-text text-center mt-3">
        Novo aqui?{" "}
        <a href="#" className="register-link">
          Cadastre-se
        </a>
      </div>
    </PageContainer>
  );
}

export default LoginPage;
