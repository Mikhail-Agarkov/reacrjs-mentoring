import React from 'react';
import StatusBar from "../StatusBar/StatusBar";
import FilmList from "../FilmList/FilmList";
import styles from './filmmain.module.scss'

const FilmMain = () => (
    <main>
        <StatusBar>
            <span className={styles.text}>Movies with a similar genre</span>
        </StatusBar>
        <FilmList/>
    </main>
);

export default FilmMain;