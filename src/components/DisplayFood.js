import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchServing } from './actions/food'


class DisplayFood extends Component {
    state = {
        quantity: 1,
        measureURI: '',
        foodId: ''
    }

    onSubmit = e => {
        e.preventDefault()
        if (!this.state.measureURI) return
        this.setState({ foodId: this.props.food.foodId }, () => this.props.fetchServing({
            quantity: parseInt(this.state.quantity),
            measureURI: this.state.measureURI,
            foodId: this.state.foodId
        }))
    }

    onChangeServing = (e) => this.setState({ measureURI: e.target.value })
    onChangeQuantity = (e) => this.setState({ quantity: e.target.value })

    render() {
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
                        <div>

                            <form onSubmit={this.onSubmit}>
                                <select
                                    onChange={this.onChangeServing}
                                    value={this.state.measureURI}>
                                    {measures.map((measure, i) => <option key={i} value={measure.uri}>{measure.label}</option>)}
                                </select>

                                <input value={this.state.quantity}
                                    type="text"
                                    onChange={this.onChangeQuantity} />

                                <button type="submit">Submit</button>

                            </form>
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

const mapPropsToDispatch = (dispatch) => ({
    fetchServing: obj => dispatch(fetchServing(obj))
})

export default connect(mapStateToProps, mapPropsToDispatch)(DisplayFood)