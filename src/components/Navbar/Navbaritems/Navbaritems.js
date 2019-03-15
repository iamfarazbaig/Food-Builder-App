import React from 'react'
import cssClasses from '../Navbaritems/Navbaritems.module.css'
import SingleNavigationItem from './Singlenavbaritem/Singlenavbaritem'

const navigationItems = () => (
    <ul className={cssClasses.NavigationItems}>
        <SingleNavigationItem link="/" active={true}>Food Builder</SingleNavigationItem>  
        <SingleNavigationItem link="/">Checkout</SingleNavigationItem>  

    </ul>

)

export default navigationItems