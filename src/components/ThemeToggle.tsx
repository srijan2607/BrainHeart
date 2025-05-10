import React from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "./ui/toggle";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      aria-label="Toggle dark mode"
      className="rounded-full p-2"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
