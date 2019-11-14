import React from 'react';

const Filter = (props) => (
    <div>
        <span>{props.title}</span>
        <div>
            {props.buttons.map(button => <button onClick={button.handler} key={button.key}>{button.text}</button>)}
        </div>
    </div>
);

export default Filter;
