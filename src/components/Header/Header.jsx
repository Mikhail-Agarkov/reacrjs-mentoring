import React from 'react';
import Search from './Search/Search';
import Logo from "../Logo/Logo";
import styles from './header.module.scss'

export default class Header extends React.PureComponent {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.content}>
                    <Logo />
                    <div className={styles.body}>
                        <Search title='Find your movie' placeholder='Search' button='Search' />
                    </div>
                </div>
            </header>
        );
    }
}