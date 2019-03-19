import {storiesOf} from '@storybook/react';
import React from 'react';
import {Provider} from 'react-redux';

import {BrowserRouter} from 'react-router-dom';
import Food from '../components/Food/Food';
import Navbaritems from '../components/Navbar/Navbaritems/Navbaritems';
import SideDrawer from '../components/Navbar/SideDrawer/SideDrawer';
import Toolbar from '../components/Navbar/Toolbar/Toolbar';
import Order from '../components/Order/Order';
import store from '../store/store';


const withProvider = story => <Provider store={store}>
    <BrowserRouter>
        {story()}
    </BrowserRouter>
</Provider>;


const orderData = {
    ingredientOutput: 'Patty (1) cheese (1) chilli (1) lettuce (1)',
    price: '12'
};

const stories = storiesOf('App', module).addDecorator(withProvider);

stories.add('toolbar', () => (
    <Toolbar/>
));
stories.add('side drawer', () => (
    <SideDrawer/>
));
stories.add('nav bar items', () => (
    <Navbaritems/>
));
stories.add('order', () => (
    <Order ingredients={orderData.ingredientOutput} price={orderData.price}/>
));
stories.add('food', () => (
    <Food/>
));