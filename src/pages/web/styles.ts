import styled from "styled-components";
import React from "react";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 80px;
  background-color: ${(props) => props.theme['blue-10']};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  h1{
    background-color: transparent;
    color: ${(props) => props.theme['white2']};
    font-size: 30px;
    font-weight: 700;
  }

  img{
    background-color: transparent;
    width: 23px;
  }

  @media (min-width: 768px) {
    justify-content: center;
    gap: 29rem;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme['blue-3']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 1rem;

  h2 {
    background-color: transparent;
    color: ${(props) => props.theme['white3']};
    font-size: 14px;
    font-weight: 400;
  }

  span {
    background-color: transparent;
    color: ${(props) => props.theme['white3']};
    font-size: 14px;
    font-weight: 700;
  }

  a{
    background-color: transparent;
    color: ${(props) => props.theme['white3']};
    font-size: 14px;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 43rem;
  }
`;

export const HeartIcon = styled.i`
  color: ${(props) => props.theme['red-1']};
  font-size: 16px;
`;


