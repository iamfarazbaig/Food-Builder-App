//action creator for making food
import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const addIngredient = (name) => {// naming convention of naming action creators as identifiers.addIngredient is arrow function where name of ingredient that needs to be added is recieved and with appropriate return type
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setTheIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients : ingredients// payload is ingredients.LHS is flexible naming but not RHS
    }
}

export const retrieveIngredientsFail = () => {
    return {
        type: actionTypes.RETRIEVE_INGREDIENTS_FAIL
    }
}

export const initialiseIngredients = () => { 
    return dispatch => { //returning a function where dispatch fn is recieved which can be used in this function body by redux-thunk
        axios.get('https://assignment1-fb.firebaseio.com/ingredients.json')
        .then(response => {
            dispatch(setTheIngredients(response.data))//data property holds the data 
        })
        .catch(error => {
            dispatch(retrieveIngredientsFail())
        });
    }
}