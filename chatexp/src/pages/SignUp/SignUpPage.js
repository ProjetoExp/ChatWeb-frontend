import React from "react";
import './SignUpPage.css'; // Importa o CSS personalizado
import Logo from '../../components/Logo/Logo.js';
import LogoText from '../../components/LogoText/LogoText.js';
import GradientText from '../../components/GradientText/GradientText.js';
import SignUpBox from '../../components/SignUpBox/SignUpBox.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import CustomInput from '../../components/CustomInput/CustomInput';
import PageContainer from '../../components/PageContainer/PageContainer.js';
import CustomTitle from '../../components/CustomTitle/CustomTitle.js';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <PageContainer>
            {/* Logo da marca */}
            <div className="d-flex flex-row align-items-center brand-logo text-center fs-1 mb-5">
                <Logo />
                <LogoText className="ms-2" />
            </div>

            {/* Caixa de Registro */}
            <SignUpBox>
                <CustomTitle>Registre-se</CustomTitle>

                <form>
                    {/* Campo de Nome Completo*/}
                    <CustomInput
                        iconClass="fas fa-user"
                        type="text"
                        id="Nome"
                        placeholder="Digite um nome"
                        required
                    />

                    {/* Campo de email/usuário */}
                    <CustomInput
                        iconClass="fas fa-envelope"
                        type="email"
                        id="email"
                        placeholder="Digite seu melhor e-mail"
                        required
                    />

                    {/* Campo de senha */}
                    <PasswordInput
                        iconClass="fas fa-lock"
                        id="senha"
                        placeholder="Digite sua senha"
                    />

                    {/* Box de avisos do tipo de senha */}
                    <div className="password-rules mt-2">
                        <p className="mb-1">Sua senha deve conter:</p>
                        <ul className="list-unstyled">
                            <li>• Min 6 caracteres.</li>
                            <li>• Pelo menos 1 número.</li>
                            <li>• Pelo menos 1 caractere especial [!@#$%^&*()].</li>
                        </ul>
                    </div>

                    {/* Campo de telefone */}
                    <CustomInput
                        iconClass="fas fa-phone"
                        type="tel"
                        id="NumTelefone"
                        placeholder="Digite um telefone (opcional)"
                    />

                    {/* Botão de Entrar com texto gradiente */}
                    <Link to="/login" className="text-decoration-none w-100">
                        <CustomButton>
                            <GradientText>Entrar</GradientText>
                        </CustomButton>
                    </Link>
                </form>
            </SignUpBox>
        </PageContainer>
    );
}

export default SignUp;