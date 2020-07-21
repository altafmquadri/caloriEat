import { addFood } from './food'

export const addMeal = (meal) => ({
    type: 'ADD_MEAL',
    payload: meal
})


//will try to do a thunk here getState to get the info from the store

export const addFoodToMeal = (food) => {
    return (dispatch, getState) => {
        dispatch(addFood(food))
        const meal = getState().food
        console.log(meal)
        return dispatch(addMeal(meal))
    }
}