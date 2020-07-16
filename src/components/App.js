import React, { Component } from 'react';
import InputForm from './InputForm'
import DisplayFood from './DisplayFood'

class App extends Component {
    render() {
        return (
            <div>
                <InputForm />
                <DisplayFood />
            </div>
        )
    }
}

export default App;