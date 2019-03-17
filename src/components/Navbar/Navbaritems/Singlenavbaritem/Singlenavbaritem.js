import React from 'react'
import {NavLink} from 'react-router-dom' //we use this to style the active link
import cssClasses from '../../Navbaritems/Singlenavbaritem/Singlenavbaritem.module.css'

const singleNavigationItem = (props) => (
    <li className={cssClasses.SingleNavigationItem}>
        <NavLink //changed from<a> tag to Navlink
            to={props.link} // href is changed to "to" and we dont need to define className={props.active ? cssClasses.active : null}. it automatically determines
            exact={props.exact}//to show which link is active is which page
            activeClassName={cssClasses.active}> {/* we do this so that the active classnames in css files are identified */}
            {props.children}
        </NavLink>
    </li>
)

export default singleNavigationItem;