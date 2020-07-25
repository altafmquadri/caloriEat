import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editServing } from './actions/meal';

class EditMealPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uuid: this.props.meal.uuid,
            foodId: this.props.meal.foodId,
            measureURI: this.props.meal.measureURI,
            quantity: this.props.meal.quantity,
            mealCategory: this.props.meal.mealCategory
        }
    }

    onMeasureChange = e => (this.setState({ measureURI: e.target.value }))
    onQuantityChange = e => (this.setState({ quantity: e.target.value }))
    onMealCategoryChange = e => (this.setState({ mealCategory: e.target.value }))

    onSubmit = e => {
        e.preventDefault()
        const { foodId, measureURI, quantity, uuid, mealCategory } = this.state
        const editsObj = {
            foodId,
            measureURI,
            quantity: parseInt(quantity)
        }
        this.props.editServing(uuid, editsObj, mealCategory)

    }

    render() {
        const { foodItem, calories, measures } = this.props.meal
        const { measureURI, quantity, mealCategory } = this.state
        return (
            <div>
                <h1>Edit Meal</h1>
                <h3>{foodItem}</h3>
                <h3>{calories}</h3>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <select
                            value={measureURI}
                            onChange={this.onMeasureChange}>
                            {measures.map((measure, i) => <option key={i} value={measure.uri}>{measure.label}</option>)}
                        </select>
                        <input
                            value={quantity}
                            onChange={this.onQuantityChange}
                            type="text"></input>
                        <select value={mealCategory}
                            onChange={this.onMealCategoryChange}>
                            <option value='breakfast'>Breakfast</option>
                            <option value='lunch'>Lunch</option>
                            <option value='dinner'>Dinner</option>
                            <option value='snack'>Snack</option>
                        </select>
                        <button type="submit">Edit Meal</button>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    meal: state.meals.find(meal => meal.uuid === props.match.params.uuid)
})

const mapDispatchToProps = dispatch => ({
    editServing: (uuid, fetchObj, mealCategory) => dispatch(editServing(uuid, fetchObj, mealCategory))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditMealPage)