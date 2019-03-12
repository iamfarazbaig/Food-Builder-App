import React, {Fragment} from 'react'
import { Divider, Header} from 'semantic-ui-react'

const layout =(props) => (
    <Fragment>
        <div>
        <Header as='h3'> Toolbar, Sidedrawer, Backdrop</Header>
    <Divider section />
        </div>
        <main>
            {props.children}
        </main>
    </Fragment>
)

export default layout