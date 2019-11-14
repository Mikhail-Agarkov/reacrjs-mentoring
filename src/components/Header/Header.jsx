import React from 'react';
import Search from "./Search/Search";

export default class Header extends React.PureComponent {
    render() {
        return (
            <header>
                <span>{this.props.logo}</span>
                <Search title='Find your movie' placeholder='Search' button='Search'/>
            </header>
        );
    }
}