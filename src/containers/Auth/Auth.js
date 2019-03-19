import React, {Component} from 'react'
import Inputform from '../../components/UI/Inputform/Inputform'
import Button from '../../components/UI/Button/Button'
import cssClasses from './Auth.module.css'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'
class Auth extends Component {
    state = {
        controls : { //adopted from contactDetails.js
            email : {
                elementType : 'input',
                elementConfig: {
                    type: 'email',
                    placeholder:'Email address'
                },
                value: '', //this determines the value shown on the screen
                validation :{
                    required: true,
                    isEmail: true
                },
                valid: false
            },
            password : {
                elementType : 'input',
                elementConfig: {
                    type: 'password',
                    placeholder:'Password'
                },
                value: '', //this determines the value shown on the screen
                validation :{
                    required: true,
                    minLength: 6
                },
                valid: false
            }
        }, isSignup: true
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

    inputChangeHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,//copies all elements inside controls
            [controlName] : {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation)
            }
        }
        this.setState({controls: updatedControls})
    }

    formSubmitHandler = (event) => {
        event.preventDefault() //prevent reloading of page
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup)
    }

    switchAuthMode = () => {
        this.setState(prevState => { //setState in function mode to recieve previous state
            return {isSignup: !prevState.isSignup}
        })
    }

    render ( ) {
        const formElementArray = [];//we need to convert orderForm into an array to loop through
        for (let key in this.state.controls) {
            formElementArray.push({
                id:key,
                config: this.state.controls[key]
            })
        }
        let form = formElementArray.map(formElement => ( //adopted from contactDetails.js
            <Inputform 
                key={formElement.id}
                elementType = {formElement.config.elementType}
                elementConfig = {formElement.config.elementConfig}
                value = {formElement.config.value}
                invalid = {!formElement.config.valid}//we pass an invalid property so "valid" is accessed and then reversed it by !
                shouldValidate={formElement.config.validation}
                changed = {(event) => this.inputChangeHandler(event, formElement.id)}/> // we change this to anonymous function to pass arguments to the method.we get the event which is created by react automatically.we pass event and formElement identifier(id)
       ))

       if(this.props.loading) {
           form = <Spinner />
       }

       let errorMessage = null

       if(this.props.error) {
           errorMessage = <p>{this.props.error.message}</p>// error comes back from firebase thats a js object with message property
       }

        return (
            <div className={cssClasses.Auth}>
                {errorMessage}
                <form onSubmit={this.formSubmitHandler}>
                    {form}
                    <Button buttonType="Positive">Submit</Button>
                </form>
                <Button 
                    clicked={this.switchAuthMode}
                    buttonType="Negative">Sign {this.state.isSignup ? 'In' : 'Up'}
                </Button>
            </div>
        )
    }
}

const mappingStateToProps = state => { //to have a spinner whilst authenticating
    return {
        loading:state.auth.loading, //loading property in auth reducers 
        error: state.auth.error // we store errors in initialState in auth reducers
    }
}

const mappingDispatchToProps = dispatch => { //to be able to dispatch something here via props in this component
    return {
        onAuth: (email, password ,isSignup) => dispatch(actions.auth(email, password, isSignup))
    }
}

export default connect(mappingStateToProps,mappingDispatchToProps)(Auth)