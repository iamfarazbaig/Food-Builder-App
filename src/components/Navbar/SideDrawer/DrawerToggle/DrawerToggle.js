import React from 'react'
import {Icon} from 'semantic-ui-react'
const drawerToggle =  (props) => (
    <div onClick={props.clicked}>
      <Icon.Group size='large'>
      <Icon name='bars' />
    </Icon.Group>
    </div>
)

export default drawerToggle