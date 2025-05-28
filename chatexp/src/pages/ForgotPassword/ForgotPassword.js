import React from "react";
import '../../styles/index.css' //importando css customizado
import './ForgotPassword.css'
import PageContainer from "../../components/PageContainer/PageContainer";
import LoginBox from "../../components/LoginBox/LoginBox";
import Logo from "../../components/Logo/Logo";
import LogoText from "../../components/LogoText/LogoText";
import CustomTitle from "../../components/CustomTitle/CustomTitle";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import GradientText from "../../components/GradientText/GradientText";

function ForgotPassword() {
    return (
        // container principal centralizado
        <PageContainer>
            {/* Logo da marca */}
            <div className="d-flex flex-row align-items-center brand-logo text-center fs-1 mb-5">
                <Logo />
                <LogoText />
            </div>
            <LoginBox>
                <CustomTitle>Recuperar a Senha</CustomTitle>

                <form>
                    {/* campo de inserção do e-mail */}
                    <CustomInput
                        iconClass="fas fa-user"
                        type="text"
                        id="email"
                        placeholder="Email ou usuário"
                        required
                    />


                    <p className="form-text fs-5 custom-form-text pb-5 ">
                        Enviaremos um e-mail para você,
                        clique no link para redefinir sua
                        senha
                    </p>

                    <CustomButton type="submit" className="w-100 fs-5 mb-2">
                        <GradientText>Entrar</GradientText>
                    </CustomButton>
                </form>
            </LoginBox>
        </PageContainer>

    );
}

export default ForgotPassword;