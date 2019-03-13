import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cssClasses from './FoodIngredient.module.css'

class FoodIngredient extends Component {
    render () {
        let ingredient = null

        switch(this.props.type) {
            case('topBread'):
                ingredient=(
                <div className={cssClasses.TopBread}>
                <div className={cssClasses.Seeds1}></div>
                <div className={cssClasses.Seeds2}></div>
                </div>)
                break
            case('burgerPatty'):
                ingredient=<div className={cssClasses.Patty}></div>
                break
            case('cheese'):
                ingredient=<div className={cssClasses.Cheese}></div>
                break
            case('chilli'):
                ingredient=<div className={cssClasses.Chilli}></div>
                break
            case('lettuce'):
                ingredient=<div className={cssClasses.Lettuce}></div>
                break
            case('bottomBread'):
                ingredient=<div className={cssClasses.BottomBread}></div>
                break
            default:
                    ingredient=null 
        }
        return ingredient
        }
}

FoodIngredient.propTypes = {
    type:PropTypes.string.isRequired
}

export default FoodIngredient