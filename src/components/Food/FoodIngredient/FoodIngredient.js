import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cssClasses from './FoodIngredient.css'

class FoodIngredient extends Component {
    render () {
        let ingredient = null

        switch(this.props.type) {
            case('topBread'):
                ingredient=(
                <div className={cssClasses.TopBread}>
                <div className={cssClasses.Seeds1} />
                <div className={cssClasses.Seeds2} />
                </div>)
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
}

FoodIngredient.propTypes = {
    type:PropTypes.string.isRequired
}

export default FoodIngredient