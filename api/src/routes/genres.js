require("dotenv").config();
const router = require("express").Router();
const { Genres } = require("../db.js");
const { getGenres } = require("../utils/consultsApi.js");

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

module.exports = router;
