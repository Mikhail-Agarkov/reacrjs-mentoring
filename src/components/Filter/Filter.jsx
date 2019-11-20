import React from 'react';
import styles from './filter.module.scss'

const Filter = (props) => (
    <div>
        <span className={styles.text}>{props.title}</span>
        {props.buttons.map(button => <button className={styles.button} onClick={button.handler} key={button.key}>{button.text}</button>)}
    </div>
);

export default Filter;
