require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const apiKey = process.env.API_KEY;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", (req, res) => {
  res.status(200).json({ result: "All videogames" });
});

router.get("/videogames/:idVideogame", async (req, res) => {
  let { idVideogame } = req.params;

  let data = await getVideogameById(idVideogame);

  res.status(200).json({ result: data });
});

router.post("/videogame", (req, res) => {
  let {} = req.body;

  res.status(200).json({ result: "Post videogame data" });
});

const getVideogameById = async (id) => {
  let response = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${apiKey}`
  );

  return {
    id: response.data.id,
    name: response.data.name,
    description: response.data.description,
    background_image: response.data.background_image,
    rating: response.data.rating,
    genres: response.data.genres,
    platforms: response.data.metacritic_platforms,
  };
};

module.exports = router;
