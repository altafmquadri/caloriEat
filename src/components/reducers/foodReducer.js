
const foodReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FOOD':
            return action.food
        default:
            return state
    }
}

export default foodReducer