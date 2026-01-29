import { useContext } from "react";
import Stopwatch from "./components/Stopwatch";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // useContext

  return (
    <div className={`app ${theme}`}>
      <button className="theme-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Stopwatch />
    </div>
  );
};

export default App;

