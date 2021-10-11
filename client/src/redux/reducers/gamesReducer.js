import {
  GET_VIDEOGAMES,
  GET_DETAILS,
  GET_GENRES,
  CHANGE_ORDER,
  CHANGE_GENRE,
} from "../actions/gamesAction.js";

const initialState = {
  videogames: [],
  details: {},
  genres: {},
  order: "append",
  filterGenre: "All",
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
    case CHANGE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case CHANGE_GENRE:
      return {
        ...state,
        filterGenre: action.payload,
      };
    default:
      return state;
  }
}
