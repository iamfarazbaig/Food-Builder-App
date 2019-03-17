import React from 'react'
import cssClasses from './Order.module.css'
const order = (props) => {
    const ingredients = []
    for(let individualIngredient in props.ingredients) {
        ingredients.push({
            name: individualIngredient,
            number : props.ingredients[individualIngredient]})
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span key={ig.name}> {ig.name} ({ig.number})</span>
    })
    return (
    <div className={cssClasses.Order}>
        <p>Ingredients: {ingredientOutput}</p>
        <p>Price: {'\u20AC'} {props.price} </p>
    </div>
    )
}

export default order;