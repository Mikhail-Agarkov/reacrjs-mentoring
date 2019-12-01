import React from 'react';
import {connect} from 'react-redux'
import FilmCard from './FilmCard/FilmCard';
import styles from './filmlist.module.scss';

const FilmList = (props) => (
    <section className={styles.content}>
        {typeof props.films !== 'undefined' ? (
            props.films.map(film => <FilmCard src={film.poster_path} alt={film.title} title={film.title}
                                              date={film.release_date}
                                              genres={film.genres} key={film.id}/>)
        ) : (
            <div className={styles.notFound}>No films found.</div>
        )}
    </section>
);

const mapStateToProps = (state) => ({
    films: state.films
});

export default connect(mapStateToProps)(FilmList);
