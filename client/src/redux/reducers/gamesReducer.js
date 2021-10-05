import {
  GET_VIDEOGAMES,
  GET_DETAILS,
  GET_GENRES,
} from "../actions/gamesAction.js";

const initialState = {
  videogames: [],
  details: {},
  genres: {},
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
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
}
