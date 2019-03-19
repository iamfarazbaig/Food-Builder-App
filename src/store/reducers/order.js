import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, {purchased : false})
}

const foodPurchaseStart = (state, action) => {
    return updateObject(state, {purchased : false})
}

const foodPurchaseSuccess = (state, action) => {//on success we want to store this order in orders array and set loading to false
    const newOrder = updateObject(action.orderData, { id: action.orderId})
    return updateObject(state, {
        purchased: true,
        loading:false,
        orders: state.orders.concat(newOrder)//we concat new item with old order.as concat return new array we added this immutably
    })
}

const foodPurchaseFail = (state, action) => {
    return updateObject(state, {loading: false})
}

const fetchOrdersStart = (state, action) => {
    return updateObject(state, {loading: true})
}

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    })
}

const fetchOrdersFail = (state, action) => {
    return updateObject(state, { loading : false})
}

const reducer = (state=initialState, action) => { //state=initialState so we have a state initially
    switch (action.type) {

        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action)

        case actionTypes.FOOD_PURCHASE_START: return foodPurchaseStart(state, action)

        case actionTypes.FOOD_PURCHASE_SUCCESS: return foodPurchaseSuccess(state, action)
            
        case actionTypes.FOOD_PURCHASE_FAIL: return foodPurchaseFail(state, action)
            
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action)

        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action)

        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action)
            
        default: return state;
    }
}

export default reducer