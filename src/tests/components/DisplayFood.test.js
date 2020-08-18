import React from 'react';
import { shallow } from 'enzyme'
import { DisplayFood } from '../../components/DisplayFood'
import { food } from '../fixtures/food'

describe('<DisplayFood', () => {
    test('renders DisplayFood when no Food has been searched', () => {
        const wrapper = shallow(<DisplayFood food={{}} />)
        expect(wrapper).toMatchSnapshot()
    })
    test('renders DisplayFood when Food has been searched', () => {
        const wrapper = shallow(<DisplayFood food={food} />)
        expect(wrapper).toMatchSnapshot()
    })
})