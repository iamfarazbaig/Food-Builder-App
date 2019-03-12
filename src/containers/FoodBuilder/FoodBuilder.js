import React, {Component, Fragment} from 'react'

class FoodBuilder extends Component {
    render () {
        return (
            <Fragment>
                 <div>FoodBuilder</div>{/*graphical rep of food with ingredients */}
                 <div>Build Controls</div>{/*Add or remove ingredients */}
            </Fragment>
        )
    }
}

export default FoodBuilder