import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./Footer.module.css";

export default function Footer () {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={styles.footer}>
            <h1>Footer</h1>
            <div>Current theme - {theme}</div>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    )
}