import React, { Component } from 'react';
import { connect } from 'react-redux'
import ServingForm from './ServingForm'



class DisplayFood extends Component {

    render() {
        const displayContents = () => {
            if (this.props.food.foodItem) {
                const { foodItem, calories, carbohydrates, fat, protein, fiber, image } = this.props.food
                const contents = (
                    <div>
                        <h1>{foodItem}</h1>
                        <h3>Calories: {calories}</h3>
                        <h3>Carbohydrates: {carbohydrates}g</h3>
                        <h3>Fat: {fat}g</h3>
                        <h3>Protein: {protein}g</h3>
                        <h3>Fiber: {fiber}g</h3>
                        <img alt={foodItem} src={image}></img>
                        <div>
                            <ServingForm />
                        </div>
                    </div >
                )
                return contents
            } else return null

        }
        return (
            <div>
                {displayContents()}
            </div>

        )
    }
}




const mapStateToProps = (state) => ({
    food: state.food
})



export default connect(mapStateToProps)(DisplayFood)