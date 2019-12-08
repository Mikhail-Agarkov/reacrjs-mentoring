import React from 'react';
import {connect} from 'react-redux'
import FilmCard from './FilmCard/FilmCard';
import styles from './filmlist.module.scss';
import {viewFilmById} from "../../redux/actions";

const FilmList = (props) => (
    <section className={styles.content}>
        {props.films && props.films.length ? (
            props.films.map(film => <FilmCard film={film}/>)
        ) : (
            <div className={styles.notFound}>No films found.</div>
        )}
    </section>
);

const mapStateToProps = (state) => ({
    films: state.films
});

const mapDispatchToProps = {viewFilm: viewFilmById};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
