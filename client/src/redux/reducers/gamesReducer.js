import { GET_VIDEOGAMES, GET_DETAILS } from "../actions/gamesAction.js";

const initialState = {
  videogames: [],
  details: {},
};

export default function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
}
