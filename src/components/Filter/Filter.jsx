import React from 'react';
import styles from './filter.module.scss'

const Filter = (props) => (
    <div className={styles.content}>
        <span className={styles.text}>{props.title}</span>
        <div className={styles.buttonGroup}>
            {props.buttons.map(button => <button className={styles.button} onClick={button.handler}
                                                 key={button.key}>{button.text}</button>)}
        </div>
    </div>
);

export default Filter;
