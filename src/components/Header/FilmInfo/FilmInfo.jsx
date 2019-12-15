import React from 'react';
import styles from './filminfo.module.scss';
import {getYearFromDateString} from '../../../util/utils'
import {connect} from "react-redux";

const FilmInfo = (props) => {
    if (props['filmInfo']) {
        const {poster_path, title, vote_average, release_date, runtime, overview} = props['filmInfo'];
        return (
            <div className={styles.content}>
                <div className={styles.poster}>
                    <img src={poster_path} alt={title}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.main}>
                        <span className={styles.title}>{title}</span>
                        <span className={styles.rating}>{vote_average}</span>
                    </div>
                    <div className={styles.metadata}>
                        <span><span className={styles.red}>{getYearFromDateString(release_date)}</span>year</span>
                        <span><span className={styles.red}>{runtime}</span>min</span>
                    </div>
                    <div>
                        {overview}
                    </div>
                </div>
            </div>
        );
    } else {
        return '';
    }
};

const mapStateToProps = (state) => ({
    filmInfo: state.movies.filmInfo
});

export default connect(mapStateToProps)(FilmInfo);
