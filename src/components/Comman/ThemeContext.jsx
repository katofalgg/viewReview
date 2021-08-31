import React, {useState} from "react";
import { createContext } from "react";
export const ThemeContext = createContext();

const ThemeContextProvider = props => {
    const [theme, setTheme] = useState('light');
    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    console.log(theme);
  return (
      <ThemeContext.Provider value={{theme, changeTheme}}>
        {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;