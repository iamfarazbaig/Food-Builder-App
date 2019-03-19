//global root reducer
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'

import {createStore, applyMiddleware, compose, combineReducers} from 'redux' //compose for dev tools
import foodBuilderReducer from './store/reducers/foodBuilder'
import orderReducer from './store/reducers/order'
import authReducer from './store/reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//compose allows our own set of enhancers and middleware and dev tool is a type of enhancer

const rootReducer = combineReducers({
    foodBuilder : foodBuilderReducer,
    order : orderReducer,
    auth: authReducer
})

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk))) //pass reducer to createStore.to applyMiddleware we pass thunk

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
