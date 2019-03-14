import React, {Component, Fragment} from 'react'
import Food from '../../components/Food/Food'
import BuildControls from '../../components/Food/BuildControls/BuildControls'

const INGREDIENT_PRICES = { //Global const for prices
        lettuce: 1,
        cheese:  2,
        chilli:  0.5,
        thePatty:3
}

class FoodBuilder extends Component {
    state= {
        ingredients: { //key value pairs key:ingredients, value:amount
            lettuce: 1,
            cheese:  1,
            chilli:  2,
            thePatty:1
        },
        totalPrice: 5//base price is 5
    }

    addIngredients = (type) => {
        const prevCount = this.state.ingredients[type]//to add ingredient we need to know previous ingredient count
        const updatedCount = prevCount + 1
        const updatedIngredient = {...this.state.ingredients}//to update state in immutable way spread operator is used 
        updatedIngredient[type] = updatedCount

        const sumOfPrice = INGREDIENT_PRICES[type]
        const prevPrice = this.state.totalPrice
        const updatedPrice = prevPrice + sumOfPrice
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredient})

    }

    removeIngredients = (type) => {
        const prevCount = this.state.ingredients[type]
        const updatedCount = prevCount - 1
        const updatedIngredient = {...this.state.ingredients}
        updatedIngredient[type] = updatedCount

        const DeductionOfPrice = INGREDIENT_PRICES[type]
        const prevPrice = this.state.totalPrice
        const updatedPrice = prevPrice - DeductionOfPrice
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredient})

    }


    render () {
        return (
            <Fragment>
                <Food ingredients={this.state.ingredients}/>{/*Passing key value pairs of ingredients given. graphical rep of food with ingredients */}
                <BuildControls
                    newIngredientAdded = {this.addIngredients}  //Add or remove ingredients 
                    ingredientRemoved = {this.removeIngredients}/> 
            </Fragment>
        )
    }
}

export default FoodBuilder