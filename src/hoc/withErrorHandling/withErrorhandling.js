import React, {Component,Fragment} from 'react'
import OSPage from '../../components/UI/OPage/OPage'
const withErrorHandling = (WrappedComponent, axios) => { //setting a global error handler with axios instance
    return class extends Component{ //anonymous class as it doesnt have a name
        state ={
            error:null
        }
        
        componentDidMount() {
            axios.interceptors.request.use(req => { //calling this.setState and clear any error so when a request is sent, the error is not set up 
                this.setState({error:null})
                return req;//as we send req, we've to return it.when sending req, we have to return the request config so that the request can continue
            })
            axios.interceptors.response.use(res=>res, error => {//global interceptors allow to handle error.for response handler here,its simply return the response.2nd arg is error case where we get an error
                this.setState({error:error})
            }) 
        }

        errorConfirmHandler = () => {
            this.setState({error:null})
        }

        render() {
            return (
                <Fragment>
                    <OSPage //as this component is always present even if its not shown we have a ternary exp for error
                        show={this.state.error}
                        closeOPage={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </OSPage> {/* there is an error message property thats returned by firebase.OsPage component exposes clicked property which occurs when backdrop is clicked and we have to clear the error */}
                    <WrappedComponent {...this.props} />  {/* to return wrappedcomponent and distribute any recieved props */}
                </Fragment>
            )
        }
    } 
}

export default withErrorHandling