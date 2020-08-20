import React from 'react';
import { Link } from 'react-router-dom'

export const MealItem = (props) => {
    return (
        <div>
            <Link to={`/edit/${props.uuid}`}>
                <h2>{props.foodItem}</h2>
            </Link>
            <h3>{props.calories}</h3>
        </div>
    )
}

export default MealItem