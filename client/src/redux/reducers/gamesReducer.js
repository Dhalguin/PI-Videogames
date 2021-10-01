import { GET_VIDEOGAMES } from "../actions/gamesAction.js";

const initialState = {
  videogames: [],
};

export default function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };

    default:
      return state;
  }
}
