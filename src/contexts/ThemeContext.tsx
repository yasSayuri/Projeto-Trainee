import React, { createContext, useContext, useState, useCallback } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default"; 
import { darkTheme } from "../styles/themes/dark"; 

type ThemeContextType = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev); 
  }, []);

  const theme = isDarkMode ? darkTheme : defaultTheme; 

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
