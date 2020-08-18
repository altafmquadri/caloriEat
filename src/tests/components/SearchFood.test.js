import React from 'react';
import { shallow } from 'enzyme'
import { SearchFood } from '../../components/SearchFood'


describe('<SearchFood />', () => {
    test('renders SearchFood component', () => {
        const wrapper = shallow(<SearchFood />)
        expect(wrapper).toMatchSnapshot()
    })
    test('should handle onDone', () => {
        const onDone = jest.fn()
        const history = { push: jest.fn() }
        const wrapper = shallow(<SearchFood onDone={onDone} history={history} />)
        wrapper.find('button').simulate('click')
        expect(history.push).toHaveBeenLastCalledWith('/')
    })
    test('componentWillUnmount should be called with clearList', () => {
        const clearList = jest.fn()
        const wrapper = shallow(<SearchFood clearList={clearList} />)
        const componentWillUnmount = jest.spyOn(wrapper.instance(), 'componentWillUnmount')
        wrapper.unmount()
        expect(componentWillUnmount).toHaveBeenCalled()
        expect(clearList).toHaveBeenCalled()
        componentWillUnmount.mockRestore()
    })
})