import React, {Fragment} from 'react'
import cssClasses from '../OPage/OPage.module.css'
import Backdrop from '../Backdrop/Backdrop'

const opage = (props) => (
    <Fragment>
        <Backdrop show={props.show} clicked ={props.closeOPage}/>
        <div 
        className={cssClasses.OPage}
        style ={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', //if props.show is true, set translateY(0) or set translateY(-100viewport height)
            opacity : props.show ? '1' : '0' //1=visible and 0= not visible(opaque)
        }}>
            {props.children}
        </div>
    </Fragment>
)

export default opage;