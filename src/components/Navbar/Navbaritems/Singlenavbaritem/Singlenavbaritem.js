import React from 'react'
import cssClasses from '../../Navbaritems/Singlenavbaritem/Singlenavbaritem.module.css'

const singleNavigationItem = (props) => (
    <li className={cssClasses.SingleNavigationItem}>
        <a 
            href={props.link}
            className={props.active ? cssClasses.active : null}>{props.children}</a>
    </li>

    )

export default singleNavigationItem;