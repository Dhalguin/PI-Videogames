export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_DETAILS = "GET_DETAILS";
export const GET_GENRES = "GET_GENRES";
export const CHANGE_ORDER = "CHANGE_ORDER";
export const CHANGE_GENRE = "CHANGE_GENRE";

export const changeOrder = (order) => {
  return {
    type: CHANGE_ORDER,
    payload: order,
  };
};

export const changeGenre = (genre) => {
  return {
    type: CHANGE_GENRE,
    payload: genre,
  };
};

// thunk
export function getVideogames(page, limit, name = "") {
  return function (dispatch) {
    fetch(
      `http://localhost:3001/videogames?page=${page}&limit=${limit}&name=${name}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_VIDEOGAMES, payload: data });
      });
  };
}

export function getVideogameDetails(id) {
  return function (dispatch) {
    fetch(`http://localhost:3001/videogame/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_DETAILS, payload: data });
      });
  };
}

export function getGenres() {
  return function (dispatch) {
    fetch("http://localhost:3001/genres")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_GENRES, payload: data });
      });
  };
}
