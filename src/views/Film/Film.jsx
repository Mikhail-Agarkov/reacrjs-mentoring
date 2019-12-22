import React from 'react';
import Header from '../../components/Header/Header'
import FilmMain from '../../components/FilmMain/FilmMain';
import {fetchMovies, viewMovieById} from '../../redux/actions';
import {connect} from 'react-redux';
import FilmInfo from '../../components/Header/FilmInfo/FilmInfo';
import {bindActionCreators} from 'redux';

class Film extends React.PureComponent {

    componentWillMount() {
        this.viewFilm();
    }

    componentDidUpdate() {
        this.viewFilm();
    }

    viewFilm = () => {
        const {location, viewMovieById} = this.props;
        const id = location.pathname.slice(6);

        viewMovieById(id);
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

const mapDispatchToProps = dispatch => bindActionCreators({
    viewMovieById, fetchMovies
}, dispatch);

export default connect(null, mapDispatchToProps)(Film);
