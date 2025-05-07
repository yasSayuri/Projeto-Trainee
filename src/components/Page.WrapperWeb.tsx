import styled from "styled-components";

export const PageWrapperWeb = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${(props) => props.theme['off-white-2']};
  width: 100%;
  padding-bottom: 70px;
`;

export const Content = styled.main`
  flex: 1; 
  overflow: hidden;
`;
