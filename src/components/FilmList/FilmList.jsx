import React from 'react';
import FilmCard from './FilmCard/FilmCard';
import styles from './filmlist.module.scss';

const FilmList = (props) => (
    <section className={styles.content}>
        {props.films.map(film => <FilmCard src={film.src} alt={film.alt} title={film.title} date={film.date}
                                           genre={film.genre} key={film.key}/>)}
    </section>
);

export default FilmList;
