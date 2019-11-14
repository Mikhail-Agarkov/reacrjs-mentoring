import React from 'react';

const FilmCard = (props) => (
    <div>
        <img src={props.src} alt={props.alt}/>
        <div>
            <span>{props.title}</span>
            <span>{props.date}</span>
        </div>
        <span>{props.description}</span>
    </div>
);

export default FilmCard;
