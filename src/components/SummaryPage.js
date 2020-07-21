import React, { Component } from 'react';
import { connect } from 'react-redux'

class SummaryPage extends Component {
    state = {}

    renderMeals = () => {
        console.log(this.props.meals);
        return this.props.meals.map(meal =>
            <div key={meal.foodId}>
                <h1>{meal.foodItem}</h1>
                <h3>{meal.calories}</h3>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Summary Page</h1>
                {this.renderMeals()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    meals: state.meals
})

export default connect(mapStateToProps)(SummaryPage)