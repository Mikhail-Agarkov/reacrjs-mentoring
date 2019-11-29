import React from 'react';
import {shallow} from 'enzyme';

import Filter from './Filter';

describe('Filter', () => {
    it('should render Filter correctly', () => {
        const component = shallow(<Filter title='Sort by' buttons={
            [
                {
                    'handler': 'someFunc()',
                    'text': 'genre',
                    'key': 1
                },
                {
                    'handler': 'someFunc()',
                    'text': 'title',
                    'key': 2
                }
            ]
        }/>);
        expect(component).toMatchSnapshot();
    })
});