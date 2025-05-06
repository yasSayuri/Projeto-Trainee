import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonThemes } from "../../components/ButtonThemes/buttonThemes.tsx";
import { useTheme } from "../../contexts/ThemeContext";
import  logobranca  from "../../assets/LogoBranca.png";
import { Header } from "./styles.ts";
import { PageWrapper } from "../../components/PageWrapper.tsx";
import iconButton from "../../assets/FraseDoDiaBut.png";
import { ButtonFrase } from "../../components/ButtonFrase/buttonFrase.tsx";
interface WebProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

export function Web() {
    const { toggleTheme, isDarkMode } = useTheme();
    const navigate = useNavigate();
  
    return (
      <>
      <PageWrapper>
      <Header> 
        <img src={logobranca} alt="Logo unect"/>
        <h1>uTask 3.0</h1>
        <div>
        <ButtonThemes 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />
      </div>
      </Header>
      <ButtonFrase />
      </PageWrapper>
      </>
    );
  }