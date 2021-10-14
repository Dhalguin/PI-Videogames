require("dotenv").config();
const { Router } = require("express");
const { Videogame } = require("../db.js");
const {
  getAllVideogames,
  getVideogameById,
  getVideogameByName,
} = require("../utils/consultsApi.js");

const router = Router();

router.get("/", async (req, res) => {
  let { page, limit, name } = req.query;

  try {
    if (name) {
      let results = await getVideogameByName(name);

      if (!results)
        return res
          .status(404)
          .json({ response: "FAILED", message: "Videogames not found" });

      let videogames = results.map((videogame) => {
        return {
          id: videogame.id,
          name: videogame.name,
          background_image: videogame.background_image,
          genres: videogame.genres,
          rating: videogame.rating,
        };
      });

      return res.status(200).json(videogames);
    }

    let results = await getAllVideogames(page, limit);

    if (!results)
      return res.status(401).json({
        response: "FAILED",
        message: "There are no Videogames",
      });

    let response = results.videogames.map((videogame) => {
      return {
        id: videogame.id,
        name: videogame.name,
        background_image: videogame.background_image,
        genres: videogame.genres,
        rating: videogame.rating,
      };
    });

    results.videogames = response;

    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:idVideogame", async (req, res) => {
  let { idVideogame } = req.params;

  try {
    let videogame = await getVideogameById(idVideogame);

    if (!videogame)
      return res
        .status(404)
        .json({ response: "FAILED", messgae: "Videogame not found" });

    res.status(200).json({
      id: videogame.id,
      name: videogame.name,
      description: videogame.description,
      released: videogame.released,
      background_image: videogame.background_image,
      rating: videogame.rating,
      platforms: videogame.parent_platforms || videogame.platforms,
      genres: videogame.genres,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  let {
    name,
    description,
    released,
    rating,
    platforms,
    genres,
    background_image,
  } = req.body;

  try {
    let videogame = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      background_image,
    });

    await videogame.addGenres(genres);

    if (!videogame)
      return res
        .status(422)
        .json({ response: "FAILED", message: "Could not add the videogame" });

    res.status(200).json({ videogame });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
