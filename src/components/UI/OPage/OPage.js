import React, {Component,Fragment} from 'react'
import cssClasses from '../OPage/OPage.module.css'
import Backdrop from '../Backdrop/Backdrop'

class Opage extends Component {

    shouldComponentUpdate(nextProps, nextState) { // converted to class based component and added shouldComponentUpdate to eliminate unnecessary updates.added extra OR term so that it can update for new children
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked ={this.props.closeOPage}/>
                <div 
                className={cssClasses.OPage}
                style ={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', //if props.show is true, set translateY(0) or set translateY(-100viewport height)
                    opacity : this.props.show ? '1' : '0' //1=visible and 0= not visible(opaque)
                }}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Opage;