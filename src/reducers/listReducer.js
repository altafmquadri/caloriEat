const listReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            const meal = action.payload
            return [...state, meal]
        case 'CLEAR_LIST':
            return state = []
        default:
            return state
    }
}

export default listReducer