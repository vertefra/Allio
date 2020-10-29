import { defaultOrderState } from '../states.js'

export const orderReducers = (state = defaultOrderState, action) => {
  switch (action.type) {
    case 'SET_ORDER':
      return { ...state, ...action.payload }

    case 'CLEAR_ORDER':
      return {}

    case 'UPDATE_ORDER':
      return { ...state, ...action.payload }

    default:
      return state
  }
}
