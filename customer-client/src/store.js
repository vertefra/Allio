import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { orderReducers } from './reducers/orderReducers'
import { menuReducers } from './reducers/menuReducers'
import { appStateReducers } from './reducers/appStateReducers'

const initialState = {}

const reducers = combineReducers({
  appState: appStateReducers,
  order: orderReducers,
  menu: menuReducers,
})

const middlewares = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
