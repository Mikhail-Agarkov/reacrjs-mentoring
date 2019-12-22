//@flow
import React from 'react';
import styles from './filmcard.module.scss';
import {Link} from 'react-router-dom';
import getYearFromDateString from '../../../util/utils'

type Film = {
    film: Object<Props>
}

type Props = {
    poster_path: boolean,
    title: string,
    release_data: string,
    genres: Array<string>,
    id: string,
    film: any
}

const FilmCard = (props: Film) => {
    const {poster_path, title, release_date, genres, id} = props['film'];
    return (
        <Link to={`/film/${id}`} className={styles.content} key={id}>
            <img src={poster_path} alt={title} className={styles.cover}/>
            <div className={styles.info}>
                <span>{title}</span>
                <span className={styles.date}>{getYearFromDateString(release_date)}</span>
            </div>
            <span className={styles.genre}>{genresToString(genres)} </span>
        </Link>
    );
};

function genresToString(genres) {
    return genres.join(', ');
}

export default FilmCard;
