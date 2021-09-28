require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");
const { Genres } = require("../db.js");

const apiKey = process.env.API_KEY;

router.get("/", async (req, res) => {
  let genres = await Genres.findAll();

  if (genres.length <= 0) {
    let response = await getGenres();

    if (!response)
      return res
        .status(401)
        .json({ response: "FAILED", message: "There are not Genres" });

    let results = [];

    response.forEach((genre) => {
      Genres.create({
        id: genre.id,
        name: genre.name,
      });

      results.push({
        id: genre.id,
        name: genre.name,
      });
    });

    return res.status(200).json({ genres: results });
  }

  res.status(200).json({ genres });
});

const getGenres = async () => {
  let response = await axios.get(
    `https://api.rawg.io/api/genres?key=${apiKey}`
  );

  return response.data.results;
};

module.exports = router;
