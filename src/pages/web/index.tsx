import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonThemes } from "../../components/ButtonThemes/buttonThemes.tsx";
import { useTheme } from "../../contexts/ThemeContext";
import  logobranca  from "../../assets/LogoBranca.png";
import { Header } from "./styles.ts";
interface WebProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

export function Web() {
    const { toggleTheme, isDarkMode } = useTheme();
    const navigate = useNavigate();
  
    return (
      <>
      <Header> 
        <img src={logobranca} alt="Logo unect" style={{width: '30px'}}/>
        <h1>uTask 3.0</h1>
        <div>
        <ButtonThemes 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
      </Header>
      </>
    );
  }