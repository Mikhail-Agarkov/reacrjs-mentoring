import React from 'react';
import StatusBar from "../StatusBar/StatusBar";
import FilmList from "../FilmList/FilmList";

export default class Main extends React.PureComponent {

    render() {
        return (
            <main>
                <StatusBar/>
                <FilmList films={[]}/>
            </main>
        );
    }

}