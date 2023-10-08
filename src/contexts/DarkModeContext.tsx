import React from "react";

type darkModeContextType = {
     darkmode: boolean,
     setDarkMode: (value:boolean) => void,
     ToggleSwitch: () => void,
};

type darkModeProviderProps = {
     children: React.ReactNode,
};

export const DarkModeContext = React.createContext<darkModeContextType | undefined>(undefined);

export const DarkmodeProvider:React.FC<darkModeProviderProps> = ({children}) => {
     const initialDarkMode = localStorage.getItem("darkmode") === "true" ? true : false;
     const [darkmode, setDarkMode] = React.useState(initialDarkMode);
     
     React.useEffect(() => {
          localStorage.setItem("darkmode", darkmode.toString());
     }, [darkmode]);

     const ToggleSwitch = () => {
          setDarkMode((prevDarkMode) => !prevDarkMode);
     }

     return (
          <DarkModeContext.Provider value={{setDarkMode, darkmode, ToggleSwitch}}>
               {children}
          </DarkModeContext.Provider>
     )
} 
