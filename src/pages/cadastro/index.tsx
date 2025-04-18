import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from '../../assets/cadIMG.png';
import { CadastroContainer, CadastroContent, FormContainer, Header, PasswordInputWrapper, Separator, SeparatorDesktop } from "./styles";
import { Button } from "../../components/Button/button";

export function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

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
        alert("Cadastro realizado com sucesso!");
        setPasswordError(false);
        navigate("/"); // ✅ Redireciona somente após o cadastro estar correto
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
                        <Button width="100%" type="submit">Criar Cadastro</Button> {/* ✅ Removido o `to="/"` */}
                    </form>
                </CadastroContent>
                <img src={logo2} alt="pessoa sentada na frente do computador" />
            </CadastroContainer>
        </>
    );
}
