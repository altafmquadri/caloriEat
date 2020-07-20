const mealReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MEAL': {
            console.log(action.payload);
            const meal  = action.payload
            console.log(meal);
            return [...state, meal]
        }
        default:
            return state
    }
}

export default mealReducer