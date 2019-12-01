import React from 'react';
import {shallow} from 'enzyme';

import FilmCard from "./FilmCard";

describe('FilmCard', () => {
    it('should render film card correctly', () => {
        const component = shallow(<FilmCard film={
            {
                'poster_path': 'src/to/image',
                'title': 'Film Title',
                'release_date': '2019',
                'genres': ['Fantasy', 'Animation'],
                'id': '2516'
            }
        }/>);
        expect(component).toMatchSnapshot();
    })
});