import React from 'react'
import Food from '../../Food/Food'
import Button from '../../UI/Button/Button'
import cssClasses from './CheckoutComponent.module.css'
const checkoutComponent = (props) => {
    return (
        <div className={cssClasses.CheckoutComponent}>
            <h1>all goood!</h1>
            <div className={cssClasses.CheckoutFood}>
                <Food ingredients={props.ingredients}/>
            </div>
            <Button buttonType="Negative" clicked={props.checkoutCancel}>Cancel</Button> {/*custom buttons */}
            <Button buttonType="Positive" clicked={props.checkoutContinue}>Continue</Button>
        </div>
    )
}

export default checkoutComponent