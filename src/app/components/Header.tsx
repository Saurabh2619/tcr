"use client";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  return (
    <h1 style={{ color: theme === "dark" ? "#fff" : "#111" }}>
      Welcome to Theme App
    </h1>
  );
};

export default Header;
