import { initialState } from '../store/index'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAV_COMPANY':
      return {
        ...state,
        favCompanies: {
          ...state.favCompanies,
          companies: [...state.favCompanies, action.payload],
        },
      }
    case 'REMOVE_FAV_COMPANY':
      return {
        ...state,
        favCompanies: {
          ...state.favCompanies,
          companies: state.favCompanies.companies.filter(
            (c, i) => i !== action.payload
          ),
        },
      }
    default:
      return state
  }
}
export default mainReducer
