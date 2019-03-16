import React, {Component} from 'react'
import { Button } from 'semantic-ui-react';
import cssClasses from './ContactDetails.module.css'
class ContactDetails extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street:'',
            county:''
        }
    }

    render() {
        return(
            <div className={cssClasses.ContactDetails}> {/* wrapper for ContactDetails container */}
                <h3>Enter details</h3>
                    <form>
                        <input className={cssClasses.Input} type="text" name="name" placeholder="Your Name" />
                        <input className={cssClasses.Input} type="email" name="email" placeholder="Your Email" />
                        <input className={cssClasses.Input} type="text" name="street" placeholder="Street" />
                        <input className={cssClasses.Input} type="text" name="county" placeholder="County" />
                        <Button positive>Order</Button>
                    </form>
            </div>
        )
    }

}

export default ContactDetails