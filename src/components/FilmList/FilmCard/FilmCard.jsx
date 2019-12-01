import React from 'react';
import styles from './filmcard.module.scss';

const FilmCard = (props) => {
    const {key, src, alt, title, date, genres} = props;
    return (
        <div className={styles.content} key={key}>
            <img src={src} alt={alt} className={styles.cover}/>
            <div className={styles.info}>
                <span>{title}</span>
                <span className={styles.date}>{getYearFromDateString(date)}</span>
            </div>
            <span className={styles.genre}>{genresToString(genres)} </span>
        </div>
    );
};

function genresToString(genres) {
    return genres.join(', ');
}

function getYearFromDateString(date) {
    return date.split('-')[0];
}

export default FilmCard;
