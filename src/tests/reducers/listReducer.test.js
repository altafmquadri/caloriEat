import listReducer from '../../reducers/listReducer'
import { meal } from '../fixtures/meal'

describe('listReducer tests', () => {
    test('set up default state for listReducer', () => {
        const state = listReducer(undefined, { type: '@@INIT' })
        expect(state).toEqual([])
    })
    test('adds meal to the list', () => {
        const state = listReducer([], { type: 'ADD_TO_LIST', payload: meal })
        expect(state).toEqual([meal])
    })
    test('deletes meal from the list', () => {
        const state = listReducer(meal, { type: 'CLEAR_LIST' })
        expect(state).toEqual([])
    })
})