import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}  {/* Corrected from 'Children' to 'children' */}
        </ThemeContext.Provider>
    );
};
ThemeContextProvider.propTypes = {
    children:PropTypes.string.isRequired, 
};
export default ThemeContextProvider;