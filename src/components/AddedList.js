import React from 'react';
import { connect } from 'react-redux'

export const AddedList = (props) => {
    return (
        <div>
            {props.list.map(meal => (
                <li key={meal.uuid}>{`${meal.foodItem} added, calories:${meal.calories}`}</li>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    list: state.list
})

export default connect(mapStateToProps)(AddedList)