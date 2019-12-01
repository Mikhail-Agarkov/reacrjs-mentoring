import React from 'react';
import styles from './filmcard.module.scss';

const FilmCard = (props) => {
    const {poster_path, title, release_date, genres, id} = props['film'];
    return (
        <div className={styles.content} key={id}>
            <img src={poster_path} alt={title} className={styles.cover}/>
            <div className={styles.info}>
                <span>{title}</span>
                <span className={styles.date}>{getYearFromDateString(release_date)}</span>
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
