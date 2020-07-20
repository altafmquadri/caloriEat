import React, { Component } from 'react';
import { connect } from 'react-redux'
import ServingForm from './ServingForm'
import AddFoodForm from './AddFoodForm'

class DisplayFood extends Component {

    render() {
        const {
            calories,
            carbohydrates,
            fat,
            foodItem,
            fiber,
            image,
            protein
        } = this.props.food

        const contents = (
            <div>
                <h1>{foodItem}</h1>
                <h3>Calories: {calories}</h3>
                <h3>Carbohydrates: {carbohydrates}g</h3>
                <h3>Fat: {fat}g</h3>
                <h3>Fiber: {fiber}g</h3>
                <h3>Protein: {protein}g</h3>
                <img alt={foodItem} src={image}></img>
                <div>
                    <ServingForm />
                    <AddFoodForm />
                </div>
            </div >
        )

        return (
            <div>
                {this.props.food.foodItem ? contents : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    food: state.food
})

export default connect(mapStateToProps)(DisplayFood)

//should create another form to add meal, breakfast, lunch, dinner snack, and use state to pass meal state to component to reuse it to search and display food as well as add food