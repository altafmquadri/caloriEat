const mealReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MEAL': {
            const meal = action.payload
            return [...state, meal]
        }
        case 'EDIT_MEAL': {
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
                ...state.find(meal => meal.uuid === action.uuid),
                ...action.properties,
                calories,
                carbohydrates: parseFloat(carbohydrates).toFixed(2),
                fat: parseFloat(fat).toFixed(2),
                fiber: parseFloat(fiber).toFixed(2),
                protein: parseFloat(protein).toFixed(2),
            }
            return state.map(meal => {
                if (meal.uuid === action.uuid) {
                    return meal = { ...meal, ...item }
                }
                return meal
            })
        }
        case 'DELETE_MEAL': {
            const id = action.payload
            return state.filter(meal => meal.uuid !== id)
        }
        default:
            return state
    }
}

export default mealReducer