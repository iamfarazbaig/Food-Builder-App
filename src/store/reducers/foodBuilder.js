import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility' //we call this whereever we distribute props
const initialState = {
    ingredients: null, //as we fetch from firebase
    totalPrice: 0,
    error: false
}

const INGREDIENT_PRICES = { //Global const for prices
    lettuce: 1,
    cheese:  2,
    chilli:  0.5,
    Patty:3
}

const addIngredient = (state, action) => {
    const updatedIngredient ={ [action.ingredientName] : state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName] //total price of old state is adjusted with the price for the ingredient added . we access INGREDIENT_PRICES for the ingredient we get in action.ingredientName
    }
    return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
    const updatedIngred ={ [action.ingredientName] : state.ingredients[action.ingredientName] - 1 }
    const updatedIngreds = updateObject(state.ingredients, updatedIngred)
    const updatedSt = {
        ingredients: updatedIngreds,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName] //total price of old state is adjusted with the price for the ingredient added . we access INGREDIENT_PRICES for the ingredient we get in action.ingredientName
    }
    return updateObject(state, updatedSt)
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients:{
            lettuce: action.ingredients.lettuce,
            chilli: action.ingredients.chilli,
            cheese: action.ingredients.cheese,
            Patty: action.ingredients.Patty
        },//this property is passed from the foodBuilder/actions file
        error: false,// to reset error if it had previously
        totalPrice: 0
    })
}

const retrieveIngredientsFail = (state, action) => {
    return updateObject( state, { error:true })
}

//reducer logic
const reducer = (state =initialState, action) => { //we set state to initialState incase we get undefined as a state which happens in the first run
    switch(action.type) { //always have a type property on the action
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action)//just passing state and action we get in the reducer

        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action)

        case actionTypes.SET_INGREDIENTS : 
            return setIngredients(state,action)

        case actionTypes.RETRIEVE_INGREDIENTS_FAIL :
            return retrieveIngredientsFail(state, action)

        default:
            return state 
    }
   
}

export default reducer