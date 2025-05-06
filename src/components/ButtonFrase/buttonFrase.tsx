import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  Title,
  AdviceText,
  CloseButton,
  StyledButton,
  ModalHeader
} from "./styles";
import iconButton from "../../assets/FraseDoDiaBut.png";
import closeIcon from "../../assets/fecharFrase.png";

export const ButtonFrase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [translatedAdvice, setTranslatedAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleButtonClick = async () => {
    setIsModalOpen(true);
    setIsLoading(true);
    
    try {
      const advice = await fetchAdvice();
      if (advice) {
        const translation = await translateText(advice);
        setTranslatedAdvice(translation);
      }
    } catch (error) {
      console.error("Error:", error);
      setTranslatedAdvice("Não foi possível carregar a frase.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <StyledButton onClick={handleButtonClick}>
        <img src={iconButton} alt="lâmpada" width="44" />
        Frase do Dia
      </StyledButton>

      {isModalOpen && (
  <ModalOverlay onClick={() => setIsModalOpen(false)}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <ModalHeader>
        <Title>
          <img src={iconButton} alt="lâmpada" width="44" />
          Frase do Dia
        </Title>
        <CloseButton onClick={() => setIsModalOpen(false)}>
          <img src={closeIcon} alt="Fechar" width="30" />
        </CloseButton>
      </ModalHeader>
      
      {isLoading ? (
        <AdviceText>Carregando...</AdviceText>
      ) : (
        <AdviceText>"{translatedAdvice}"</AdviceText>
      )}
    </ModalContent>
  </ModalOverlay>
)}
    </>
  );
};