import React, {Component, Fragment} from 'react'
import Food from '../../components/Food/Food'
import BuildControls from '../../components/Food/BuildControls/BuildControls'
import OPage from '../../components/UI/OPage/OPage'
import axios from '../../axios-orders'
import OrderSummary from '../../components/Food/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandling from '../../hoc/withErrorHandling/withErrorhandling'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'


class FoodBuilder extends Component {
    state= { // states for UI only. not necessarily need to manage by redux store
        purchaseMode : false,
    }

    componentDidMount () {
        this.props.onInitialiseIngredients()
    }

    purchaseStateUpdate (ingredients) { //logic for when to update purchase state
        const sum = Object.keys(ingredients) //creating an array of string entities 
                .map(iKey => { return ingredients[iKey]}) //using map to replace old value of ingredient with new ones by iKey. we are getting the numbers for ingredients
                .reduce((sum, el) => {
                    return sum + el;
                }, 0)// to return sum of all ingredients, keeping initialValue = 0 and el is the value accessed from ingredients[iKey]
        return sum > 0
            }

    purchaseHandler = () => {
        this.setState({purchaseMode : true})
    } 

    cancelPurchaseHandler = () => { //to remove order summary box
        this.setState({purchaseMode : false})
    } 

    continuePurchaseHandler = () => { //removed query params
        this.props.onInitPurchase()
        this.props.history.push('/checkout') //we need to encode the ingredients into this search query
    }

    render () {
        let orderSummary = null;
        let food = this.props.error ? <p>Something went wrong!</p> : <Spinner />
        if(this.props.ingres) { //we do this to avoid failing of build controls
            food = (
                <Fragment>
                    <Food ingredients={this.props.ingres}/> {/*Passing key value pairs of ingredients given. graphical rep of food with ingredients */}
                    <BuildControls
                        newIngredientAdded = {this.props.onIngredientAdded}  //Add or remove ingredients 
                        ingredientRemoved = {this.props.onIngredientRemoved}
                        canPurchase = {this.purchaseStateUpdate(this.props.ingres)}// we have to execute his whenever it gets re-rendered so as to fetch updated result
                        myOrder = {this.purchaseHandler}
                        price = {this.props.price} />
                </Fragment>
            ) 
                orderSummary = <OrderSummary //we are overriding order summary in the same if statement
                    ingredients = {this.props.ingres}
                    cost ={this.props.price}
                    purchaseCancelEvent = {this.cancelPurchaseHandler} 
                    purchaseContinueEvent = {this.continuePurchaseHandler}/>
        }
       
        return (
            <Fragment>
                <OPage show ={this.state.purchaseMode} closeOPage={this.cancelPurchaseHandler}>
                   {orderSummary}
                </OPage>
                {food}
            </Fragment>
        )
    }
}

const mappingStateToProps = state => { //holds a function which recieves state automaticaly and returns an object which defines which property hold which part of state
    return {
        ingres: state.foodBuilder.ingredients, // to get access to ingredients property in our state. we fetch ingredients from global state
        price : state.foodBuilder.totalPrice,
        error: state.foodBuilder.error
    }
}

const mappingDispatchToProps = dispatch => { //here we have 2 dispatchable/triggerable props
    return {
        onIngredientAdded: (ingreName) => dispatch(actions.addIngredient(ingreName)), //ingredientName is expected to get in this function.it is named as ingreName
        onIngredientRemoved: (ingreName) => dispatch(actions.removeIngredient(ingreName)), // we execute actions, and pass ingredient name here
        onInitialiseIngredients: () => dispatch(actions.initialiseIngredients()),
        onInitPurchase : () => dispatch(actions.purchaseInit())
    }
}

export default connect(mappingStateToProps, mappingDispatchToProps)(withErrorHandling(FoodBuilder, axios))//connect sets some props on the component it is wrapping.connected to redux. withErrorHandler call is an argument to the connect