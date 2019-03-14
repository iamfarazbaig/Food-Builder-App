import React, {Fragment} from 'react'
import { bold } from 'ansi-colors';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const summaryIngredient = Object.keys(props.ingredients) //same as before, transforming to array
    .map(iKey => {
        return ( 
        <li key={iKey}>
            <span style = {{textDecorationStyle:bold}}>
                {iKey}
            </span> : {props.ingredients[iKey]}
        </li> )
    })
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>The food contains: </p>
            <ul>
                {summaryIngredient}
            </ul>
            <p><strong>Order Cost: {"\u20ac"} {props.cost}</strong></p>
            <p>Continue to Checkout?</p>
            <Button buttonType="Negative" clicked={props.purchaseCancelEvent}>Cancel</Button> {/*custom buttons */}
            <Button buttonType="Positive" clicked={props.purchaseContinueEvent}>Continue</Button>

        </Fragment>
    )
}

export default orderSummary