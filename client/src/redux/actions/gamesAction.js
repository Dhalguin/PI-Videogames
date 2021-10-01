export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

// thunk
export function getVideogames(page, limit, name = "") {
  console.log(page, limit, name);
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
