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
      let videogames = await getVideogameByName(name);

      if (!videogames)
        return res
          .status(404)
          .json({ response: "FAILED", message: "Videogames not found" });
      return res.status(200).json(videogames);
    }

    let videogames = await getAllVideogames(page, limit);

    if (!videogames)
      return res.status(401).json({
        response: "FAILED",
        message: "There are no Videogames",
      });

    res.status(200).json(videogames);
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

    res.status(200).json(videogame);
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
