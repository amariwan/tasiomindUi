"use client";

import { useTheme } from "@/hooks/useTheme";
import { ToggleButton } from ".";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton
      prefixIcon={theme}
      selected={false}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      tooltip={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      role="button"
    />
  );
};
