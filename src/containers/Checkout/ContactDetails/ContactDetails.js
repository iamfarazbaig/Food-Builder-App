import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import cssClasses from './ContactDetails.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContactDetails extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street:'',
            county:''
        },
        loading: false// we set loading false here and true in orderHandler so that we can show spinner if needed
    }

    orderHandler = (event) => {
        event.preventDefault(); // to automatically prevent the default action which is to send the request and reloading the page
         this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price : this.props.price,
            customer : {
                name : 'Random person',
                address : {
                    street: 'random street',
                    county:'waterford'
                },
                email:'test@test.com'
            },
            deliveryMethod: 'fast'
        }
        axios.post('/orders.json', order)
             .then(response => {
                 this.setState({loading: false})
                 this.props.history.push('/')
             })
             .catch(error => {
                this.setState({loading: false})
            })
        console.log(this.props.ingredients)
    }

    render() {
        let form = ( 
        <form>
            <input className={cssClasses.Input} type="text" name="name" placeholder="Your Name" />
            <input className={cssClasses.Input} type="email" name="email" placeholder="Your Email" />
            <input className={cssClasses.Input} type="text" name="street" placeholder="Street" />
            <input className={cssClasses.Input} type="text" name="county" placeholder="County" />
            <Button buttonType="Positive" clicked={this.orderHandler}>Order</Button>
        </form>)
        if(this.state.loading) {
            form = <Spinner />
        }
        return(
            <div className={cssClasses.ContactDetails}> {/* wrapper for ContactDetails container */}
                <h3>Enter details</h3>
                {form}   
            </div>
        )
    }

}

export default ContactDetails