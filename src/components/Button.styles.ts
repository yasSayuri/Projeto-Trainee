import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme["blue2"]};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.65rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  width: 280px;

  &:hover {
    background-color: ${(props) => props.theme["blue1"]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
