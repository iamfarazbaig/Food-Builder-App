import React from 'react'
import cssClasses from '../Navbaritems/Navbaritems.module.css'
import SingleNavigationItem from './Singlenavbaritem/Singlenavbaritem'

const navigationItems = () => (
    <ul className={cssClasses.NavigationItems}>
        <SingleNavigationItem link="/" exact>Food Builder</SingleNavigationItem> {/* we dont need to set active={true} due to NavLink in react-router-dom */}  
        <SingleNavigationItem link="/orders">Orders</SingleNavigationItem>  
        <SingleNavigationItem link="/auth">Authentication</SingleNavigationItem>  
    </ul>
)

export default navigationItems