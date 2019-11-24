import React from 'react';
import styles from './filmcard.module.scss';

const FilmCard = (props) => {
    const {key, src, alt, title, date, genre} = props;
    return (
        <div className={styles.content} key={key}>
            <img src={src} alt={alt} className={styles.cover}/>
            <div className={styles.info}>
                <span>{title}</span>
                <span className={styles.date}>{date}</span>
            </div>
            <span className={styles.genre}>{genre}</span>
        </div>
    );
};

export default FilmCard;
