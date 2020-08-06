import { uuid } from 'uuidv4'
import { addFood } from './food'
import { clearFood } from './food'
import { addToList } from './list'

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
 * @function editMeal passes the uuid, obj, mealCategory, and serving to the reducer to update state
 * @param {string} uuid unique identifier
 * @param {object} obj the object to be added to state
 * @param {string} mealCategory the meal category to be added to state
 * @param {object} serving the serving fetched from the api
 * @returns {string, object, string, object} parameters that will update state in the reducer
 */
export const editMeal = (uuid, obj, mealCategory, serving) => ({
    type: 'EDIT_MEAL',
    uuid,
    properties: {
        ...obj,
        mealCategory,
    },
    payload: serving
})

/**
 * @function deleteMeal action for reducer to delete Meal from state
 * @param {string} id unique id of meal to be deleted from state
 * @returns {object} to be passed to meal reducer
 */
export const deleteMeal = (id) => ({
    type: 'DELETE_MEAL',
    payload: id
})

/**
 * @function addFoodToMeal takes the state from food to create a meal item to be added to meals array, clears the food state
 * @param {object} food the food object will be added with meal category and date
 * @returns {function} that dispatches meal to meal reducer and to list reducer to update state
 */
export const addFoodToMeal = (food) => {
    return (dispatch, getState) => {
        dispatch(addFood(food))
        const meal = {
            uuid: uuid(),
            ...getState().food
        }
        dispatch(clearFood())
        dispatch(addToList(meal))
        return dispatch(addMeal(meal))
    }
}

/**
 * @function editServing redux-thunk function that fetches edited meal
 * @param {string} uuid the unique id
 * @param {object} fetchObj the object parameters required for updating state
 * @param {string} mealCategory the category for the meal
 * @returns {string, object, string, object} parameters to dispatch in editMeal action
 */
export const editServing = (uuid, fetchObj, mealCategory) => {
    return (dispatch) => {
        return fetch(`https://api.edamam.com/api/food-database/v2/nutrients?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify({
                ingredients: [
                    fetchObj
                ]
            })
        }).then(res => res.json()).then(serving => dispatch(editMeal(uuid, fetchObj, mealCategory, serving)))
    }
}