import React from 'react';
import { shallow } from 'enzyme'
import { MealSummary } from '../../components/MealSummary'
import { meals } from '../fixtures/mealReducer'


describe('<MealSummary />', () => {
    test('should render MealSummary', () => {
        const renderMealCategory = jest.fn()
        const wrapper = shallow(<MealSummary meals={meals} />)
        expect(wrapper).toMatchSnapshot()
    })
})