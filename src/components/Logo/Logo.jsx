import React from 'react';
import styles from './logo.module.scss';
import {Link} from 'react-router-dom';

const Logo = () => (
    <Link to='/' className={styles.link}>
        <span className={styles.logo}><span className={styles.bold}>netflix</span>roulette</span>
    </Link>
);

export default Logo;
