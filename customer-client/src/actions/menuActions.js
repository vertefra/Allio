import axios from 'axios'

// import menuReducers from '../reducers/menuReducers'
// import appStateReducers from '../reducers/appStateReducers'

export const loadMenu = () => async dispatch => {
  dispatch({ type: 'LOADING_TRUE' })
  try {
    const { data } = await axios.get('/api/menu')
    dispatch({ type: 'LOAD_MENU', payload: data.menu })
    dispatch({ type: 'LOADING_FALSE' })
  } catch (err) {
    dispatch({ type: 'LOAD_MENU_FAILED', payload: err })
    dispatch({ type: 'LOADING_FALSE' })
  }
}
