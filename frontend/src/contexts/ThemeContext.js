import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return sessionStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        const savedTheme = sessionStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    const contextValue = {
        theme,
        toggleTheme,
    };

    return(
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}