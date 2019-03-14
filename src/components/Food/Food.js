import React from 'react'
import cssClasses from './Food.module.css'
import FoodIngredient from './FoodIngredient/FoodIngredient'

const food = (props) => {
    let arrayIngredients = Object.keys(props.ingredients)         //Object is plain js. keys method extracts keys of ingredient object and turns it into an array.value= how many ingredients,key=type of ingredient
    .map(iKey => {
         return [...Array(props.ingredients[iKey])].map((_, i) => {
            return <FoodIngredient key = {iKey + i} type={iKey} />  // return array of jsx.here type is iKey which is why inner map element type is given to be underscore
         }) 
    })                                     //map executes a function on each element in the input array. inner map maps the elements.underscore is argument name to indicate its a blank but the index in needed
    .reduce((theArray, theElement) => {    //reduce accepts prev value and current value transform array into.reduce is implemented to ensure that array is either empty or contains jsx elements
        return theArray.concat(theElement) //return updated values(root array)
    }, []);
    if(arrayIngredients.length === 0) {
        arrayIngredients = <p>Can't accept no ingredients</p>
    }

    return(
        <div className={cssClasses.Food}>
            <FoodIngredient type={"topBread"} />
            {arrayIngredients}
            <FoodIngredient type={"bottomBread"} />
        </div>
    )
} 

export default food