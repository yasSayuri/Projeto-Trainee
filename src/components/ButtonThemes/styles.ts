import styled from "styled-components";

export const ToggleWrapper = styled.div<{ isDarkMode: boolean }>`
  width: 60px;
  height: 30px;
  background: ${({ isDarkMode }) =>
    isDarkMode ? "#222" : "#ffd54f"};
  border-radius: 999px;
  cursor: pointer;
  position: relative;
  transition: background 0.3s ease;
`;

export const ToggleThumb = styled.span<{ isDarkMode: boolean }>`
  position: absolute;
  top: 3px;
  left: ${({ isDarkMode }) => (isDarkMode ? "calc(100% - 27px)" : "3px")};
  width: 24px;
  height: 24px;
  background: ${({ isDarkMode }) => (isDarkMode ? "#aaa" : "#fff")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease, background 0.3s ease;

  i {
    font-size: 16px;
    color: ${({ isDarkMode }) => (isDarkMode ? "#333" : "#ffb300")};
    transition: color 0.3s ease;
  }
`;
