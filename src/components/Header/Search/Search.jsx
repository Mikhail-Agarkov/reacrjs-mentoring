import React from 'react';
import {connect} from 'react-redux';
import {fetchFilms, setSearchBy} from '../../../redux/actions'
import Filter from '../../Filter/Filter';
import styles from './search.module.scss';
import {withRouter} from 'react-router-dom';

class Search extends React.PureComponent {

    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    searchHandler = (event) => {
        event.preventDefault();
        this.props.history.push(`/search?q=${this.input.current.value}&by=${this.props.searchBy}&sort=${this.props.sortBy}`);
    };

    render() {
        return (
            <section className={styles.body}>
                <h2 className={styles.title}>{this.props.title}</h2>
                <form className={styles.form} onSubmit={this.searchHandler.bind(this)}>
                    <input type='text' className={styles.search} placeholder={this.props.placeholder} ref={this.input}
                           required/>
                    <button className={styles.button}>{this.props.button}</button>
                </form>
                <Filter title='Search by' selected={this.props.searchBy} buttons={
                    [
                        {text: 'Title', value: 'title', handler: () => this.props.setSearchBy('title'), key: 1},
                        {text: 'Genre', value: 'genres', handler: () => this.props.setSearchBy('genres'), key: 2}
                    ]
                }/>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    searchBy: state.searchBy,
    sortBy: state.sortBy
});

const mapDispatchToProps = {performSearch: fetchFilms, setSearchBy: setSearchBy};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));