
const foodReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FOOD':
            {
                // console.log(action.payload);
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
                return { ...state, ...item }
            }

        case 'GET_SERVING':
            {
                // console.log(action.payload)
                const {
                    calories,
                    totalNutrients: {
                        CHOCDF: { quantity: carbohydrates },
                        FAT: { quantity: fat },
                        FIBTG: { quantity: fiber },
                        PROCNT: { quantity: protein },
                    }
                } = action.payload

                const item = {
                    calories,
                    carbohydrates: parseFloat(carbohydrates).toFixed(2),
                    fat: parseFloat(fat).toFixed(2),
                    fiber: parseFloat(fiber).toFixed(2),
                    protein: parseFloat(protein).toFixed(2)
                }
                return { ...state, ...item }
            }
        default:
            return state
    }
}

export default foodReducer

//need to add a case for fetching the serving which is done via a post