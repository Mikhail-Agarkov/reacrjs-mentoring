import React from 'react';
import styles from './footer.module.scss'
import Logo from "../Logo/Logo";

const Footer = () => (
    <footer className={styles.content}>
        <div className={styles.logo}>
            <Logo />
        </div>
    </footer>
);

export default Footer;
