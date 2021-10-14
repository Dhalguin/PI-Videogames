const axios = require("axios");
const { Op } = require("sequelize");
const { Videogame, Genres } = require("../db.js");
const paginator = require("./pagination.js");

const apiKey = process.env.API_KEY;

const getAllVideogames = async (page, limit) => {
  try {
    let currentPage = parseInt(page);

    let videogamesDB = await Videogame.findAll({
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

    let response = await axios.get(
      `https://api.rawg.io/api/games?&key=${apiKey}`
    );

    let response2 = await axios.get(response.data.next);

    let response3 = await axios.get(response2.data.next);

    let response4 = await axios.get(response3.data.next);

    let response5 = await axios.get(response4.data.next);

    let videogamesAPI = [].concat(
      response.data.results,
      response2.data.results,
      response3.data.results,
      response4.data.results,
      response5.data.results
    );

    let results = [].concat(videogamesDB).concat(videogamesAPI);

    return paginator(results, currentPage, limit);
  } catch (e) {
    console.log(e);
  }
};

const getVideogameById = async (id) => {
  try {
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
  } catch (e) {
    console.log(e);
  }
};

const getVideogameByName = async (name) => {
  try {
    let response = await axios.get(
      `https://api.rawg.io/api/games?&key=${apiKey}&search=${name}`
    );

    let responseDB = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
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

    let videogames = [].concat(responseDB).concat(response.data.results);

    let results = videogames.slice(0, 15);

    return results;
  } catch (e) {
    console.log(e);
  }
};

const getGenres = async () => {
  let response = await axios.get(
    `https://api.rawg.io/api/genres?key=${apiKey}`
  );

  return response.data.results;
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  getVideogameByName,
  getGenres,
};
