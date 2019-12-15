import React from 'react';
import Error from "../../components/Error/Error";
import Search from "../../components/Header/Search/Search";
import Header from "../../components/Header/Header";

const NotFound = () => (
    <>
        <Header>
            <Search title='Find your movie' placeholder='Search'
                    button='Search'/>
        </Header>
        <Error title='404' message='The page is not found'/>
    </>
);

export default NotFound;