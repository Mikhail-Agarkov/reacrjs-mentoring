import React from 'react';
import {mount, shallow} from 'enzyme';

import StatusBar from "./StatusBar";

describe('StatusBar', () => {
    it('should render Status Bar correctly', () => {
        const component = shallow(<StatusBar/>);
        expect(component).toMatchSnapshot();
    });

    it('should perform API call with Filter "Release date"', () => {
        const component = mount(<StatusBar/>);
        component.find('Filter div button').first().simulate('click');
        //expect smthing when API call is ready
    });

    it('should perform API call with Filter "Rating"', () => {
        const component = mount(<StatusBar/>);
        component.find('Filter div button').last().simulate('click');
        //expect smthing when API call is ready
    });
});