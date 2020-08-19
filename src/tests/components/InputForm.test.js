import React from 'react';
import { shallow } from 'enzyme'
import { InputForm } from '../../components/InputForm'

describe('<InputForm />', () => {
    test('should render InputForm', () => {
        const wrapper = shallow(<InputForm />)
        expect(wrapper).toMatchSnapshot()
    })
    test('should set foodItem on input change', () => {
        const value = 'milk'
        const wrapper = shallow(<InputForm />)
        wrapper.find('input').simulate('change', {
            target: { value }
        })
        expect(wrapper.state('foodItem')).toBe('milk')
    })
    test('should test onSubmit prop for form submission', () => {
        const onSubmit = jest.fn()
        const fetchFood = jest.fn()
        const wrapper = shallow(<InputForm onSubmit={onSubmit} fetchFood={fetchFood} />)
        wrapper.find('form').simulate('submit', {
            preventDefault: () => { }
        })
        expect(fetchFood).toHaveBeenCalled()
    })
})