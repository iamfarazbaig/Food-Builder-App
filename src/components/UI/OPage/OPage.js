import React from 'react'
import cssClasses from '../OPage/OPage.module.css'
const opage = (props) => (
    <div 
    className={cssClasses.OPage}
    style ={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', //if props.show is true, set translateY(0) or set translateY(-100viewport height)
        opacity : props.show ? '1' : '0' //1=visible and 0= not visible(opaque)
    }}>
        {props.children}
    </div>
)

export default opage;