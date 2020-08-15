import { addToList, clearList } from '../../actions/list'
import { meal } from '../fixtures/meal'

describe('list actions', () => {
    test('adds meal to list action', () => {
        const action = addToList(meal)
        expect(action).toEqual({
            type: 'ADD_TO_LIST',
            payload: meal
        })
    })
    test('clears the meal from the list', () => {
        const action = clearList()
        expect(action).toEqual({
            type: 'CLEAR_LIST'
        })
    })
})