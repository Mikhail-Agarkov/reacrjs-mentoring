import React from 'react';
import Filter from '../../Filter/Filter';
import styles from './search.module.scss'

export default class Search extends React.PureComponent {

    constructor(props) {
        super(props);
        this.searchByTitle = 'title';
        this.searchByGenre = 'genre';
        this.state = {
            searchBy: this.searchByTitle
        };
        this.input = React.createRef();
    }

    searchHandler = (event) => {
        event.preventDefault();
        //api call (this.input.current.value, this.state.searchBy)
    };

    searchByHandler = (type) => {
        this.setState({searchBy: type});
    };

    render() {
        return (
            <section className={styles.content}>
                <h2 className={styles.title}>{this.props.title}</h2>
                <form className={styles.form} onSubmit={this.searchHandler}>
                    <input type='text'  className={styles.search} placeholder={this.props.placeholder} ref={this.input}/>
                    <button className={styles.button}>{this.props.button}</button>
                </form>
                <Filter title='Search by' buttons={
                    [
                        {text: this.searchByTitle, handler: () => this.searchByHandler(this.searchByTitle), key: 1},
                        {text: this.searchByGenre, handler: () => this.searchByHandler(this.searchByGenre), key: 2}
                    ]
                }/>
            </section>
        );
    }
}