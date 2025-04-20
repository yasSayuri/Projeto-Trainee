import { GlobalStyle } from "./styles/themes/global";
import { ThemeProvider } from "./contexts/ThemeContext"; 
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
