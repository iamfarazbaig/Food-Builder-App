import React from 'react'
import cssClasses from '../Navbaritems/Navbaritems.module.css'
import SingleNavigationItem from './Singlenavbaritem/Singlenavbaritem'

const navigationItems = (props) => ( //props for auth
    <ul className={cssClasses.NavigationItems}>
        <SingleNavigationItem link="/" exact>Food Builder</SingleNavigationItem> {/* we dont need to set active={true} due to NavLink in react-router-dom */}  
        <SingleNavigationItem link="/orders">Orders</SingleNavigationItem>  
      { !props.isAuthenticated 
        ? <SingleNavigationItem link="/auth">Authentication</SingleNavigationItem>
        : <SingleNavigationItem link="/logout">Logout</SingleNavigationItem>  }
    </ul>
)

export default navigationItems