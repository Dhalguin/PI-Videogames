export const filterByOrder = (order, videogames) => {
  if (order === "rating") {
    videogames = videogames.sort((a, b) => b.rating - a.rating);
  } else if (order === "asc") {
    videogames = videogames.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === "desc") {
    videogames = videogames.sort((a, b) => b.name.localeCompare(a.name));
  }
};

export const filterByGenre = (genre, videogames, array) => {
  if (genre === "All") array = [];

  if (genre !== "All") {
    for (let i = 0; i < videogames.length; i++) {
      if (videogames[i].genres) {
        for (let a = 0; a < videogames[i].genres.length; a++) {
          if (videogames[i].genres[a].name === genre) {
            array.push(videogames[i]);
          }
        }
      }
    }
  }
};

export const filterByExistence = (existence, videogames, array) => {
  if (existence === "All") array = [];

  if (existence === "append") {
    for (let i = 0; i < videogames.length; i++) {
      if (!Number(videogames[i].id)) {
        array.push(videogames[i]);
      }
    }
  } else if (existence === "exists") {
    for (let i = 0; i < videogames.length; i++) {
      if (Number(videogames[i].id)) {
        array.push(videogames[i]);
      }
    }
  }
};
