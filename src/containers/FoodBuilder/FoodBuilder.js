import React, {Component, Fragment} from 'react'
import Food from '../../components/Food/Food'
import BuildControls from '../../components/Food/BuildControls/BuildControls'

class FoodBuilder extends Component {
    state= {
        ingredients: { //key value pairs key:ingredients, value:amount
            lettuce: 1,
            cheese:  1,
            chilli:  2,
            thePatty:1
        }
    }

    render () {
        return (
            <Fragment>
                <Food ingredients={this.state.ingredients}/>{/*Passing key value pairs of ingredients given. graphical rep of food with ingredients */}
                <BuildControls />  {/*Add or remove ingredients */}
            </Fragment>
        )
    }
}

export default FoodBuilder