import React from 'react';
import { shallow } from 'enzyme'
import { AddedList } from '../../components/AddedList'
import {meals} from '../fixtures/mealReducer'

describe('<AddedList/>', () => {
    test('renders AddedList when there are no meals added', () => {
        const wrapper = shallow(<AddedList list={[]} />)
        expect(wrapper).toMatchSnapshot()
    })
    test('renders AddedList when there are meals added', () => {
        const wrapper = shallow(<AddedList list={meals} />)
        expect(wrapper).toMatchSnapshot()
    })
})