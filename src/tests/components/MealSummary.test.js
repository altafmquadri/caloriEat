import React from 'react';
import moment from 'moment'
import { shallow } from 'enzyme'
import { MealSummary } from '../../components/MealSummary'
import { meals } from '../fixtures/mealReducer'


describe('<MealSummary />', () => {
    test('should render MealSummary where date defaults to today', () => {
        const location = {
            state: undefined
        }
        const wrapper = shallow(<MealSummary meals={meals} location={location} />)
        expect(wrapper.find('button').length).toBe(0)
        expect(wrapper).toMatchSnapshot()
    })
    test('should render MealSummary with date selected', () => {
        const date = moment('2020-08-17T18:37:00.048Z')
        const location = {
            state: undefined
        }
        const wrapper = shallow(<MealSummary meals={meals} location={location} />)
        wrapper.setState({ date })
        expect(wrapper.state('date')).toBe(date)
        expect(wrapper.find('button').text()).toBe('Today')
        expect(wrapper).toMatchSnapshot()
    })
})