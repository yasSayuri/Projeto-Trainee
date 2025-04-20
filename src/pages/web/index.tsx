import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonThemes } from "../../components/ButtonThemes/buttonThemes.tsx";
import { useTheme } from "../../contexts/ThemeContext";
interface WebProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

export function Web() {
    const { toggleTheme, isDarkMode } = useTheme();
    const navigate = useNavigate();
  
    return (
      <div>
        <ButtonThemes 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
    );
  }