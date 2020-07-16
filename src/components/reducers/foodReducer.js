

const foodReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FOOD':
            console.log(action.payload);
            const { ENERC_KCAL: calories,
                CHOCDF: carbohydrates,
                FAT: fat,
                FIBTG: fiber,
                PROCNT: protein
            } = action.payload.parsed[0].food.nutrients

            const { text: foodItem } = action.payload
            const { image, foodId } = action.payload.parsed[0].food
            const { measures } = action.payload.hints[0]

            const item = {
                foodItem,
                foodId,
                calories,
                carbohydrates,
                fat,
                fiber,
                protein,
                measures,
                image
            }
            return item
        // return action.payload
        default:
            return state
    }
}

export default foodReducer