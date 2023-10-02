import React from "react";
import styles from "./Header.module.scss";


function Header({ theme, toggleTheme }) {

    return (
        <div className={`${styles.HeaderWrapper}`}>
            <div className={styles.HeaderMenu}>
                <li className={styles.Logo}>
                    <a className={styles.Logo} href="/">
                        THEME SWITCHER
                    </a>
                </li>
                <li className={styles.NavList}>
                    <a href="/" className={styles.NavLink}>Home</a>
                </li>
                <li className={styles.NavList}>
                    <a href="/" className={styles.NavLink}>About</a>
                </li>
                <li className={styles.NavList}>
                    <a href="/" className={styles.NavLink}>Services</a>
                </li>
                <li className={styles.NavList}>
                    <a href="/" className={styles.NavLink}>Contact</a>
                </li>
            </div>

            <div className={styles.themeChangerBtn}>
                <button className={` ${styles.themeBtn} ${theme}-theme`} onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark' : 'Light'} Theme
                </button>
            </div>
        </div>
    );
}

export default Header;
