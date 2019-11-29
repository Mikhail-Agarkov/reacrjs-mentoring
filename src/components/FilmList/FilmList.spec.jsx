import React from 'react';
import {shallow} from 'enzyme';

import FilmList from "./FilmList";
import FilmCard from "./FilmCard/FilmCard";

describe('FilmCard', () => {
    it('should render film list section correctly', () => {
        const component = shallow(<FilmList films={
            [
                {
                    'src': 'src/to/image',
                    'alt': 'image alt text',
                    'title': 'Film Title',
                    'date': '2019',
                    'genre': 'Fantasy',
                    'key': '2516'
                },
                {
                    'src': 'src/to/another/image',
                    'alt': 'another image alt text',
                    'title': 'Another Film Title',
                    'date': '2020',
                    'genre': 'Comedy',
                    'key': '6498'
                }
            ]
        }/>);
        expect(component).toMatchSnapshot();
    })
});