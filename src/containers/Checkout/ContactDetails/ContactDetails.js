import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import cssClasses from './ContactDetails.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Inputform from '../../../components/UI/Inputform/Inputform'
import {connect} from 'react-redux'
import withErrorHandler from '../../../hoc/withErrorHandling/withErrorhandling'
import * as actions from '../../../store/actions/index'

class ContactDetails extends Component {
    state = {
        orderForm: { //a verbose order form(with 2 way binding) with key-value pairs having some identifiers of different form elements and a js object with configuration setup
            name : {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your Name'
                },
                value: '', //this determines the value shown on the screen
                validation :{
                    required: true
                },
                valid: false
            },
            street : {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your Street'
                },
                value: '',
                validation :{
                    required: true
                },
                valid: false
            },
            county : {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your County'
                },
                value: '',
                validation :{
                    required: true,
                    minLength:4,
                    maxLength: 10
                },
                valid: false
            },
            email : {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your Email'
                },
                value: '',
                validation :{
                    required: true,
                    isEmail: true
                },
                valid: false
            },
            deliveryMethod : {
                elementType : 'select',
                elementConfig: {
                    options: [
                        { value : 'slow', displayValue: "Slow"},
                        { value : 'fast', displayValue: "Fast"}
                    ]
                },
                value: 'slow',
                valid: true,
                validation :{}
            }
        },
        loading: false// we set loading false here and true in orderHandler so that we can show spinner if needed
    }

    orderHandler = (event) => {
        event.preventDefault(); // to automatically prevent the default action which is to send the request and reloading the page
        const formData = {}
        for (let formElements in this.state.orderForm) { // formElements are email, County and so on
            formData[formElements] = this.state.orderForm[formElements].value// we set the value of the property to the value user entered
        }
            const order = {
            ingredients: this.props.ingres,
            price : this.props.price,
            orderFormData : formData//the detailed order data user entered
        }
        this.props.onOrderFood(order)//we always recieve dispatch actions here as props
    }

    checkValidity(value, rules) {
        let isValid =true;
        if(rules.required) {
            isValid = value.trim() !== '' && isValid//value.trim to remove whitespace at beginning or end.if value.trim is not equal to empty string then isValid is true
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //regex code for checking email
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid
    }

    inputChangeHandler = (event, inputIdentifier) => { // we use inputIdentifier to reach out to the state, get the right object and adjust the value
        const orderFormUpdate = {...this.state.orderForm}//we need to copy the properties inside the selected orderForm element deeply.
        const totalFormUpdate={...orderFormUpdate[inputIdentifier]}//inputIdentifier is like email, deliverymethod.and now we clone this object. now we can safely change value of totalFormUpdate as it is a clone
        totalFormUpdate.value = event.target.value;
        totalFormUpdate.valid = this.checkValidity(totalFormUpdate.value, totalFormUpdate.validation) //this.checkValidity return boolean which is stored in the valid property
        orderFormUpdate[inputIdentifier] = totalFormUpdate;
        console.log(totalFormUpdate)
        this.setState({orderForm : orderFormUpdate})
    }

    render() {
        const formElementArray = [];//we need to convert orderForm into an array to loop through
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }
        let form = ( 
        <form onSubmit={this.orderHandler}>
            {formElementArray.map(formElement => (
                <Inputform 
                    key = {formElement.id}
                    elementType = {formElement.config.elementType}
                    elementConfig = {formElement.config.elementConfig}
                    value = {formElement.config.value}
                    invalid = {!formElement.config.valid}//we pass an invalid property so "valid" is accessed and then reversed it by !
                    shouldValidate={formElement.config.validation}
                    changed = {(event) => this.inputChangeHandler(event, formElement.id)}/> // we change this to anonymous function to pass arguments to the method.we get the event which is created by react automatically.we pass event and formElement identifier(id)
            ))} {/* we loop through formElementArray with map method to generate a new array*/}
            <Button buttonType="Positive" >Order</Button>
        </form>)
        if(this.state.loading) {
            form = <Spinner />
        }
        return(
            <div className={cssClasses.ContactDetails}> {/* wrapper for ContactDetails container */}
                <h3>Enter details</h3>
                {form}   
            </div>
        )
    }

}

const mappedStateToProps =state => {
    return {
        ingres: state.ingredients,
        price: state.totalPrice
    }
}

const mappedDispatchToProps = dispatch => { //connect to dispatchable actions
    return {
        onOrderFood: (orderData) => dispatch(actions.purchaseFoodStart(orderData))
}}


export default connect(mappedStateToProps,mappedDispatchToProps)(withErrorHandler(ContactDetails,axios))