import { useTheme } from "../../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full border border-orange flex items-center justify-center text-white hover:bg-orange/20 transition-all duration-300 cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? <BsSun className="text-lg" /> : <BsMoon className="text-lg" />}
    </button>
  );
};

export default ThemeToggle;
