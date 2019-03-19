//for holding action creators for submitting an order
import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
import order from '../../components/Order/Order';

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

export const purchasingFood = (orderData) => { // this is the action dispatched from the container once order button is clicked. this does the async code part
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

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error:error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START   
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        axios.get('/orders.json')
        .then(res => { //after getting the orders(which is a object) we set a state which actually contains all the orders and then outputs them
            const fetchedOrderData = []
            for(let key in res.data) {
                fetchedOrderData.push({ //this is called for every elemnt found and push res.data for a given key accessing the value which is the order
                    ...res.data[key],// instead of pushing this object,we push a new object onto fetchedOrderData where we distribute properties of order object from firebase using spread operator
                    id: key //adding new property id which is the key as the key is in this object
                })
            }   
            dispatch(fetchOrdersSuccess(fetchedOrderData))
        })
        .catch(err => { //catch any potential errors
            dispatch(fetchOrdersFail(err))
        })
    }
}