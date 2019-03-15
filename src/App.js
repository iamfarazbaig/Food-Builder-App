import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import FoodBuilder from './containers/FoodBuilder/FoodBuilder'
class App extends Component {
  render() {
    return (
        <Layout>
          <FoodBuilder />
        </Layout>
    );
  }
}

export default App;
