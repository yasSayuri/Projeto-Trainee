import styled from "styled-components";
import { NavLink as RouterNavLink } from 'react-router-dom';

export const Header = styled.header`
    width: 100%;
    background: ${(props) => props.theme['blue2']};
    height: 52px;
`;
  
export const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1{
    color: ${(props) => props.theme['blue2']};
    font-weight: 700;
    font-size: 42px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  img {
    display: none;

    @media (min-width: 768px) {
      display: block;
      width: 550px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    justify-content: space-around;
  }
`;

export const FormContainer = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: left;
    justify-content: center;
    gap: 0.3rem;
    font-size: 16px;
    font-weight: medium;
    flex-direction: column;
    text-align: left;
    
    
  label {
    color: #00122B;
    margin-top: 15px;
  }

  input {
    width: 280px;
    padding: 10px;
    border: 1px solid #002D6C;
    border-radius: 8px;
    background-color: #EEF5FF;
   
  }

  span {
    font-size: 12px;
    color: ${(props) => props.theme["blue2"]};
    margin-top: 0.25rem;
    cursor: pointer;
    align-self: flex-start;
    text-decoration: underline;
    margin-bottom: 30px;
  }
`;

export const StyledNavLink = styled(RouterNavLink)`
    color: #00122B;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-decoration: underline;
    text-decoration-style: solid;
`;

export const Divider = styled.hr`
  width: 170px;
  max-width: 400px;
  margin: 1.5rem 0;
  color: #3B5F91;
`;