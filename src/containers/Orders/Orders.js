import React, {Component} from 'react';
import {connect} from 'react-redux'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandling from '../../hoc/withErrorHandling/withErrorhandling'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'// we create a new loading state to use spinner
class Orders extends Component {
    
    componentDidMount() { //we use this to only fetch orders after this is loaded
        this.props.onFetchOrders(this.props.token)
    }
    
    render () { // we want to render all the orders in this page. so we make Order.js component in the component folder
        
        console.log(this.props)
        let orders = <Spinner />
        if(!this.props.loading) {
            orders = this.props.orders.map(order => ( //here we get the individual order to be converted into an order object and key is unique firebase id and ingredients to render individual things and price
                    <Order  
                        key={order.id}
                        ingredients={order.ingredients}
                        price = {order.price}/>
                ))
        } 
        return (
            <div>
                {orders}
            </div>
        )
    }
}

const mappedStateToProps = state => {
    return {
        orders: state.order.orders,//with state order we reach out to order reducer and with orders we reach out to the orders property in the state of that reducer
        loading: state.order.loading,
        token: state.auth.token//auth reducer is found on auth property.so it is state.auth.token.used in componentDidMount here
    }
}

const mappedDispatchToProps = dispatch => { //token is passes to the anonymous function
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))//these are action creators
    }
}

export default connect(mappedStateToProps,mappedDispatchToProps)(withErrorHandling(Orders, axios))