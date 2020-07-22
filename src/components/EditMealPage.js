import React, { Component } from 'react';
import { connect } from 'react-redux'

class EditMealPage extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Edit Meal</h1>
                <h3>{this.props.meal.foodItem}</h3>
                <h3>{this.props.meal.calories}</h3>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => ({
    meal: state.meals.find(meal => meal.uuid = props.match.params.uuid)
})
export default connect(mapStateToProps)(EditMealPage)