import React from 'react'
import cssClasses from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navbaritems/Navbaritems'

const toolbar = (props) => (
    <header className={cssClasses.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar