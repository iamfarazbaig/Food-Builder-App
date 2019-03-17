import React, {Component} from 'react'
import CheckoutComponent from '../../components/Order/CheckoutComponent/CheckoutComponent'
import {Route} from 'react-router-dom'
import ContactDetails from './ContactDetails/ContactDetails'
class Checkout extends Component {
    state={
        ingredients: null,
        price : 0
    }

    componentWillMount() { //to parse the passing of ingredients to checkout page
        const query = new URLSearchParams(this.props.location.search) //this includes the ? from props.history.push in foodbuilder.using URLSearchParams we can extract it
        const ingredients= {}
        let price =0;
        for( let param of query.entries()) { //to loop thorugh the different query params
            if(param[0] === 'price') {
                price = param[1]//we are at price elemnt and we extract price value and store it in the price variable
            } else {
                ingredients[param[0]] = +param[1];
            }
            
        }
        this.setState({ingredients : ingredients, totalPrice : price})
    } 

    checkoutCancelHandler =() => {
        this.props.history.goBack()
    }

    checkoutContinueHandler =() => {
        this.props.history.replace('/checkout/contact-details')
    }

    render() {
        return (
            <div>
                <CheckoutComponent 
                ingredients={this.state.ingredients}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler} />
                <Route 
                    path={this.props.match.path + '/contact-details' } 
                    render = {(props) => (
                    <ContactDetails 
                        ingredients={this.state.ingredients}
                        price = {this.state.totalPrice} // with this we get price property(on props) in ContactDetials which we can use
                        {...props}// as the props will include history object, this will make the push method in axios.post in Contactdetails work
                    />)} 
                /> 
                    {/* adding ingredients as props and passing it to ContactData */}
                   {/* component={ContactDetails} path depends on the path we are currently on + /ContactDetails . we can use match.URLSearchParams or also for building paths and routes you can use path */} 
            </div>
        )
    }
}

export default Checkout;