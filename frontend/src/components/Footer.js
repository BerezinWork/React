import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer () {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Footer</h1>
            <div>Current theme - {theme}</div>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    )
}