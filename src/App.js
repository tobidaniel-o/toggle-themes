// Installing the dark mode component, do npm install styled-components
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === light ? "" : ""}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
