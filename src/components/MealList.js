import React from 'react';
import { connect } from 'react-redux'
import MealItem from './MealItem'

const MealList = (props) => {
    return (
        <div>
            {!props.meals.length ? (
                <div>
                    <span>No Meals</span>
                </div>
            ) : (
                    props.meals.map(meal =>
                        <MealItem key={meal.uuid} {...meal} />
                    )
                )}
        </div>
    );
}

const mapStateToProps = state => ({
    meals: state.meals
})

export default connect(mapStateToProps)(MealList);
