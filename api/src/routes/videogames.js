require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Op } = require("sequelize");
const { Videogame, Genres } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const apiKey = process.env.API_KEY;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", async (req, res) => {
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

    let videogames = await getVideogames(page, limit);

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

router.get("/videogame/:idVideogame", async (req, res) => {
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

router.post("/videogame", async (req, res) => {
  let { name, description, release, rating, platforms, genres } = req.body;

  try {
    let videogame = await Videogame.create({
      name,
      description,
      release,
      rating,
      platforms,
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

const getVideogames = async (page, limit) => {
  let response = await axios.get(
    `https://api.rawg.io/api/games?&key=${apiKey}`
  );

  let results = response.data.results;

  let startIndex = (page - 1) * limit;
  let endIndex = page * limit;

  let videogames = results.slice(startIndex, endIndex);

  return videogames;
};

const getVideogameById = async (id) => {
  if (Number(id)) {
    let response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${apiKey}`
    );

    return response.data;
  } else {
    let response = await Videogame.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Genres,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return response;
  }
};

const getVideogameByName = async (name) => {
  let response = await axios.get(
    `https://api.rawg.io/api/games?&key=${apiKey}&search=${name}`
  );

  let responseDB = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });

  let videogames = [].concat(responseDB).concat(response.data.results);

  let results = videogames.splice(0, 15);

  return results;
};

module.exports = router;
