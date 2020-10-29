export const updateOrder = order => dispatch => {
  dispatch({ type: 'LOADING_TRUE' })
  dispatch({ type: 'UPDATE_ORDER', payload: order })
  dispatch({ type: 'LOADING_FALSE' })
}
