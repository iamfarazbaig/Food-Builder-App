import React from 'react'
import cssClasses from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navbaritems/Navbaritems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = (props) => (
    <header className={cssClasses.Toolbar}>
        <DrawerToggle clicked ={props.drawerToggleOnClick} />
        <Logo />
        <nav className={cssClasses.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar