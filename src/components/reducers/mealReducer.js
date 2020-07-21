const mealReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MEAL': {
            const meal  = action.payload
            return [...state, meal]
        }
        default:
            return state
    }
}

export default mealReducer