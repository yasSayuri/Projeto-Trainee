import styled from "styled-components";

export const BoardWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    padding-left: 4rem; 
    max-width: 1300px;
    margin: 0 auto;
  }
`;

export const MobileScrollContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  gap: 2rem; 

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileHeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 1rem;
  margin-top: 1rem;
  position: relative;
  padding-left: 30px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopWrapper = styled.div`
  width: 100%;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 2rem;
    padding-right: 2rem;
    overflow-x: auto;
  }
`;

export const ColumnHeader = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

export const Column = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme['light-gray']};
  border-radius: 10px;
  min-height: 250px;
  max-height: 280px;
  overflow-y: auto;
  

  @media (min-width: 768px) {
    min-height: 260px;
    max-height: 260px;
    overflow-y: auto;
  }

  @media (min-width: 1600px) {
  
    min-height: 400px;
    max-height: 400px;
    overflow-y: auto;
  }

`;

export const ColumnTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme["gray-7"]};
  width: 100%;
  margin-left: -25px;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

export const TaskCard = styled.div`
  background: ${(props) => props.theme["white4"]};
  color: ${(props) => props.theme["gray-7"]};
  padding: 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  font-weight: 600;
`;

export const AddTaskIcon = styled.i`
  cursor: pointer;
  position: absolute;
  right: -0.5rem;
  color: ${(props) => props.theme['blue-2']};
  font-size: 24px;
  border: 2px solid ${(props) => props.theme['blue-2']};
  border-radius: 50%;
 

  @media (min-width: 768px) {
    left: 32rem;
    right: auto;
  }

  @media (min-width: 1600px) {
    left: 64rem;
  }
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
  background: ${(props) => props.theme['white4']};
  padding: 2rem;
  border-radius: 20px;
  max-width: 400px;
  width: 90%;

  h3 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme['blue-2']};
    text-align: center;
    
  }

  label {
    color: ${(props) => props.theme['gray-7']};
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
  width: 45%;
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
    padding: 10px 10px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    width: 100%;

    &:first-child {
      background: ${(props) => props.theme['gray-3']};
    }

    &:last-child {
      background: ${(props) => props.theme['blue-2']};
      color: white;
    }
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  padding: 0 40px; 
  width: 100%;

  .slick-slide {
    padding: 0 10px;
  }
  
  .slick-list {
    margin: 0 -10px;
  }
  
  .slick-dots {
    bottom: -45px;
    
    li {
      margin: 0;
      
      button:before {
        color: ${(props) => props.theme['medium-gray']};
        opacity: 1;
        font-size: 10px;
      }
      
      &.slick-active button:before {
        color: ${(props) => props.theme['blue-2']};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const CustomArrow = styled.div<{ direction: 'left' | 'right', disabled?: boolean }>`
    position: absolute;
    top: 50%;
    ${(props) => (props.direction === 'left' ? 'left: -35px;' : 'right: -35px;')}
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 30px;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    color: ${(props) => props.disabled ? props.theme['medium-gray'] : props.theme['blue-2']};
    z-index: 1;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${(props) => !props.disabled && props.theme['blue-4']};
    }

    @media (max-width: 480px) {
        ${(props) => (props.direction === 'left' ? 'left: -35px;' : 'right: -35px;')}
    }
`;

export const CloseIcon = styled.i`
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => props.theme['blue-2']};
  transition: opacity 0.2s;
  border: 2px solid ${(props) => props.theme['blue-2']};
  border-radius: 50%;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const TaskMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme['gray-7']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TaskMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid ${(props) => props.theme['white5']};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 10;
  min-width: 120px;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  background: ${(props) => props.theme['white5']};
  border: none;
  color: ${(props) => props.theme['red-2']};
  cursor: pointer;
  text-align: left;
`;

export const DescriptionToggle = styled.div<{ expanded: boolean }>`
  margin-top: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props.expanded ? props.theme['blue-42'] : props.theme['gray-7']};
  font-size: 13px;
  font-weight: 300;
`;

export const MoveButton = styled.button`
  background-color: ${(props) => props.theme['blue-2']};
  border: 2px solid ${(props) => props.theme['blue-2']};
  border-radius: 50%;
  width: 21px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.2s;

  i.material-icons {
    font-size: 16px;
    color: ${(props) => props.theme['white4']};
  }
`;