//@flow
import React from 'react';
import styles from './filter.module.scss'

type Props = {
    title: string,
    selected: string,
    buttons: Array<Button>
}

type Button = {
    text: string,
    value: string,
    key: number,
    handler: Function
}

const Filter = (props: Props) => (
    <div className={styles.content}>
        <span className={styles.text}>{props.title}</span>
        <div className={styles.buttonGroup}>
            {props.buttons.map(button =>
                <button className={styles.button} onClick={button.handler}
                        data-selected={props.selected === button.value} key={button.key}>
                    {button.text}
                </button>)}
        </div>
    </div>
);

export default Filter;
