import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker } from 'react-dates'
import { addFood } from './actions/food'
import { addMeal } from './actions/meal'

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
        this.props.addFood(food) //from mapDispatch to props updates the food state, viewing in redux tools shows proper state for food
        const meal = this.props.food //comes from mapStateToProps 
        console.log(this.props, 'logging props before meal assignment');
        console.log(meal, 'in form') //logging this shows it's not the updated state I am expecting
        this.props.addMeal(meal) //trying to add state from food reducer to the meal reducer, meal reducer is not updated via redux tools
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
    addFood: food => dispatch(addFood(food)),
    addMeal: meal => dispatch(addMeal(meal))
})

const mapStateToProps = state => ({
    food: state.food
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFoodForm)