import { initialState } from "../store/index";

export default function favouritesReducer(
  state = initialState.favourites,
  action
) {
  console.log(action, state);

  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        elements: [...state.elements, payload],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        elements: state.elements.filter((company) => company !== payload),
      };
    default:
      return state;
  }
}
