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
            console.log(action.uuid);
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
        default:
            return state
    }
}

export default mealReducer