import React from 'react'
import cssClasses from './Order.module.css'
const order = (props) => (

    <div className={cssClasses.Order}>
        <p>Ingredients: a,b,c</p>
        <p>Price: Euro 7</p>
    </div>
)

export default order;