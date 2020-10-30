import axios from 'axios'

export const updateOrder = order => dispatch => {
  dispatch({ type: 'LOADING_TRUE' })
  dispatch({ type: 'UPDATE_ORDER', payload: order })
  dispatch({ type: 'LOADING_FALSE' })
}

export const submitOrder = order => async dispatch => {
  dispatch({ type: 'LOADING_TRUE' })
  try {
    const { data } = await axios.post(`/api/orders`, { order })
    if (data) dispatch({ type: 'LOADING_FALSE' })
  } catch (err) {
    console.log(err)
  }
}
