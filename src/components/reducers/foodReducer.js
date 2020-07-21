
const foodReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FOOD':
            {
                const {
                    text: foodItem,
                    hints: {
                        0: {
                            measures: [
                                ...measures
                            ]
                        }
                    },
                    parsed: {
                        0: {
                            food: {
                                image,
                                foodId,
                                nutrients: {
                                    ENERC_KCAL: calories,
                                    CHOCDF: carbohydrates,
                                    FAT: fat,
                                    FIBTG: fiber,
                                    PROCNT: protein
                                }
                            }
                        }
                    }
                } = action.payload

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
                    protein: parseFloat(protein).toFixed(2),
                    ...action.obj
                }
                return { ...state, ...item }
            }
        case 'ADD_FOOD':
            {
                const { date, mealCategory } = action.payload
                const itemDetails = {
                    date,
                    mealCategory
                }
                return { ...state, ...itemDetails }
            }
        case 'CLEAR_FOOD':
            return state = {}
        default:
            return state
    }
}

export default foodReducer
