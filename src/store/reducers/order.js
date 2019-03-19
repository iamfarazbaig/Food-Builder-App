import * as actionTypes from '../actions/actionTypes'

const initialState = {
    orders: [],
    loading: false
}

const reducer = (state=initialState, action) => { //state=initialState so we have a state initially
    switch (action.type) {
        case actionTypes.FOOD_PURCHASE_SUCCESS://on success we want to store this order in orders array and set loading to false
            const newOrder = {
                ...action.order.data,//passed to server
                id: action.orderId//referring to orderId in order in actions folder
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
        default:
            return state;
    }
}

export default reducer