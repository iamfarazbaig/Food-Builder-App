//for holding action creators for submitting an order
import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
export const foodPurchaseSuccess =  (id, orderData) => {
    return {
        type: actionTypes.FOOD_PURCHASE_SUCCESS,
        orderId : id,
        orderData: orderData
    }
}

export const foodPurchaseFail = (error) => {
    return {
        type: actionTypes.FOOD_PURCHASE_FAIL,
        error: error
    }
}

export const purchaseFoodStart = (orderData) => { // this is the action dispatched from the container once order button is clicked
    return dispatch => { //from redux-thunk
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(foodPurchaseSuccess(response.data))
            })
            .catch(error => {
                dispatch(foodPurchaseFail(error))
            }) 
    }

}