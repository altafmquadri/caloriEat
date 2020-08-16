import foodReducer from '../../reducers/foodReducer'
import { fetchedObj, item, serving, objToState } from '../fixtures/foodReducer'
import { food, measurement, category } from '../fixtures/food'


describe('foodReducer tests', () => {
    test('should set up default food object', () => {
        const state = foodReducer(undefined, { type: '@@INIT' })
        expect(state).toEqual({})
    })
    test('should setup the food item when searched', () => {
        const state = foodReducer({}, { type: 'GET_FOOD', payload: fetchedObj })
        expect(state).toEqual(item)
    })
    test('should get serving information for food object', () => {
        const action = { type: 'GET_SERVING', payload: serving, obj: objToState }
        const state = foodReducer(item, action)
        expect(state).toEqual({
            ...state,
            ...objToState
        })
    })
    test('should add date and mealCategory to food', () => {
        const oldState = { ...food, ...measurement }
        const action = { type: 'ADD_FOOD', payload: category }
        const state = foodReducer(oldState, action)
        expect(state).toEqual({
            ...state,
            ...category
        })
    })
    test('should clear the food object state', () => {
        const state = foodReducer(food, { type: 'CLEAR_FOOD' })
        expect(state).toEqual({})
    })
})