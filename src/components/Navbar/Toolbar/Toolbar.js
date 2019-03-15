import React from 'react'
import cssClasses from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
const toolbar = (props) => (
    <header className={cssClasses.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            nav items
        </nav>
    </header>
)

export default toolbar