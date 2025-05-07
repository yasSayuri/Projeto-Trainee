import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  

  @media (min-width: 768px) {
    position: static;
    background: none;
    display: block;
    z-index: auto;
  }
`;

export const ModalContent = styled.div`
  background: white;
  padding: 0.9rem;
  border-radius: 20px;
  max-width: 300px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: 768px) {
    margin: 2rem auto;
    box-shadow: none;
    background: transparent;
    padding: 0;
    max-width: 500px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 8px;
  color: ${(props) => props.theme['gray-5']};
  font-size: 14px;
  font-weight: 700;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const AdviceText = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 1rem;
  color: ${(props) => props.theme['gray-7']};
  text-align: left;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 18px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  
  img {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 768px) {
    display: none; 
  }
`;

export const StyledButton = styled.button`
  background: ${(props) => props.theme['yellow-2']};
  border: none;
  width: 250px;
  height: 60px;
  color: ${(props) => props.theme['white']};
  cursor: pointer;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 10px;
  transition: background-color 0.2s;
  font-size: 16px;
  font-weight: 600;
  margin: 0 auto;
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: none;
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow-3']};
  }
`;

export const DesktopContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 1.5rem;
    border-radius: 20px;
    width: 650px;
    margin: 2rem 0 2rem 12rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-size: 16px;
    color: ${(props) => props.theme['gray-5']};
    display: flex;
    align-items: center;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    color: ${(props) => props.theme['gray-7']};
    text-align: left;
    line-height: 1.4;
  }

  img {
    width: 44px;
  }

  @media (min-width: 1600px) {
    margin: 2rem 0 2rem 44rem;
  }
`;