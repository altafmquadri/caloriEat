import React from 'react';
import { connect } from 'react-redux'

const AddedList = (props) => {
    console.log(props);
    return (
        <div>
            {props.meals.map(meal => (
                <li key={meal.uuid}>{`${meal.foodItem} added, calories:${meal.calories}`}</li>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    meals: state.meals
})

export default connect(mapStateToProps)(AddedList)