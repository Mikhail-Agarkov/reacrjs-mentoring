import React from 'react';
import Error from "../src/components/Error/Error";

export default {
    title: 'Error'
};

export const error404 = () => <Error title='404' message='The page is not found'/>;
export const error500 = () => <Error title='Oops!' message='Something went wrong! Please try again later!'/>;
