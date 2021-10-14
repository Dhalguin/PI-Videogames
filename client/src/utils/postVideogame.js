export const postVidegame = (data, genres, history) => {
  let videogame = {
    name: data.title,
    description: data.description,
    released: data.released,
    rating: data.rating,
    genres,
    platforms: data.platforms,
    background_image: data.background_image,
  };

  fetch(`http://localhost:3001/videogames`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(videogame),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(`The ${data.videogame.name} videogame added to DB successfully`);
      history.push("/videogames");
    })
    .catch((err) => {
      console.log(err);
      alert("Error adding videogame. Try again!");
    });
};
