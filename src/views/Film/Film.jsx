import React from 'react';
import Header from '../../components/Header/Header'
import FilmMain from "../../components/FilmMain/FilmMain";
import {fetchFilms, viewFilmById} from "../../redux/actions";
import {connect} from "react-redux";
import FilmInfo from "../../components/Header/FilmInfo/FilmInfo";

class Film extends React.PureComponent {

    componentDidMount() {
        this.viewFilm();
    }

    componentDidUpdate() {
        this.viewFilm();
    }

    viewFilm = () => {
        const {location, viewFilm, fetch} = this.props;
        const id = location.pathname.slice(6);

        viewFilm(id)
            .then((film) => {
                fetch(film.genres[0], 'genres', 'release_date');
            });
    };

    render() {
        return (
            <main>
                <Header>
                    <FilmInfo/>
                </Header>
                <FilmMain/>
            </main>
        );
    }
}

const mapDispatchToProps = {viewFilm: viewFilmById, fetch: fetchFilms};

export default connect(null, mapDispatchToProps)(Film);