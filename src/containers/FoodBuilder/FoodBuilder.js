import React, {Component, Fragment} from 'react'
import Food from '../../components/Food/Food'
class FoodBuilder extends Component {
    render () {
        return (
            <Fragment>
            <div>
                 <Food />
                 </div>{/*graphical rep of food with ingredients */}
               <div>Build Controls</div>  {/*Add or remove ingredients */}
               </Fragment>
        )
    }
}

export default FoodBuilder