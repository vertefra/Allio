import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { orderReducers } from './reducers/orderReducers'

const initialState = {}

const reducers = combineReducers({
  order: orderReducers,
})

const middlewares = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
