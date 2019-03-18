import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import { Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux' //compose for dev tools
import foodBuilderReducer from './store/reducers/foodBuilder'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//compose allows our own set of enhancers and middleware and dev tool is a type of enhancer

const store = createStore(foodBuilderReducer,composeEnhancers(
    applyMiddleware(thunk)
)) //pass reducer to createStore.to applyMiddleware we pass thunk

const app = ( 
    <Provider store={store}>{/* we connected the store created by redux with our react app */}
        <BrowserRouter>{/* routing enabled! */}
            <App />
        </BrowserRouter>
    </Provider>
   
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
