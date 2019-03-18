import React, {Component} from 'react'
import Inputform from '../../components/UI/Inputform/Inputform'
import Button from '../../components/UI/Button/Button'
import cssClasses from './Auth.module.css'
class Auth extends Component {
    state = {
        controls : {
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
        }
    }

    render ( ) {
        const formElementArray = [];//we need to convert orderForm into an array to loop through
        for (let key in this.state.controls) {
            formElementArray.push({
                id:key,
                config: this.state.controls[key]
            })
        }
        const form = formElementArray.map(formElement => (
            <Inputform 
                key={formElement.id}
                elementType = {formElement.config.elementType}
                elementConfig = {formElement.config.elementConfig}
                value = {formElement.config.value}
                invalid = {!formElement.config.valid}//we pass an invalid property so "valid" is accessed and then reversed it by !
                shouldValidate={formElement.config.validation}
                changed = {(event) => this.inputChangeHandler(event, formElement.id)}/> // we change this to anonymous function to pass arguments to the method.we get the event which is created by react automatically.we pass event and formElement identifier(id)
       ))

        return (
            <div className={cssClasses.Auth}>
                <form>
                    {form}
                    <Button buttonType="Positive">Submit</Button>
                </form>
            </div>
        )
    }
}

export default Auth