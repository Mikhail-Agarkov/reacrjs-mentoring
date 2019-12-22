import React from 'react';
import Logo from "../Logo/Logo";
import styles from './header.module.scss'

const Header = (props) => (
    <header className={styles.header}>
        <div className={styles.content}>
            <Logo/>
            {props.children}
        </div>
    </header>
);
export default Header;
