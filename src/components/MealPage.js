import React from 'react';
import MealSummary from './MealSummary';
import MealList from './MealList';

const MealPage = () => {
    return ( 
        <div>
            <MealSummary />
            <MealList />
        </div>
     );
}
 
export default MealPage;