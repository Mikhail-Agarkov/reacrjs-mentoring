import React from 'react';
import Header from '../../components/Header/Header'
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const Home = () => (
    <>
        <ErrorBoundary><Header logo='Netflix Roulette'/></ErrorBoundary>
        <ErrorBoundary><Main/></ErrorBoundary>
        <ErrorBoundary><Footer logo='Netflix Roulette'/></ErrorBoundary>
    </>
);

export default Home;