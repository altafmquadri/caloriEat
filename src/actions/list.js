/**
 * @function addToList add meal to list state
 * @param {object} meal meal added by object passed into the meal reducer
 * @returns {object} meal passed into the list reducer to add meal to list state for AddedListComponent
 */
export const addToList = (meal) => ({
    type: 'ADD_TO_LIST',
    payload: meal
})

/**
 * @function clearList dispatches action to clear list state, used within ComponentWillUnmount in AddedListComponent
 */
export const clearList = () => ({
    type: 'CLEAR_LIST'
})