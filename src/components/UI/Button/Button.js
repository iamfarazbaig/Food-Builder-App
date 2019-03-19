import React from 'react';
import cssClasses from './Button.module.css'
const button = (props) => (
    <button 
        className={[cssClasses.Button, cssClasses[props.buttonType]].join(' ')} //the 2nd arguemnt is to dynamically pull out certain type of button type. join is to convert array of strings to a string
        onClick={props.clicked}>{props.children}</button>
        
)



export default button;