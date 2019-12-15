import React from 'react';
import StatusBar from "../StatusBar/StatusBar";
import FilmList from "../FilmList/FilmList";
import {connect} from "react-redux";
import {fetchFilms, setSortBy} from "../../redux/actions";
import {withRouter} from 'react-router-dom';
import {parse} from 'query-string';
import Filter from "../Filter/Filter";

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
                <StatusBar>
                    <Filter title='Sort by' selected={this.props.sortBy} buttons={
                        [
                            {
                                text: 'Release date',
                                value: 'release_date',
                                handler: () => this.props.setSortBy('release_date'),
                                key: 1
                            },
                            {
                                text: 'Rating',
                                value: 'vote_average',
                                handler: () => this.props.setSortBy('vote_average'),
                                key: 2
                            }
                        ]
                    }/>
                </StatusBar>
                <FilmList/>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    sortBy: state.sortBy
});

const mapDispatchToProps = {fetchFilms: fetchFilms, setSortBy: setSortBy};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));