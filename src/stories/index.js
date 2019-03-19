import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

//import { Button, Welcome } from '@storybook/react/demo';
import button from '../components/UI/Button/Button'
import toolbar from '../components/Navbar/Toolbar/Toolbar'
import order from '../components/Order/Order'

import Checkout from '../containers/Checkout/Checkout'

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store/store';
import logo from '../components/Logo/Logo';

//storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

const data = {
  buttonType: "Positive",
  onClick : action('addOrder')
}
  storiesOf('Button',module).add('default state', ()=>(<button {...data}>Add Receipe</button>))
const headerData = {
  onClick : action('toggleData')
}
  storiesOf('NavBar',module).add('default state', ()=>(<toolbar {...headerData}/>))

  const orderData = {
    ingredientOutput : 'Patty (1) cheese (1) chilli (1) lettuce (1)',
    price : '12'
  }
  storiesOf('Order',module).add('default state', (props)=>(<order {...orderData} />))



  const withProvider = story => <Provider store={store}>
    <BrowserRouter>
      {store()}
    </BrowserRouter>
  </Provider>;





storiesOf('Checkout', module).addDecorator(withProvider).add('default state',  props => (
  <div>asd</div>
))
 
