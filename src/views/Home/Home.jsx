import React from 'react';
import Header from '../../components/Header/Header'
import Main from "../../components/Main/Main";
import Search from "../../components/Header/Search/Search";

const Home = () => (
    <>
        <Header>
            <Search title='Find your movie' placeholder='Search'
                    button='Search'/>
        </Header>
        <Main/>
    </>
);

export default Home;