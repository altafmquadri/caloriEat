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