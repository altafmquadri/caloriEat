import mealReducer from '../../reducers/mealReducer'
import { food, measurement, category } from '../fixtures/food'
import { meals, mealCategory, obj, serving, editedMeal } from '../fixtures/mealReducer'
import { meal } from '../fixtures/meal'

describe('mealReducer tests', () => {
    test('should setup the default state of meal as an array', () => {
        const state = mealReducer(undefined, { type: '@@INIT' })
        expect(state).toEqual([])
    })
    test('should add a meal to the meals array', () => {
        const foodToMeal = { uuid: 'abc123', ...food, ...measurement, ...category }
        const state = mealReducer(meals, { type: 'ADD_MEAL', payload: foodToMeal })
        expect(state.length).toBe(4)
        expect(state[3]).toEqual(meal)
    })
    test('should edit a particular meal object', () => {
        const uuid = '2'
        const action = {
            type: 'EDIT_MEAL',
            uuid,
            properties: {
                ...obj,
                mealCategory
            },
            payload: serving
        }
        const state = mealReducer(meals, action)
        expect(state[1]).toEqual(editedMeal)
    })
    test('should delete a meal object', () => {
        const id = meals[2].uuid
        const state = mealReducer(meals, { type: 'DELETE_MEAL', payload: id })
        expect(state.length).toBe(2)
        expect(state).toEqual([state[0], state[1]])
    })
})