import React, {Component} from 'react';
import {connect} from 'react-redux'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandling from '../../hoc/withErrorHandling/withErrorhandling'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'// we create a new loading state to use spinner
class Orders extends Component {
    
    componentDidMount() { //we use this to only fetch orders after this is loaded
        this.props.onFetchOrders()
    }
    render () { // we want to render all the orders in this page. so we make Order.js component in the component folder
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
        loading: state.order.loading
    }
}

const mappedDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())//these are action creators
    }
}

export default connect(mappedStateToProps,mappedDispatchToProps)(withErrorHandling(Orders, axios))