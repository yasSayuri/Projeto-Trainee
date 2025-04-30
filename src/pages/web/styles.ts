import styled from "styled-components";
import React from "react";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 50px;
  background-color: ${(props) => props.theme['blue-10']};
`;