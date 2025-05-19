import { useContext } from "react";

import Vote from "./pages/vote";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ThemeContext } from "./contexts/ThemeContext";
import styles from "./App.module.css";


function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${styles[`${theme}`]}`} >
            <Header />
            <Vote />
            <Footer />
        </div>
    );
}

export default App;