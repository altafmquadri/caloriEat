import React from 'react';
import MealItem from './MealItem'

const MealList = (props) => {
    return (
        <div>
            {props.meals.length === 0 ? (
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

export default MealList
