import React from 'react'
import cssClasses from './FoodIngredient.css'
const foodIngredient = (props) => {
    let ingredient = null

    switch(props.type) {
        case('topBread'):
            ingredient=<div className={cssClasses.TopBread} />
            break
        case('burgerPatty'):
            ingredient=<div className={cssClasses.Patty} />
            break
        case('cheese'):
            ingredient=<div className={cssClasses.Cheese} />
            break
        case('chilli'):
            ingredient=<div className={cssClasses.Chilli} />
            break
        case('lettuce'):
            ingredient=<div className={cssClasses.Lettuce} />
            break
        case('bottomBread'):
            ingredient=<div className={cssClasses.BottomBread} />
            break
        default:
                ingredient=null 
    }
    return ingredient
}