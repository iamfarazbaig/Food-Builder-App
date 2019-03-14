import React from 'react'
import cssClasses from './BuildControls.module.css'
import SingleBuildControl from './SingleBuildControl/SingleBuildControl'
import { Button } from 'semantic-ui-react';

const controls = [
    { label : 'Lettuce', type :'lettuce'},
    { label : 'Cheese', type :'cheese'},
    { label : 'Chilli', type :'chilli'},
    { label : 'Patty', type :'Patty'}//the type should match foodIngredient component
]

const buildControls = (props) => (
    <div className={cssClasses.BuildControls}>
    <p>Total Cost: {"\u20ac"} {props.price}</p>
    {controls.map(control =>(
        <SingleBuildControl 
            key = {control.label} //controls is accessed by map and each element of this array into a SingleBuildControl tag with key and label
            label = {control.label} 
            added = {() => props.newIngredientAdded(control.type)}
            removed = {() => props.ingredientRemoved(control.type)} /> //newIngredientAdded is from FoodBuilder.js. control.type is passed back to newIngredientAdded. added is connected to Add button
    ))} 
    <Button 
    disabled = {!props.canPurchase}
    onClick = {props.myOrder}>Order Now</Button>
    </div>
)

export default buildControls