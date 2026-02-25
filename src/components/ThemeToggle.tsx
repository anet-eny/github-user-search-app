import IconMoon from "../assets/icon-moon.svg?react";
import IconSun from "../assets/icon-sun.svg?react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      className="
        flex items-center gap-4
        text-preset-8
        text-(--color-text-primary)
        hover:text-neutral-500
        transition-colors duration-200
        cursor-pointer
      "
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span>{isDark ? "LIGHT" : "DARK"}</span>

      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}
