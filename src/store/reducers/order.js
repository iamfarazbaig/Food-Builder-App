import * as actionTypes from '../actions/actionTypes'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = (state=initialState, action) => { //state=initialState so we have a state initially
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return{
                ...state,
                purchased : false
            }
        case actionTypes.FOOD_PURCHASE_START: 
            return {
                ...state,
                loading:true
            }
        case actionTypes.FOOD_PURCHASE_SUCCESS://on success we want to store this order in orders array and set loading to false
            const newOrder = {
                ...action.order.data,//passed to server
                id: action.orderId,//referring to orderId in order in actions folder
                purchased: true
            }
            return {
                ...state,//copy old state
                loading:false,
                orders: state.orders.concat(newOrder)//we concat new item with old order.as concat return new array we added this immutably
            }
        case actionTypes.FOOD_PURCHASE_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer