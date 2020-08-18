import React from 'react';
import { shallow } from 'enzyme'
import MealList from '../../components/MealList'
import { meals } from '../fixtures/mealReducer'

describe('<MealList/>', () => {
    test('renders MealList without any meals', () => {
        const wrapper = shallow(<MealList meals={[]} />)
        expect(wrapper.find('span').text()).toBe('No Meals')
        expect(wrapper).toMatchSnapshot()
    })
    test('renders MealList with meals', () => {
        const wrapper = shallow(<MealList meals={meals} />)
        expect(wrapper).toMatchSnapshot()
        
    })
})