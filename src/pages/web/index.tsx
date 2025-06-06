import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonThemes } from "../../components/ButtonThemes/buttonThemes.tsx";
import { useTheme } from "../../contexts/ThemeContext";
import  logobranca  from "../../assets/LogoBranca.png";
import { Footer, Header, HeartIcon } from "./styles.ts";
import { PageWrapper } from "../../components/PageWrapper.tsx";
import iconButton from "../../assets/FraseDoDiaBut.png";
import { ButtonFrase } from "../../components/ButtonFrase/buttonFrase.tsx";
import { PageWrapperWeb } from "../../components/Page.WrapperWeb.tsx";
import { KanbanBoard } from "../../components/kanbanBoard/kanbanBoard.tsx";
import { Content } from "../../components/Page.WrapperWeb.tsx";
import logoAzul from "../../assets/logoAzul.png";
interface WebProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

export function Web() {
  const { toggleTheme, isDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <>
    <PageWrapperWeb>
    <Header> 
      <img 
        src={isDarkMode ? logoAzul : logobranca} 
        alt="Logo unect" 
      />
      <h1>uTask 3.0</h1>
      <div>
      <ButtonThemes 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />
    </div>
    </Header>
    <Content>
    <ButtonFrase isDarkMode={isDarkMode}/>
    <KanbanBoard />
    </Content>
    </PageWrapperWeb>
    <Footer>
      <h2>© Processo de Trainee  <a 
          href="https://unect.com.br/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Unect Jr.
        </a></h2>
      <h2>Feito com <HeartIcon className="material-icons">favorite</HeartIcon> por <span>Yasmin Sayuri</span></h2>
    </Footer>
    </>
  );
}