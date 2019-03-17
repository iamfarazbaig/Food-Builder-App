import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import FoodBuilder from './containers/FoodBuilder/FoodBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={FoodBuilder} />
          </Switch>
        </Layout>
    );
  }
}

export default App;
