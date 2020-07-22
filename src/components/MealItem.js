import React from 'react';
import { Link } from 'react-router-dom'



const MealItem = (props) => {
    return (
        <div>
            <Link to={`/edit/${props.uuid}`}>
                <h1>{props.foodItem}</h1>
            </Link>
            <h3>{props.calories}</h3>
        </div>
    );
}



export default MealItem