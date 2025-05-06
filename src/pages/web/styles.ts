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
    color: ${(props) => props.theme['white']};
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