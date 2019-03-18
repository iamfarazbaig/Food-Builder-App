import React, {Component} from 'react'
import CheckoutComponent from '../../components/Order/CheckoutComponent/CheckoutComponent'
import {Route} from 'react-router-dom'
import ContactDetails from './ContactDetails/ContactDetails'
import { connect } from 'react-redux'
class Checkout extends Component {//removed state and componentWillMount(we dont need to get ingredients in componentWillMount like it used to)
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
                ingredients={this.props.ingres}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler} />
                <Route 
                    path = {this.props.match.path + '/contact-details' } 
                    component = {ContactDetails}/> 
                    {/* adding ingredients as props and passing it to ContactData */}
                   {/* component={ContactDetails} path depends on the path we are currently on + /ContactDetails . we can use match.URLSearchParams or also for building paths and routes you can use path */} 
            </div>
        )
    }
}

const mappedStateToProps = state => {
    return {
        ingres: state.ingredients,// as per naming in reducer
    }
}

export default connect(mappedStateToProps)(Checkout)