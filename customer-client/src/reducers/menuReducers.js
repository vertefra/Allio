import { defaultMenuState } from '../states.js'

export const menuReducers = (state = defaultMenuState, action) => {
  switch (action.type) {
    case 'LOAD_MENU':
      return { ...action.payload }

    case 'LOAD_MENU_FAILED':
      return { error: action.payload }

    default:
      return state
  }
}
