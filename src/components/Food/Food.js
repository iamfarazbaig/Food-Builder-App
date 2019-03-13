import React from 'react'
import cssClasses from './Food.module.css'
import FoodIngredient from './FoodIngredient/FoodIngredient'

const food = (props) => {
    return(
        <div className={cssClasses.Food}>
            <FoodIngredient type={"topBread"} />
            <FoodIngredient type={"burgerPatty"} />
            <FoodIngredient type={"cheese"} />
            <FoodIngredient type={"chilli"} />
            <FoodIngredient type={"lettuce"} />
            <FoodIngredient type={"bottomBread"} />
        </div>
    )
} 

export default food