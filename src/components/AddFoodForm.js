import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker } from 'react-dates'
import { addFoodToMeal } from './actions/meal'

class AddFoodForm extends Component {
    state = {
        date: moment(),
        mealCategory: 'breakfast',
        calendarFocused: false,
    }

    onDateChange = date => {
        if (date) this.setState({ date })
    }

    onSubmit = e => {
        e.preventDefault()
        const food = {
            date: this.state.date,
            mealCategory: this.state.mealCategory
        }
        this.props.addFoodToMeal(food)
    }

    onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused })
    onMealChange = e => this.setState({ mealCategory: e.target.value })

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <select value={this.state.mealCategory}
                        onChange={this.onMealChange}>
                        <option value='breakfast'>Breakfast</option>
                        <option value='lunch'>Lunch</option>
                        <option value='dinner'>Dinner</option>
                        <option value='snack'>Snack</option>
                    </select>
                    <SingleDatePicker
                        date={this.state.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        id="caloriEat-addFood-form" />
                    <button type="submit">Add Food</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addFoodToMeal: food => dispatch(addFoodToMeal(food))
})

const mapStateToProps = state => ({
    food: state.food
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFoodForm)