import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchServing } from '../actions/food'

class ServingForm extends Component {
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
        const { measures } = this.props.food
        return (
            <form onSubmit={this.onSubmit}>
                <select
                    onChange={this.onChangeServing}
                    value={this.state.measureURI}>
                    {measures.map((measure, i) => <option key={i} value={measure.uri}>{measure.label}</option>)}
                </select>

                <input value={this.state.quantity}
                    type="text"
                    onChange={this.onChangeQuantity}>
                </input>

                <button type="submit">Submit</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    food: state.food
})

const mapPropsToDispatch = (dispatch) => ({
    fetchServing: obj => dispatch(fetchServing(obj))
})

export default connect(mapStateToProps, mapPropsToDispatch)(ServingForm)