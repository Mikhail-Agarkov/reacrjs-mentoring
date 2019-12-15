import React from 'react';
import styles from './status.module.scss'

const StatusBar = (props) => (
    <section className={styles.content}>
        {props.children}
    </section>
);
export default StatusBar;