import * as actionTypes from '../actions/actionTypes'

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

//reducer logic
const reducer = (state =initialState, action) => { //we set state to initialState incase we get undefined as a state which happens in the first run
    switch(action.type) { //always have a type property on the action
        case actionTypes.ADD_INGREDIENT:
            return{ //return some store or state object which holds the new state.no need break statement as we return in each case
                ...state, // we copy the old state so that when new ingredient is set, we keep any other properties around by using spread operator 
                ingredients: {
                    ...state.ingredients, // to create deep clones.just state wont do
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1 //ingredientName is a payload to the action. with : we set a new value. state.ingredients[action.ingredientName] get no of old ingre and add 1.overall returns new version of state with updated ingredients
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName] //total price of old state is adjusted with the price for the ingredient added . we access INGREDIENT_PRICES for the ingredient we get in action.ingredientName
            }
        case actionTypes.REMOVE_INGREDIENT:
            return{ 
                ...state, 
                ingredients: {
                    ...state.ingredients, 
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1 
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName] 
            }
        case actionTypes.SET_INGREDIENTS : 
            return {
                ...state,
                ingredients: action.ingredients,//this property is passed from the foodBuilder/actions file
                error: false,// to reset error if it had previously
                totalPrice: 0
            }
        case actionTypes.RETRIEVE_INGREDIENTS_FAIL :
        return {
            ...state,
            error: true
        }
        default:
        return state 
    }
   
}

export default reducer