import React, {Component} from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandling from '../../hoc/withErrorHandling/withErrorhandling'
class Orders extends Component {

    state = {
        orders : [],
        loading : true//we set this to true becasue we start loading
    }
    
    componentDidMount() { //we use this to only fetch orders after this is loaded
        axios.get('/orders.json')
        .then(res => { //after getting the orders(which is a object) we set a state which actually contains all the orders and then outputs them
            const fetchedOrderData = []
            for(let key in res.data) {
                fetchedOrderData.push({ //this is called for every elemnt found and push res.data for a given key accessing the value which is the order
                    ...res.data[key],// instead of pushing this object,we push a new object onto fetchedOrderData where we distribute properties of order object from firebase using spread operator
                    id: key //adding new property id which is the key as the key is in this object
                })
            }   
            this.setState({loading : false, orders:fetchedOrderData})
        })
        .catch(err => { //catch any potential errors
            this.setState({loading : false})
        })
    }
    render () { // we want to render all the orders in this page. so we make Order.js component in the component folder
        return (
            <div>
                {this.state.orders.map(order => ( //here we get the individual order to be converted into an order object and key is unique firebase id and ingredients to render individual things and price
                    <Order  
                        key={order.id}
                        ingredients={order.ingredients}
                        price = {order.price}/>
                ))} 
            </div>
        )
    }
}

export default withErrorHandling(Orders, axios)