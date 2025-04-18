import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  height: 50px;
  background-color: ${(props) => props.theme['blue-2']};
`;

export const LoginContainer = styled.main`
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
      transform: translateX(-80px);
      margin-top: 20px;
    }
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme['blue-2']};
    font-weight: 700;
    font-size: 2.625rem;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    max-width: 400px;
  }

  span{
    color: ${(props) => props.theme['blue-2']};
    font-weight: 400;
    font-size: 0.75rem;
    text-decoration: underline;
    align-self: flex-start;
    margin-top: 0.3rem;
  }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
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
        color: ${(props) => props.theme['blue-6']}; 
        opacity: 0.5;
      }

      &:first-of-type {
        margin-bottom: 1rem; 
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

export const Separator = styled.div`
  width: 70%;
  max-width: 400px;
  height: 1.2px;
  background-color: #3B5F91;
  margin: 1.5rem 0;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 0.875rem;
  color: ${(props) => props.theme['blue-6']};
  text-decoration: underline;
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

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    padding-right: 2.5rem;
    width: 100%;
    box-sizing: border-box;
  }

  .material-icons {
    position: absolute;
    right: 0.8rem;
    top: 30%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #002D6C;
    opacity: 0.8;
    font-size: 24px;
    user-select: none;
    text-decoration: none;
  }
`;
