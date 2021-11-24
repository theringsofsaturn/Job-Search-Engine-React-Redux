import { createStore } from 'redux'
import mainReducer from '../reducers/index'


export const initialState = {
  favCompanies: {
    companies: [],
  },
  user: {
    Name: '',
  },
}

const configureStore = createStore(
  mainReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default configureStore
