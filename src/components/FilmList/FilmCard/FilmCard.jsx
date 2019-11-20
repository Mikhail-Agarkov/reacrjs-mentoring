import React from 'react';
import styles from './filmcard.module.scss';

const FilmCard = (props) => (
    <div className={styles.content} key={props.key}>
        <img src={props.src} alt={props.alt} className={styles.cover}/>
        <div className={styles.info}>
            <span>{props.title}</span>
            <span className={styles.date}>{props.date}</span>
        </div>
        <span className={styles.genre}>{props.genre}</span>
    </div>
);

export default FilmCard;
