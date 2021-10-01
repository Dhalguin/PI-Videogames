export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_DETAILS = "GET_DETAILS";

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
