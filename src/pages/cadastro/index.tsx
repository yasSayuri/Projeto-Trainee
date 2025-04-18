import React from "react";
import logo2 from '../../assets/cadIMG.png';
import { CadastroContainer, CadastroContent, FormContainer, Header, Separator, SeparatorDesktop } from "./styles";
import { Button } from "../../components/Button/button";

export function Cadastro(){
    return(
        <>
        <Header />
        <CadastroContainer>
            <SeparatorDesktop />
            <CadastroContent>
                <h1>uTask 3.0</h1>
                <Separator />
                <form action="">
                    <FormContainer>
                        <h2>Crie uma conta</h2>
                        <div>
                            <label htmlFor="username">Nome de usuário</label>
                            <input type="text" id="username" placeholder="Seu nome de usuário" required />
                        </div>

                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="Endereço de e-mail" required />
                        </div>

                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" placeholder="Senha secreta" required />
                        </div>

                        <div>
                            <label htmlFor="confirm-password">Confirme a senha</label>
                            <input type="password" id="confirm-password" placeholder="Senha secreta" required />
                        </div>
                    </FormContainer>
                </form>
                <Button width="100%">Criar Cadastro</Button>
            </CadastroContent>
            <img src={logo2} alt="pessoa sentada na frente do computador" />
        </CadastroContainer>
        </>
    )
}