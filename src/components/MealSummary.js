import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import MealList from './MealList';
import { capitalize } from '../helpers/helpers'

export class MealSummary extends Component {
    state = {
        date: moment(),
        calendarFocused: false
    }

    componentDidMount() {
        this.setDateOnMount()
    }

    setDateOnMount = () => {
        let date
        if (this.props.location.state) {
            date = moment(this.props.location.state.date)
        }
        this.setState({ date: date || moment() },
            () => this.props.location.state = undefined
        )
    }

    onDateChange = date => {
        if (date) this.setState({ date })
    }
    onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused })

    renderMealCategory = (mealCategory) => {
        return this.props.meals.filter(meal => meal.mealCategory === mealCategory && moment(meal.date).isSame(this.state.date, 'day'))
    }

    renderFilteredTotal = (mealCategory) => {
        return this.props.meals.filter(meal => meal.mealCategory === mealCategory && moment(meal.date).isSame(this.state.date, 'day'))
            .reduce((sum, n) => sum + n.calories, 0)
    }

    renderTotal = () => (this.props.meals.filter(meal => moment(meal.date).isSame(this.state.date, 'day')).reduce((sum, n) => sum + n.calories, 0))

    renderMeals = () => {
        const categories = ['breakfast', 'lunch', 'dinner', 'snack']

        return categories.map(category => {
            return (
                <div key={category}>
                    <h1>{capitalize(category)}</h1>
                    <MealList meals={this.renderMealCategory(category)} date={this.state.date.valueOf()} />
                    <h4>Total: {this.renderFilteredTotal(category)}</h4>
                </div>
            )
        })
    }

    goToToday = () => this.setState({ date: moment() })

    render() {
        return (
            <div>
                <h1>Summary Page</h1>
                <SingleDatePicker
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    id="caloriEat-meal-summary" />
                {this.state.date.isSame(moment(), 'day') ? null : <button onClick={this.goToToday}>Today</button>}
                {this.renderMeals()}
                <div>
                    <h1>Total Calories Consumed: {this.renderTotal()}</h1>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    meals: state.meals
})

export default withRouter(connect(mapStateToProps)(MealSummary))