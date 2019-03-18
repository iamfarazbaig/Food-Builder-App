import React from 'react'
const inputform = (props) => {
    let inputElement =null;
    switch(props.elementType) {// to check the input.we change from inputtype to elementType due to change in ContactDetails and the props in switch statement to props.elementConfig
        case('input') :
            inputElement = <input 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/> //we expect to get input as props for the input wrapper.spread operator allows to distribute them on the input element
            break;
        case('textarea') :
            inputElement = <textarea 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
            break;
        case('select') :
            inputElement = (
                <select 
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