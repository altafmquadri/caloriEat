import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputForm from './InputForm'
import DisplayFood from './DisplayFood';
import AddedList from './AddedList'
import { clearList } from './actions/list';

class SearchFood extends Component {
    componentWillUnmount() {
        this.props.clearList()
    }

    onDone = () => {
        this.props.history.push('/')
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Search Food</h1>
                <InputForm />
                <DisplayFood />
                <button onClick={this.onDone}>Done</button>
                <div>
                    <AddedList />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    clearList: () => dispatch(clearList())
})

export default connect(undefined, mapDispatchToProps)(SearchFood)
