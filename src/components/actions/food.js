export const getFood = (food) => ({
    type: 'GET_FOOD',
    food
})

export const fetchFood = (lookup) => {
    return dispatch => {
        return fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${lookup}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
            .then(res => res.json())
            .then(food => dispatch(getFood(food)))
    }
}