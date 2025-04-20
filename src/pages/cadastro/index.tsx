import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from '../../assets/cadIMG.png';
import verificadoIcon from '../../assets/verificado.png'; 

import {
    CadastroContainer,
    CadastroContent,
    FormContainer,
    Header,
    PasswordInputWrapper,
    Separator,
    SeparatorDesktop
} from "./styles";
import { Button } from "../../components/Button/button";

export function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false); 

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError(true);
            return;
        }

        const userData = {
            username,
            email,
            password
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        setPasswordError(false);
        setShowSuccessModal(true); 

        setTimeout(() => {
            navigate("/"); 
        }, 3000);
    };

    return (
        <>
            <Header />
            <CadastroContainer>
                <SeparatorDesktop />
                <CadastroContent>
                    <h1>uTask 3.0</h1>
                    <Separator />
                    <form onSubmit={handleSubmit}>
                        <FormContainer>
                            <h2>Crie uma conta</h2>

                            <div>
                                <label htmlFor="username">Nome de usuário</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Seu nome de usuário"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    style={{
                                        borderColor: "#002D6C",
                                        backgroundColor:"#EEF5FF",
                                      }}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Endereço de e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                        borderColor: "#002D6C",
                                        backgroundColor:"#EEF5FF",
                                      }}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Senha</label>
                                <PasswordInputWrapper>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder="Senha secreta"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ backgroundColor: passwordError ? "#FFE5E5" : "#EEF5FF" }}
                                        required
                                    />
                                    <span
                                        className="material-icons"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? 'visibility' : 'visibility_off'}
                                    </span>
                                </PasswordInputWrapper>
                            </div>

                            <div>
                                <label htmlFor="confirm-password">Confirme a senha</label>
                                <PasswordInputWrapper>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="confirm-password"
                                        placeholder="Confirme a senha"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        style={{
                                            backgroundColor: passwordError ? "#FFE5E5" : "#EEF5FF"
                                        }}
                                        required
                                    />
                                    <span
                                        className="material-icons"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? 'visibility' : 'visibility_off'}
                                    </span>
                                </PasswordInputWrapper>
                                {passwordError && (
                                    <p style={{ color: "#820000", marginTop: "4px", fontSize: "0.875rem" }}>
                                        Senhas não combinam, tente novamente.
                                    </p>
                                )}
                            </div>
                        </FormContainer>
                        <Button width="100%" type="submit">Criar Cadastro</Button>
                    </form>
                </CadastroContent>
                <img src={logo2} alt="pessoa sentada na frente do computador" />
            </CadastroContainer>

            {showSuccessModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                }}>
                    <div style={{
                        width: '394px',
                        height: '136px',
                        backgroundColor: '#FCFFF5',
                        borderRadius: '20px',
                        border: '1px solid #6CA11E',
                        boxShadow: '0px 0px 10px 2px #00000040',
                        padding: '1.5rem',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '0.5rem',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',  
                        }}>
                            <img
                                src={verificadoIcon}
                                alt="Conta verificada"
                                style={{ width: '30px', height: '30px' }}
                            />
                            <p style={{
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '100%',
                                textAlign: 'center',
                                color: '#00122A',
                                margin: 0,
                            }}>
                                Conta criada com sucesso!
                            </p>
                        </div>
                        <p style={{
                            fontFamily: 'Poppins',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '100%',
                            textAlign: 'center',
                            color: '#000000',
                            margin: 0,
                        }}>
                            Um instante, iremos te redirecionar ao login!
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
