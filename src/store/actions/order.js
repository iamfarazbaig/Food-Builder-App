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

export const purchaseFoodStart = () => {
    return {
        type: actionTypes.FOOD_PURCHASE_START
    }
}

export const purchasingFood = (orderData) => { // this is the action dispatched from the container once order button is clicked
    return dispatch => { //from redux-thunk
        dispatch(purchaseFoodStart())//action returned by purchaseFoodStart is dispatched to the store
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response.data)
                dispatch(foodPurchaseSuccess(response.data.name,orderData))//we pass response.data as id
            })
            .catch(error => {
                dispatch(foodPurchaseFail(error))
            }) 
    }

}

export const purchaseInit = () => {
    return {
        type : actionTypes.PURCHASE_INIT
    }
}