import { getFood, getServing, addFood, clearFood } from '../../actions/food'
import { food, measurement, category } from '../fixtures/food'

describe('food actions', () => {
    test('should get food item action object', () => {
        const action = getFood(food)
        expect(action).toEqual({
            type: 'GET_FOOD',
            payload: food
        })
    })
    test('should get measurements to action object', () => {
        const action = getServing(food, measurement) 
        expect(action).toEqual({
            type: 'GET_SERVING',
            payload: food,
            obj: measurement
        })
    })
    test('should add meal category to action object', () => {
        const action = addFood(category)
        expect(action).toEqual({
            type: 'ADD_FOOD',
            payload: category
        })
    })
    test('should clear the food action object', () => {
        const action = clearFood()
        expect(action).toEqual({
            type: 'CLEAR_FOOD'
        })
    })
})