import React, {Component} from 'react'
import CheckoutComponent from '../../components/Orders/CheckoutComponent/CheckoutComponent'
class Checkout extends Component {
    state={
        ingredients: {
            lettuce:1,
            Patty:1,
            cheese:1,
            chilli:1
        }
    }

    checkoutCancelHandler =() => {
        this.props.history.goBack()
    }

    checkoutContinueHandler =() => {
        this.props.history.replace('/checkout/contactstuff')
    }

    render() {
        return (
            <div>
                <CheckoutComponent 
                ingredients={this.state.ingredients}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler} />
            </div>
        )
    }
}

export default Checkout;