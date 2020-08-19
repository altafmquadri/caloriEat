import React from 'react';
import { shallow } from 'enzyme'
import moment from 'moment'
import { AddFoodForm } from '../../components/AddFoodForm'


describe('<AddFoodForm />', () => {
    test('should render AddFoodForm component', () => {
        const wrapper = shallow(<AddFoodForm />)
        expect(wrapper).toMatchSnapshot()
    })
    test('should set meal category on mealCategory change', () => {
        const value = 'lunch'
        const onMealChange = jest.fn()
        const wrapper = shallow(<AddFoodForm onMealChange={onMealChange} />)
        wrapper.find('select').simulate('change', {
            target: { value }
        })
        expect(wrapper.state('mealCategory')).toBe('lunch')
    })
    test('should set new date on date change', () => {
        const now = moment()
        const wrapper = shallow(<AddFoodForm />)
        wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
        expect(wrapper.state('date')).toEqual(now)
    })
    test('should set calendar focus on change', () => {
        const focused = true
        const wrapper = shallow(<AddFoodForm />)
        wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
        expect(wrapper.state('calendarFocused')).toBe(focused)
    })
    test('should call onSubmit prop for valid form submission', () => {
        const onSubmit = jest.fn()
        const addFoodToMeal = jest.fn()
        const wrapper = shallow(<AddFoodForm onSubmit={onSubmit} addFoodToMeal={addFoodToMeal} />)
        wrapper.find('form').simulate('submit', {
            preventDefault: () => { }
        })
        expect(addFoodToMeal).toHaveBeenCalled()
    })
})