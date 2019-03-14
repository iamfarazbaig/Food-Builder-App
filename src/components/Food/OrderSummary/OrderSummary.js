import React, {Fragment} from 'react'
import { bold } from 'ansi-colors';
import { Card } from 'semantic-ui-react'

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
            <p>Continue to Checkout</p>
        </Fragment>
    )
}

export default orderSummary