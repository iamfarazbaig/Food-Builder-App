import React, {Component,Fragment} from 'react'
import Toolbar from '../../components/Navbar/Toolbar/Toolbar'
import SideDrawer from '../../components/Navbar/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer : true
    }
    closeSideDrawer = () => {
        this.setState({showSideDrawer: false})
    }

    SideDrawerToggler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        }) //to toggle displaying state of side drawer.as setState is async itll have unexpected outcomes so function form is used
    }

    render () {
        return (
            <Fragment>
                <Toolbar drawerToggleOnClick ={this.SideDrawerToggler}/>
                <SideDrawer 
                    display={this.state.showSideDrawer}
                    closed={this.closeSideDrawer}/>
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}
export default Layout