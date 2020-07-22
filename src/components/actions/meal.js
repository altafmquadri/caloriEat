import { uuid } from 'uuidv4'
import { addFood } from './food'
import { clearFood } from './food'

/**
 * @function addMeal copies the food object after it's final state change 
 * @param {object} meal object copied from food
 * @returns {object} meal object
 */
export const addMeal = (meal) => ({
    type: 'ADD_MEAL',
    payload: meal
})

/**
 * @function addFoodToMeal takes the state from food to create a meal item to be added to meals array, clears the food state
 * @param {object} food the food object will be added with meal category and date
 * @returns {function} that dispatches meal to meal reducer to update state
 */
export const addFoodToMeal = (food) => {
    return (dispatch, getState) => {
        dispatch(addFood(food))
        const meal = {
            uuid: uuid(),
            ...getState().food
        }
        dispatch(clearFood())
        return dispatch(addMeal(meal))
    }
}