/**
 * @function getFood action generator to the food reducer
 * @param {object} food object
 * @returns {object} food object searched for  
 */
export const getFood = (food) => ({
    type: 'GET_FOOD',
    payload: food
})

/**
 * @function getServing action to be dispatched by reducer
 * @param {object} serving food item retrieved from the nutrient API
 * @returns {object} the serving measurement of food item
 */
export const getServing = (serving) => ({
    type: 'GET_SERVING',
    payload: serving
})

/**
 * @function fetchFood fetch to retrieve food
 * @param {string} lookup to be passed into fetch
 * @returns {function} which will dispatch the action to bring the food item into state
 */
export const fetchFood = (lookup) => {
    return dispatch => {
        return fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${lookup}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
            .then(res => res.json())
            .then(food => dispatch(getFood(food)))
    }
}

/**
 * @function fetchServing fetch to retrieve serving
 * @param {object} obj object to be passed into fetch
 * @returns {function} which will dispatch the action to set the new selected serving state
 */
export const fetchServing = (obj) => {
    return dispatch => {
        return fetch(`https://api.edamam.com/api/food-database/v2/nutrients?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json',
                Accepts: 'application/json'
            },
            body: JSON.stringify({
                ingredients: [
                    obj
                ]
            })
        })
            .then(res => res.json())
            .then(serving => dispatch(getServing(serving)))
    }
}