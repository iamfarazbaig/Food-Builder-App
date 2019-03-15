import React, {Fragment} from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navbaritems/Navbaritems'
import cssClass1 from '../SideDrawer/SideDrawer.module.css'
import cssClass2 from '../../Logo/Logo.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
const sideDrawer = (props) => { //to expand and detract side drawer
    let theClasses =[cssClass1.SideDrawer, cssClass1.Detract]
    if(props.display) {
        theClasses = [cssClass1.SideDrawer, cssClass1.Expand]
    }

    return (
        <Fragment>
            <Backdrop show={props.display} clicked={props.closed} />
            <div className={theClasses.join(' ')}>             {/* as we cant pass array of string, we join them to pass a single string */}
                <div className={cssClass2.Logom}>
                <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
        </div>
        </Fragment>
     
    )
}

export default sideDrawer