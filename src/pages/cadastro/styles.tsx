import styled from "styled-components";
import React from "react";

export const Header = styled.header`
  display: flex;
  height: 50px;
  background-color: ${(props) => props.theme['blue-2']};
`;

export const Separator = styled.div`
  width: 55%;
  max-width: 400px;
  height: 1.2px;
  background-color: #3B5F91;
  margin-bottom: 30px;

`;

export const SeparatorDesktop = styled.div`
    width: 2px;
    background-color: #9CC7FBB2;
    height: 550px; 
    display: none;
    position: absolute; 
    top: 55%; 
    left: 50%; 
    transform: translate(-50%, -50%); 

    @media (min-width: 768px) {
        display: block;
        margin: 0;
    }
`;


export const CadastroContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img {
    display: none;
    max-width: 580px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      margin-right: 3rem;
      transform: translateX(150px);
      margin-top: 20px;
    }
  }
`;

export const CadastroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
 
  h1 {
    color: ${(props) => props.theme['blue-2']};
    font-weight: 700;
    font-size: 2.625rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }

  @media (min-width: 768px) {
    h1{
       margin-top: -10px;
    }
  }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2{
        font-weight: 600;
        font-size: 1.25rem;
        color: ${(props) => props.theme['blue-8']}
    }

    label {
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme['blue-6']};
      margin-bottom: 0.5rem;
      width: 100%;
    }

    input {
      padding: 0.4rem;
      width: 280px;
      font-size: 1rem;
      border: 0.01px solid #002D6C;
      border-radius: 8px;
      background-color: ${(props) => props.theme['blue-7']};
        
      &::placeholder {
        color: ${(props) => props.theme['blue-9']}; 
        opacity: 0.5;
      }

    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 500px;

    label {
      margin-bottom: 0.75rem;
    }
    
    input{
        width: 400px;
    }
  }
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    padding-right: 2.5rem;
    box-sizing: border-box;
  }

  .material-icons {
    position: absolute;
    right: 0.7rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: ${(props) => props.theme['blue-4']};
    opacity: 0.8;
    font-size: 24px;
    user-select: none;
    background-color: transparent;
  }
`;

