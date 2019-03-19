import React, {Component,Fragment} from 'react'
import Toolbar from '../../components/Navbar/Toolbar/Toolbar'
import SideDrawer from '../../components/Navbar/SideDrawer/SideDrawer'
import {connect} from 'react-redux'
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
                <Toolbar 
                    isAuth={this.props.isAuthenticated} 
                    drawerToggleOnClick ={this.SideDrawerToggler}/>
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    display={this.state.showSideDrawer}
                    closed={this.closeSideDrawer}/>
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

const mappedStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null //if it is not null then we are authenticated.isAuthenticated is used as a prop
    }
}

export default connect(mappedStateToProps)(Layout)