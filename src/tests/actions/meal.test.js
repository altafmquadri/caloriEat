import { addMeal, editMeal, deleteMeal } from '../../actions/meal'
import { food, measurement, category } from '../fixtures/food'

describe('meal actions', () => {
    test('should add meal to the actions object', () => {
        const meal = {
            uuid: 'abc123',
            ...food,
            ...measurement,
            ...category
        }
        const action = addMeal(meal)
        expect(action).toEqual({
            type: 'ADD_MEAL',
            payload: meal
        })
    })
    test('should edit meal in action object', () => {
        const uuid = 'abc123'
        const obj = {
            quantity: 2,
            measureURI: 'http://www.edamam.com/ontologies/edamam.owl#Measure_cup'
        }
        const mealCategory = 'lunch'
        const serving = expect.any(Object)
        const action = editMeal(uuid, obj, mealCategory, serving)
        expect(action).toEqual({
            type: 'EDIT_MEAL',
            uuid,
            properties: {
                ...obj,
                mealCategory
            },
            payload: serving
        })
    })
    test('should delete meal from the actions object', () => {
        const id = 'abc123'
        const action = deleteMeal(id)
        expect(action).toEqual({
            type: 'DELETE_MEAL',
            payload: id
        })
    })
})