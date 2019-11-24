import React from 'react';
import FilmCard from './FilmCard/FilmCard';
import styles from './filmlist.module.scss';

const FilmList = (props) => (
    <section className={styles.content}>
        {props.films.map(film => <FilmCard film={film}/>)}
    </section>
);

export default FilmList;
