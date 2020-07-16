import React, { Component } from 'react';
import { connect } from 'react-redux'


class DisplayFood extends Component {
    state = {}
    render() {
        // console.log(this.props.food);
        // const displayContents = () => {
        //     if (this.props.food.text) {
        // const { ENERC_KCAL: calories,
        //     CHOCDF: carbohydrates,
        //     FAT: fat,
        //     FIBTG: fiber,
        //     PROCNT: protein
        // } = this.props.food.parsed[0].food.nutrients

        // const { text: foodItem } = this.props.food
        // const { image, foodId } = this.props.food.parsed[0].food
        // const { measures } = this.props.food.hints[0]

        // const item = {
        //     foodItem,
        //     foodId,
        //     calories,
        //     carbohydrates,
        //     fat,
        //     fiber,
        //     protein,
        //     measures,
        //     image
        // }
        // console.log(item);

        //     const contents = (
        //         <div>
        //             <h1>{foodItem}</h1>
        //             <h3>Calories: {calories}</h3>
        //             <h3>Carbohydrates: {carbohydrates}g</h3>
        //             <h3>Fat: {fat}g</h3>
        //             <h3>Protein: {protein}g</h3>
        //             <h3>Fiber: {fiber}g</h3>
        //             <img src={image}></img>
        //             <select>
        //                 {measures.map((measure, i) => <option key={i} value={measure.uri}>{measure.label}</option>)}
        //             </select>
        //         </div >
        //     )
        //     return contents
        // } else return null

        // }
        console.log(this.props);
        return (
            <div>

            </div>

        )
    }
}




const mapStateToProps = (state) => ({
    food: state.food
})

export default connect(mapStateToProps)(DisplayFood)