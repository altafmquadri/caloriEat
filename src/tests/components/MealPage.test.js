import React from 'react';
import {shallow } from 'enzyme'
import MealPage from '../../components/MealPage'

describe('<MealPage />', () => {
    test('should render the MealPage component', () => {
        const wrapper = shallow(<MealPage/>)
        expect(wrapper).toMatchSnapshot()
    })
})