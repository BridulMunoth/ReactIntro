import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "Light",
    DarkTheme: ()=>{},
    LightTheme: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}