import React from 'react';
import {shallow} from 'enzyme';

import FilmCard from "./FilmCard";

describe('FilmCard', () => {
    it('should render film card correctly', () => {
        const component = shallow(<FilmCard film={
            {
                'src': 'src/to/image',
                'alt': 'image alt text',
                'title': 'Film Title',
                'date': '2019',
                'genre': 'Fantasy',
                'key': '2516'
            }
        }/>);
        expect(component).toMatchSnapshot();
    })
});