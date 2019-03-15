import React, {Fragment} from 'react'
import { Divider, Header} from 'semantic-ui-react'
import Toolbar from '../Navbar/Toolbar/Toolbar'
const layout =(props) => (
    <Fragment>
        <Toolbar />
        <main>
            {props.children}
        </main>
    </Fragment>
)

export default layout