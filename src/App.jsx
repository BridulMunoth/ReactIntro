import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("Light");
  const DarkTheme = () => {
    setThemeMode("Dark");
  };
  const LightTheme = () => {
    setThemeMode("Light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("Light", "Dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, DarkTheme, LightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>

      {/* <H1 className="text-400 bgcolor-green">HEELO</H1> */}
    </>
  );
}

export default App;
