import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FormContainer, Header, LoginContainer, LoginContent, PasswordInputWrapper, Separator, SeparatorDesktop, StyledNavLink } from "./styles";
import logo from '../../assets/logoIMG.png';
import { Button } from "../../components/Button/button";

export function Login(){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    return(
        <>
        <Header />
        <LoginContainer>
            <img src={logo} alt="pessoas planejando num quadro" />
            <SeparatorDesktop />
            <LoginContent>
                <h1>uTask 3.0</h1>
                <form action="">
                    <FormContainer>
                        <label htmlFor="">E-mail</label>
                        <input id="email" placeholder='Endereço de e-mail'></input>
                        <label htmlFor="">Senha</label>
                        <PasswordInputWrapper>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Senha secreta"
                            />
                            <span
                                className="material-icons"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? 'visibility' : 'visibility_off'}
                            </span>
                        </PasswordInputWrapper>
                    </FormContainer>
                </form>
                <span>Esqueceu a senha?</span>

                <Button width="100%">Entrar</Button>
                <Separator />

                <StyledNavLink to="/cadastro">Não tem cadastro? Crie uma conta</StyledNavLink>
            </LoginContent>
        </LoginContainer>
        </>
    )
}