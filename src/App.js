import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import FoodBuilder from './containers/FoodBuilder/FoodBuilder'
import {Header, Divider} from 'semantic-ui-react'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Header as='h3'><FoodBuilder/></Header> 
        <Divider section /> 
        </Layout>
      </div>
    );
  }
}

export default App;
