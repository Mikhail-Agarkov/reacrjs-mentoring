import React from 'react';
import {shallow} from 'enzyme';

import Logo from './Logo';

describe('Logo', () => {
    it('should render logotype of the site correctly', () => {
        const component = shallow(<Logo/>);
        expect(component).toMatchSnapshot();
    })
});