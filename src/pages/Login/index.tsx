import React from "react";
import loginIMG from '../../assets/LoginIMG.png';
import { NavLink } from "react-router-dom";
import { Divider, FormContainer, LoginContainer } from "./styles";
import { Header } from "./styles";
import { StyledNavLink } from './styles';
import { Button } from "../../components/Button";


export function Login() {
    return(
        <>
        <Header></Header>
        <LoginContainer>
            <img src={loginIMG} alt="Pessoas planejando num quadro" />
            
            <h1>uTask 3.0</h1>

            <form action="">
                <FormContainer>
                    <label htmlFor="">E-mail</label>
                    <input id="email" type="email" placeholder="Endereço de e-mail" />

                    <label htmlFor="">Senha</label>
                    <input id="password" type="password" placeholder="Senha secreta" />
                    <span>Esqueceu a senha?</span>
                </FormContainer>

                <Button type="submit">Entrar</Button>
            </form>
            
            <Divider />
            
            <StyledNavLink to="/cadastro">Não tem cadastro? Crie uma conta</StyledNavLink>

        </LoginContainer>
        </>
    )
}