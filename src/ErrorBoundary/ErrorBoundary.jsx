import React from 'react';
import Error from "../components/Error/Error";

export default class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {error: null, errorInfo: null};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.error) {
            return <Error title='Oops!' message='Something went wrong! Please try again later!'/>;
        }

        return this.props.children;
    }

}