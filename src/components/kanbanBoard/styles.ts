import styled from "styled-components";

export const BoardWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const MobileScrollContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  gap: 2rem; 
`;
export const MobileHeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 1rem;
`;

export const DesktopWrapper = styled.div`
  width: 100%;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ColumnHeader = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Column = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme['light-gray']};
  border-radius: 10px;
  min-height: 250px;
`;

export const ColumnTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme["gray-7"]};
`;

export const TaskCard = styled.div`
  background: ${(props) => props.theme["white"]};
  color: ${(props) => props.theme["gray-7"]};
  padding: 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  font-size: 14px;
`;

export const ArrowButton = styled.button<{ direction: 'left' | 'right', disabled?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'left' ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 30px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: ${(props) => props.disabled ? props.theme['medium-gray'] : props.theme['blue-2']};
  z-index: 1;

  &:hover {
    color: ${(props) => !props.disabled && props.theme['blue-4']};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StatusDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
  padding-bottom: 16px;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.theme['medium-gray']};
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .dot.active {
    background-color: ${(props) => props.theme['blue-2']};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const AddTaskIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: 2rem;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  max-width: 400px;
  width: 90%;


  h3 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme['blue-2']};
    text-align: center;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    height: 40px;
    margin-bottom: 1rem;
    border-radius: 10px;
    border: transparent;
    background-color: ${(props) => props.theme['light-gray']};
    font-size: 14px;
  }

  textarea {
    width: 100%;
    padding: 0.5rem;
    height: 90px;
    margin-bottom: 1rem;
    border-radius: 10px;
    border: transparent;
    background-color: ${(props) => props.theme['light-gray']};
    font-size: 14px;
  }
`;

export const Separator = styled.div`
  width: 55%;
  height: 3px;
  background-color: ${(props) => props.theme['blue-2']};
  margin-top: -1rem !important;
  margin-bottom: 1rem !important;
  margin: 0 auto;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;

    &:first-child {
      background: ${(props) => props.theme['gray-3']};
    }

    &:last-child {
      background: ${(props) => props.theme['blue-2']};
      color: white;
    }
  }
`;
