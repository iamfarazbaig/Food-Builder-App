import React from 'react'
import cssClasses from './Inputform.module.css'
const inputform = (props) => {
    let inputElement =null;
    const inputClassesCombined = [cssClasses.InputElement]//see

    if(props.invalid && props.shouldValidate) {
        inputClassesCombined.push(cssClasses.Invalid)
    }
    switch(props.elementType) {// to check the input.we change from inputtype to elementType due to change in ContactDetails and the props in switch statement to props.elementConfig
        case('input') :
            inputElement = <input 
                className={inputClassesCombined.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/> //we expect to get input as props for the input wrapper.spread operator allows to distribute them on the input element
            break;
        case('textarea') :
            inputElement = <textarea 
                className={inputClassesCombined.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
            break;
        case('select') :
            inputElement = (
                <select 
                    className={inputClassesCombined.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))} {/* we dynamically create props.elementConfig  and then there the options property(in contactDetails) and mapping this into array of jsX elements */}
                    </select>)
            break;
        default:
            inputElement = <input 
                className={inputClassesCombined.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
    }
    return(
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
   
}

export default inputform;