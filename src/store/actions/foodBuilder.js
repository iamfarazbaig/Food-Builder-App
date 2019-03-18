//action creator for making food
import * as actionTypes from './actionTypes'

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