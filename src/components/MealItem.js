import React from 'react';


const MealItem = (props) => {
    return (
        <div>
            <h1>{props.foodItem}</h1>
            <h3>{props.calories}</h3>
        </div>
    );
}

export default MealItem;