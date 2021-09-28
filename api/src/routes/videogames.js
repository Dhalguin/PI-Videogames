require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Videogame } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const apiKey = process.env.API_KEY;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", async (req, res) => {
  let { page, limit } = req.query;

  try {
    let response = await getVideogames(page, limit);

    if (!response)
      return res.status(401).json({
        response: "FAILED",
        message: "There are no Videogames",
      });

    let videogames = response.map((game) => {
      return {
        id: game.id,
        name: game.name,
        image: game.background_image,
        rating: game.rating,
        platforms: game.platforms,
        genres: game.genres,
      };
    });

    res.status(200).json({ videogames });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/videogames/:idVideogame", async (req, res) => {
  let { idVideogame } = req.params;

  try {
    let videogame = await getVideogameById(idVideogame);

    res.status(200).json({ videogame });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/videogame", async (req, res) => {
  let { name, description, release, rating, platforms } = req.body;

  try {
    let videogame = await Videogame.create({
      name,
      description,
      release,
      rating,
      platforms,
    });

    if (!videogame)
      return res
        .status(422)
        .json({ response: "FAILED", message: "Could not add the videogame" });

    res.status(200).json({ videogame });
  } catch (err) {
    res.status(500).json(err);
  }
});

const getVideogames = async (page, limit) => {
  let response = await axios.get(
    `https://api.rawg.io/api/games?&key=${apiKey}`
  );

  let data = response.data.results;

  let startIndex = (page - 1) * limit;
  let endIndex = page * limit;

  let results = data.slice(startIndex, endIndex);

  return results;
};

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
