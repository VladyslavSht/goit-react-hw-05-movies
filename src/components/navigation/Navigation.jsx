import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <header className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active__link : styles.link}>Home</NavLink>
            <NavLink to="movies" className={({ isActive }) => isActive ? styles.active__link : styles.link}>Movies</NavLink>
            
        </header>
    );
};

export default Navigation;