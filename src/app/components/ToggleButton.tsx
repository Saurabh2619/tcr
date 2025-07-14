'use client';

import { useTheme } from '../context/ThemeContext';

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      /* ---- Tailwind styles ---- */
      className="
        fixed bottom-6 right-6 z-50
        px-4 py-2 rounded shadow-lg
        bg-blue-600 text-white
        hover:bg-blue-700 active:scale-95
        transition
      "
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}
