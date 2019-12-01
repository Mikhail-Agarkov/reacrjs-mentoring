import React from 'react';
import Filter from "../Filter/Filter";
import styles from './status.module.scss'
import {setSortBy} from "../../redux/actions";
import {connect} from "react-redux";

const StatusBar = (props) => (
    <section className={styles.content}>
        <Filter title='Sort by' selected={props.sortBy} buttons={
            [
                {text: 'Release date', value: 'release_date', handler: () => props.setSortBy('release_date'), key: 1},
                {text: 'Rating', value: 'vote_average', handler: () => props.setSortBy('vote_average'), key: 2}
            ]
        }/>
    </section>
);

const mapStateToProps = (state) => ({
    sortBy: state.sortBy
});

const mapDispatchToProps = {setSortBy: setSortBy};

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);