import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Header,
  LoginContainer,
  LoginContent,
  PasswordInputWrapper,
  Separator,
  SeparatorDesktop,
  StyledInput,
  StyledNavLink,
} from "./styles";
import logo from "../../assets/logoIMG.png";
import { Button } from "../../components/Button/button";
import { PageWrapper } from "../../components/PageWrapper";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData") || "{}");

    if (!userData || !userData.email) {
      setPasswordError(true);
      setErrorMessage("Usuário não encontrado.");
      return;
    }

    if (email !== userData.email || password !== userData.password) {
      setPasswordError(true);
      setErrorMessage("Senha incorreta, tente novamente.");
    } else {
      setPasswordError(false);
      setErrorMessage("");
      navigate("/web");
    }
  };

  return (
    <>
    <PageWrapper>
      <Header />
      <LoginContainer>
        <img src={logo} alt="pessoas planejando num quadro" />
        <SeparatorDesktop />
        <LoginContent>
          <h1>uTask 3.0</h1>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                className="input-email"
                placeholder="Endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password">Senha</label>
              <PasswordInputWrapper>
                <StyledInput
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Senha secreta"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  hasError={passwordError}
                  required
                />
                <span
                  className="material-icons"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "visibility" : "visibility_off"}
                </span>
              </PasswordInputWrapper>

              {passwordError && (
                <span
                  style={{
                    color: "#820000",
                    fontSize: "0.875rem",
                    marginTop: "0.1rem",
                    marginBottom: "0rem",
                    textDecoration: "none",
                  }}
                >
                  {errorMessage}
                </span>
              )}

              <span style={{ marginTop: "0.34rem" }}>Esqueceu a senha?</span>

              <Button width="100%" type="submit">
                Entrar
              </Button>
            </FormContainer>
          </form>

          <Separator />

          <StyledNavLink to="/cadastro">
            Não tem cadastro? Crie uma conta
          </StyledNavLink>
        </LoginContent>
      </LoginContainer>
      </PageWrapper>
    </>
  );
}
