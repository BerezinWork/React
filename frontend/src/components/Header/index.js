import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./Header.module.css";

export default function Header () {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${styles.header}`}>
            <h1>Header - {theme}</h1>
        </div>
    )
}