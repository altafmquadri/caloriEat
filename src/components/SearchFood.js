import React, { Component } from 'react';
import InputForm from './InputForm'
import DisplayFood from './DisplayFood';

class SearchFood extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Search Food</h1>
                <InputForm />
                <DisplayFood />
            </div>
        );
    }
}

export default SearchFood;

//probably need some kind of list to display adding of food and a button that programmatically routes user to summary page