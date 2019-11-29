import React from 'react';
import {shallow, mount} from 'enzyme';

import Search from "./Search";

describe('Search', () => {
    it('should render Search correctly', () => {
        const component = shallow(<Search title='Find your movie' placeholder='Search' button='Search'/>);
        expect(component).toMatchSnapshot();
    });

    it('should perform search on button click', () => {
        const component = shallow(<Search title='Find your movie' placeholder='Search' button='Search'/>);
        component.find('form').simulate('submit');
        //expect smthing when API call is ready
    });

    it('should change "searchBy" state to "title"', () => {
        const component = mount(<Search title='Find your movie' placeholder='Search' button='Search'/>);
        component.find('Filter div button').first().simulate('click');
        expect(component.state('searchBy')).toEqual('title');
    });

    it('should change "searchBy" state to "genre"', () => {
        const component = mount(<Search title='Find your movie' placeholder='Search' button='Search'/>);
        component.find('Filter div button').last().simulate('click');
        expect(component.state('searchBy')).toEqual('genre');
    });
});