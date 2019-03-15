import React, {Component,Fragment} from 'react'
import { bold } from 'ansi-colors';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('[ordersummry] WillUpdate')
    }

    render () {
        const summaryIngredient = Object.keys(this.props.ingredients) //same as before, transforming to array
    .map(iKey => {
        return ( 
        <li key={iKey}>
            <span style = {{textDecorationStyle:bold}}>
                {iKey}
            </span> : {this.props.ingredients[iKey]}
        </li> )
    })

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>The food contains: </p>
                <ul>
                    {summaryIngredient}
                </ul>
                <p><strong>Order Cost: {"\u20ac"} {this.props.cost}</strong></p>
                <p>Continue to Checkout?</p>
                <Button buttonType="Negative" clicked={this.props.purchaseCancelEvent}>Cancel</Button> {/*custom buttons */}
                <Button buttonType="Positive" clicked={this.props.purchaseContinueEvent}>Continue</Button>
            </Fragment>)
    }
}

export default OrderSummary