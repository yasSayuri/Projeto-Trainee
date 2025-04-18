import React from "react";
import { CustomButton } from "./styles";
interface ButtonProps {
    children: React.ReactNode;
    width?: string; // permite passar '100%', '200px', etc.
  }
  
export function Button({ children, width = "327px" }: ButtonProps) {
    return <CustomButton $width={width}>{children}</CustomButton>;
}