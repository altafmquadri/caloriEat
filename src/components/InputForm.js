import React, { Component } from 'react';

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
        fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${lookup}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
            .then(res => res.json())
            .then(data => console.log(data))
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

export default InputForm;