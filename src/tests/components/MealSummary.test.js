import React from 'react';
import { shallow } from 'enzyme'
import { MealSummary } from '../../components/MealSummary'
import { meals } from '../fixtures/mealReducer'


describe('<MealSummary />', () => {
    test('should render MealSummary', () => {
        const location = {
            state: undefined
        }
        const wrapper = shallow(<MealSummary meals={meals} location={location} />)
        expect(wrapper).toMatchSnapshot()
    })
})