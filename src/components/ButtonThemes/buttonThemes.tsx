import React from "react";
import { ToggleWrapper, ToggleThumb } from "./styles";

interface ButtonThemesProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function ButtonThemes({ isDarkMode, toggleTheme }: ButtonThemesProps) {
  console.log("ButtonThemes:", isDarkMode);

  return (
    <ToggleWrapper
      isDarkMode={isDarkMode}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
    >
      <ToggleThumb isDarkMode={isDarkMode}>
        <i className="material-icons">
          {isDarkMode ? "dark_mode" : "light_mode"}
        </i>
      </ToggleThumb>
    </ToggleWrapper>
  );
}
