import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchServing } from './actions/food'


class DisplayFood extends Component {
    state = {
        quantity: '',
        measureURI: '',
        foodId: ''
    }

    onChange = e => {
        this.setState({
            quantity: 1,
            measureURI: e.target.value,
            foodId: this.props.food.foodId
        }, () => this.props.fetchServing(this.state))
    }

    render() {
        console.log(this.props);
        const displayContents = () => {
            if (this.props.food.foodItem) {
                const { foodItem, calories, carbohydrates, fat, protein, fiber, image, measures } = this.props.food
                const contents = (
                    <div>
                        <h1>{foodItem}</h1>
                        <h3>Calories: {calories}</h3>
                        <h3>Carbohydrates: {carbohydrates}g</h3>
                        <h3>Fat: {fat}g</h3>
                        <h3>Protein: {protein}g</h3>
                        <h3>Fiber: {fiber}g</h3>
                        <img alt={foodItem} src={image}></img>
                        <select
                            onChange={this.onChange}
                            value={this.state.measureURI}>
                            {measures.map((measure, i) => <option key={i} value={measure.uri}>{measure.label}</option>)}
                        </select>
                    </div >
                )
                return contents
            } else return null

        }
        console.log(this.props);
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

const mapPropsToDispatch = (dispatch) => ({
    fetchServing: obj => dispatch(fetchServing(obj))
})

export default connect(mapStateToProps, mapPropsToDispatch)(DisplayFood)