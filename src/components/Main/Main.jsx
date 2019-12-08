import React from 'react';
import StatusBar from "../StatusBar/StatusBar";
import FilmList from "../FilmList/FilmList";
import {connect} from "react-redux";
import {fetchFilms} from "../../redux/actions";
import {withRouter} from 'react-router-dom';
import {parse} from 'query-string';

class Main extends React.PureComponent {

    componentDidMount() {
        this.performSearch();
    }

    componentDidUpdate() {
        this.performSearch();
    }

    performSearch = () => {
        const {location} = this.props;
        if (location.pathname === '/search') {
            const values = parse(location.search);
            this.props.fetchFilms(values.q, values.by, values.sort);
        } else {
            this.props.fetchFilms();
        }
    };

    render() {
        return (
            <main>
                <StatusBar/>
                <FilmList/>
            </main>
        );
    }
}

const mapDispatchToProps = {fetchFilms: fetchFilms};

export default withRouter(connect(null, mapDispatchToProps)(Main));