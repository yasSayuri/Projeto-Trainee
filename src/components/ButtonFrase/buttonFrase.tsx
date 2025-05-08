import React, { useEffect, useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  Title,
  AdviceText,
  CloseButton,
  StyledButton,
  ModalHeader,
  DesktopContainer
} from "./styles";
import iconButton from "../../assets/FraseDoDiaBut.png";
import closeIcon from "../../assets/fecharFrase.png";
import iconButtonDark from "../../assets/iconDark.svg";
interface ButtonFraseProps {
  isDarkMode: boolean;
}

export const ButtonFrase: React.FC<ButtonFraseProps> = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [translatedAdvice, setTranslatedAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      return data.slip.advice;
    } catch (error) {
      console.error("Erro ao buscar frase:", error);
      return "";
    }
  };

  const translateText = async (text: string) => {
    if (!text) return "";
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=en|pt`
      );
      const data = await response.json();
      return data.responseData.translatedText || "Tradução não disponível.";
    } catch (error) {
      console.error("Erro ao traduzir:", error);
      return "Erro na tradução.";
    }
  };

  const loadAdvice = async () => {
    setIsLoading(true);
    try {
      const advice = await fetchAdvice();
      if (advice) {
        const translation = await translateText(advice);
        setTranslatedAdvice(translation);
      }
    } catch (error) {
      setTranslatedAdvice("Não foi possível carregar a frase.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isDesktop) {
      loadAdvice();
    }
  }, [isDesktop]);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    loadAdvice();
  };

  return (
    <>
      {!isDesktop && (
        <StyledButton onClick={handleButtonClick}>
          <img 
            src={isDarkMode ? iconButtonDark : iconButton} 
            alt="lâmpada" 
            width="44" 
          />
          Frase do Dia
        </StyledButton>
      )}

      {isDesktop ? (
        <DesktopContainer>
          <Title>
            <img 
              src={isDarkMode ? iconButtonDark : iconButton} 
              alt="lâmpada" 
            />
            Frase do Dia
          </Title>
          {isLoading ? (
            <AdviceText>Procurando sua frase...</AdviceText>
          ) : (
            <AdviceText>"{translatedAdvice}"</AdviceText>
          )}
        </DesktopContainer>
      ) : (
        isModalOpen && (
          <ModalOverlay onClick={() => setIsModalOpen(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <Title>
                  <img 
                    src={isDarkMode ? iconButtonDark : iconButton} 
                    alt="lâmpada" 
                    width="44" 
                  />
                  Frase do Dia
                </Title>
                <CloseButton onClick={() => setIsModalOpen(false)}>
                  <img src={closeIcon} alt="Fechar" width="30" />
                </CloseButton>
              </ModalHeader>

              {isLoading ? (
                <AdviceText>Procurando sua frase...</AdviceText>
              ) : (
                <AdviceText>"{translatedAdvice}"</AdviceText>
              )}
            </ModalContent>
          </ModalOverlay>
        )
      )}
    </>
  );
};
