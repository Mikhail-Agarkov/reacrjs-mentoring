import React from 'react';
import FilmCard from "./FilmCard/FilmCard";

const FilmList = (props) => (
    <section>
        {props.films.map(film => <FilmCard src={film.src} alt={film.alt} title={film.title} date={film.date}
                                           description={film.description}/>)}
    </section>
);

export default FilmList;
