import React from 'react';
import { shallow } from 'enzyme'
import { ServingForm } from '../../components/ServingForm'
import { food } from '../fixtures/food'

describe('<ServingForm />', () => {
    test('should render ServingForm', () => {
        const wrapper = shallow(<ServingForm food={food} />)
        expect(wrapper).toMatchSnapshot()
    })
    test('should set Serving on serving change', () => {
        const wrapper = shallow(<ServingForm food={food} />)
        const value = 'cup'
        wrapper.find('select').simulate('change', {
            target: { value }
        })
        expect(wrapper.state('measureURI')).toBe(value)
    })
    test('should set quantity on quantity change', () => {
        const wrapper = shallow(<ServingForm food={food} />)
        const value = '3'
        wrapper.find('input').simulate('change', {
            target: { value }
        })
        expect(wrapper.state('quantity')).toBe(value)
    })
    test('should test onSubmit prop for valid form submission', () => {
        const onSubmit = jest.fn()
        const fetchServing = jest.fn()
        const value = "cup";
        const arg = {
            quantity: expect.any(Number),
            measureURI: expect.any(String),
            foodId: expect.any(String)
        }
        const wrapper = shallow(<ServingForm
            food={food}
            onSubmit={onSubmit}
            fetchServing={fetchServing} />)

        //add to pass guard condition of selecting a measurement in dropdown
        wrapper.find("select").simulate("change", {
            target: { value },
        })

        wrapper.find('form').simulate('submit', {
            preventDefault: () => { }
        })
        expect(fetchServing).toHaveBeenLastCalledWith(arg)
    })
})