import styled from "styled-components";

export const CustomButton = styled.button<{ $width: string }>`
  width: ${(props) => props.$width};
  border-radius: 20px;
  height: 2.3rem;
  border: transparent;
  background-color: #226ED8;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1.7rem;
  font-weight: 500;
  color: ${(props) => props.theme['white']};
`;
