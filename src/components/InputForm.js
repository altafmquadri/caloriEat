import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchFood } from './actions/food'

class InputForm extends Component {
    state = {
        foodItem: ''
    }

    onChange = e => {
        this.setState({ foodItem: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault()
        const lookup = this.state.foodItem.split(' ').join('%20')
        this.props.fetchFood(lookup)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="enter food item here"
                    value={this.state.foodItem}
                    onChange={this.onChange}></input>
                <button type="submit">Find Food</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFood: lookup => dispatch(fetchFood(lookup))
    }
}

export default connect(undefined, mapDispatchToProps)(InputForm)