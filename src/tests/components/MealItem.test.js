import React from 'react';
import { shallow } from 'enzyme'
import MealItem from '../../components/MealItem'
import { meals } from '../fixtures/mealReducer'

describe('MealItem />', () => {
    test('should render MealItem', () => {
        const wrapper = shallow(<MealItem {...meals[0]} />)
        expect(wrapper).toMatchSnapshot()
    })
})