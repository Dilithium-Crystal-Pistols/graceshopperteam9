import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import posters from './posters'
import singlePoster from './singlePoster'
import admin from './admin'

const reducer = combineReducers({ auth,posters, singlePoster, admin })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './posters'
export * from './singlePoster'
export * from './admin'
