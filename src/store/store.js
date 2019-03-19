import {createStore, applyMiddleware, compose, combineReducers} from 'redux' //compose for dev tools
import foodBuilderReducer from '../store/reducers/foodBuilder'
import orderReducer from '../store/reducers/order'
import authReducer from '../store/reducers/auth'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//compose allows our own set of enhancers and middleware and dev tool is a type of enhancer

const rootReducer = combineReducers({
    foodBuilder : foodBuilderReducer,
    order : orderReducer,
    auth: authReducer
})

export default createStore(rootReducer,composeEnhancers(applyMiddleware(thunk))) //pass reducer to createStore.to applyMiddleware we pass thunk
