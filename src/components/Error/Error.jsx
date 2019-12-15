import React from 'react';
import styles from './error.module.scss';

const Error = (props) => {
    return (
        <section className={styles.content}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.message}>{props.message}</p>
        </section>
    );
};

export default Error;
