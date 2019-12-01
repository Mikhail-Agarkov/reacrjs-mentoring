import React from 'react';
import StatusBar from "../StatusBar/StatusBar";
import FilmList from "../FilmList/FilmList";
import {connect} from "react-redux";
import {fetchFilms} from "../../redux/actions";

class Main extends React.PureComponent {

    componentDidMount() {
        this.props.fetchFilms();
    }

    render() {
        return (
            <main>
                <StatusBar/>
                <FilmList/>
            </main>
        );
    }
}

const mapDispatchToProps = { fetchFilms: fetchFilms};

export default connect(null, mapDispatchToProps)(Main);