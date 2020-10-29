export const orderReducers = (state = { order: [] }, action) => {
  switch (action.type) {
    case 'SET_ORDER':
      return { ...state, ...action.payload }
  }

  switch (action.type) {
    case 'CLEAR_ORDER':
      return
  }
}
