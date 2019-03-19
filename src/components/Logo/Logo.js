import React from 'react'
import foodLogo from '../../assets/images/logo.png'
import cssClasses from './Logo.module.css'
const logo = (props) => (
    <div className={cssClasses.Logo}>
    <p>{props.state}</p>
        <img src={foodLogo} alt="Hot Food" />
    </div>
)

export default logo;