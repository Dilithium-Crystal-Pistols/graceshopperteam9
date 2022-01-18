import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
<<<<<<< HEAD
import products from './products'
import singleProduct from './singleProduct'

const reducer = combineReducers({ auth,products, singleProduct })
=======
import posters from './posters'
import singlePoster from './singlePoster'
import admin from './admin'

const reducer = combineReducers({ auth,posters, singlePoster, admin })
>>>>>>> 095ce459ad257a1963a8f0babb1ade9d8d498067
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
<<<<<<< HEAD
export * from './products'
export * from './singleProduct'
=======
export * from './posters'
export * from './singlePoster'
export * from './admin'
>>>>>>> 095ce459ad257a1963a8f0babb1ade9d8d498067
