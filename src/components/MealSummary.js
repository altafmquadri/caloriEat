import React, { Component } from 'react';
import { connect } from 'react-redux'
import MealList from './MealList';
import { capitalize } from '../helpers/helpers'


class MealSummary extends Component {
    state = {}

    renderMealCategory = (mealCategory) => {
        return this.props.meals.filter(meal => meal.mealCategory === mealCategory)
    }

    renderFilteredTotal = (mealCategory) => {
        return this.props.meals.filter(meal => meal.mealCategory === mealCategory)
            .reduce((sum, n) => sum + n.calories, 0)
    }

    renderTotal = () => (this.props.meals.reduce((sum, n) => sum + n.calories, 0))

    renderMeals = () => {
        const categories = ['breakfast', 'lunch', 'dinner', 'snack']

        return categories.map(category => {
            return (
                <div key={category}>
                    <h1>{capitalize(category)}</h1>
                    <MealList meals={this.renderMealCategory(category)} />
                    <h4>Total: {this.renderFilteredTotal(category)}</h4>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Summary Page</h1>
                {this.renderMeals()}
                <div>
                    <h1>Total Calories Consumed: {this.renderTotal()}</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    meals: state.meals
})

export default connect(mapStateToProps)(MealSummary)