import React from 'react'
import cssClasses from './SingleBuildControl.module.css'
import {Button} from 'semantic-ui-react'

const singleBuildControl = (props) => (
    <div className={cssClasses.SingleBuildControl}>
        <div>{props.label}<br/></div>
        <Button.Group size='large'>
            <Button className={cssClasses.AddButtonStyling} onClick ={props.added} >Add</Button>
            <Button.Or />
            <Button onClick ={props.removed}>Remove</Button>
        </Button.Group>
    </div>
)

export default singleBuildControl