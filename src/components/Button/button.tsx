import React from "react";
import { useNavigate } from "react-router-dom"; 
import { CustomButton } from "./styles"; 

interface ButtonProps {
  children: React.ReactNode;
  width?: string; 
  to?: string; 
  type?: "button" | "submit" | "reset";
}

export function Button({ children, width = "327px", to, type = "button" }: ButtonProps) {
  const navigate = useNavigate(); 

  const handleClick = () => {
    if (to) {
      navigate(to); 
    }
  };

  return (
    <CustomButton $width={width} onClick={handleClick} type={type}>
        {children}
    </CustomButton>
  );
}
