import React, {Component} from 'react';
import Order from '../../components/Order/Order'
class Orders extends Component {
    render () { // we want to render orders in this page. so we make Order.js component in the component folder
        return (
            <div>
                <Order />
            </div>
        )

    }

}

export default Orders