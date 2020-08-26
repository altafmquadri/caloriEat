import React from 'react';
import { shallow } from 'enzyme'
import { EditMealPage } from '../../components/EditMealPage'
import { meals } from '../fixtures/mealReducer'

describe('<EditMealPage />', () => {
    let wrapper, meal, editServing, history, location, deleteMeal

    beforeEach(() => {
        meal = meals[0]
        editServing = jest.fn()
        history = { push: jest.fn() }
        location = { date: jest.fn() }
        editServing = jest.fn()
        deleteMeal = jest.fn()

        wrapper = shallow(<EditMealPage
            meal={meal}
            editServing={editServing}
            history={history}
            location={location}
            deleteMeal={deleteMeal} />)
    })
    test('should render the EditMealPage', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('should correctly change measure', () => {
        const value = "http://www.edamam.com/ontologies/edamam.owl#Measure_bottle"
        wrapper.find('select').at(0).simulate('change', {
            target: { value }
        })
        expect(wrapper.state('measureURI')).toBe(value)
    })
    test('should correctly change quantity', () => {
        const value = "2"
        wrapper.find('input').at(0).simulate('change', {
            target: { value }
        })
        expect(wrapper.state('quantity')).toBe(value)
    })
    test('should correctly change mealCategory', () => {
        const value = 'dinner'
        wrapper.find('select').at(1).simulate('change', {
            target: { value }
        })
        expect(wrapper.state('mealCategory')).toBe(value)
    })
    test('should handle form submission', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault: () => { }
        })
        expect(editServing).toHaveBeenCalledTimes(1)
        expect(history.push).toHaveBeenCalledWith({
            pathname: '/',
            state: expect.any(Object)
        })
    })
    test('should handle delete', () => {
        expect(wrapper.find('button').at(1).text()).toBe('Remove Meal')
        wrapper.find('button').at(1).simulate('click')
        expect(deleteMeal).toHaveBeenCalledTimes(1)
        expect(history.push).toHaveBeenLastCalledWith('/')
    })
})