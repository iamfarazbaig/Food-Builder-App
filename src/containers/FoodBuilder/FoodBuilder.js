import React, {Component, Fragment} from 'react'
import Food from '../../components/Food/Food'
import BuildControls from '../../components/Food/BuildControls/BuildControls'
import OPage from '../../components/UI/OPage/OPage'
import OrderSummary from '../../components/Food/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = { //Global const for prices
        lettuce: 1,
        cheese:  2,
        chilli:  0.5,
        Patty:3
}

class FoodBuilder extends Component {
    state= {
        ingredients: { //key value pairs key:ingredients, value:amount
            lettuce: 0,
            cheese:  0,
            chilli:  0,
            Patty:0
        },
        totalPrice: 0,//base price is 0
        canPurchase : false,
        purchaseMode : false
    }

    purchaseState (ingredients) {
         const sum = Object.keys(ingredients) //creating an array of string entities 
                .map(iKey => { return ingredients[iKey]}) //using map to replace old value of ingredient with new ones by iKey. we are getting the numbers for ingredients
                .reduce((sum, el) => {
                    return sum + el;
                }, 0)// to return sum of all ingredients, keeping initialValue = 0 and el is the value accessed from ingredients[iKey]
        this.setState({canPurchase : sum > 0})
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
        this.purchaseState(updatedIngredient); //pass updatedIngredient to purchaseState for updated values
    }

    removeIngredients = (type) => {
        const prevCount = this.state.ingredients[type]
        if(prevCount <= 0) { //to avoid error if count goes less than 0 as array cant return negative value
            return 
        }
        const updatedCount = prevCount - 1
        const updatedIngredient = {...this.state.ingredients}
        updatedIngredient[type] = updatedCount

        const DeductionOfPrice = INGREDIENT_PRICES[type]
        const prevPrice = this.state.totalPrice
        const updatedPrice = prevPrice - DeductionOfPrice
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredient})
        this.purchaseState(updatedIngredient);
        }

        purchaseHandler = () => {
            this.setState({purchaseMode : true})
        } 

    render () {
        return (
            <Fragment>
                <OPage show ={this.state.purchaseMode}>
                    <OrderSummary ingredients = {this.state.ingredients} />
                </OPage>
                <Food ingredients={this.state.ingredients}/>{/*Passing key value pairs of ingredients given. graphical rep of food with ingredients */}
                <BuildControls
                    newIngredientAdded = {this.addIngredients}  //Add or remove ingredients 
                    ingredientRemoved = {this.removeIngredients}
                    canPurchase = {this.state.canPurchase}
                    myOrder = {this.purchaseHandler}
                    price = {this.state.totalPrice} /> 
            </Fragment>
        )
    }
}

export default FoodBuilder