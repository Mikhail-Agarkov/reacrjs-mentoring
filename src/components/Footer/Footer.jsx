import React from 'react';
import styles from './footer.module.scss'
import Logo from "../Logo/Logo";

const Footer = (props) => (
    <footer className={styles.content}>
        <Logo className={styles.logo}/>
    </footer>
);

export default Footer;
