import React, {Component} from 'react'
import CheckoutComponent from '../../components/Orders/CheckoutComponent/CheckoutComponent'
import {Route} from 'react-router-dom'
import ContactDetails from './ContactDetails/ContactDetails'
class Checkout extends Component {
    state={
        ingredients: {
            lettuce:1,
            Patty:1,
            cheese:1,
            chilli:1
        }
    }

    componentDidMount() { //to parse the passing of ingredients to checkout page
        const query = new URLSearchParams(this.props.location.search) //this includes the ? from props.history.push in foodbuilder.using URLSearchParams we can extract it
        const ingredients= {}
        for( let param of query.entries()) { //to loop thorugh the different query params
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients : ingredients})
    } 

    checkoutCancelHandler =() => {
        this.props.history.goBack()
    }

    checkoutContinueHandler =() => {
        this.props.history.replace('/checkout/contact-details')
    }

    render() {
        return (
            <div>
                <CheckoutComponent 
                ingredients={this.state.ingredients}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler} />
                <Route 
                    path={this.props.match.path + '/contact-details' } 
                    component={ContactDetails}/> {/* path depends on the path we are currently on + /ContactDetails . we can use match.URLSearchParams or also for building paths and routes you can use path */}
            </div>
        )
    }
}

export default Checkout;