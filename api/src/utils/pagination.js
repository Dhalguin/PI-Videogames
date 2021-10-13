const getNextPage = (page, limit, count) => {
  if (Math.ceil(count / limit) > page) return page + 1;
  return null;
};

const getPrevPage = (page) => {
  if (page <= 1) return null;
  return page - 1;
};

const pagination = (array, page = 1, limit = 15) => {
  let startIndex = (page - 1) * limit;
  let endIndex = page * limit;

  let videogames = array.slice(startIndex, endIndex);

  return {
    currentPage: page,
    nextPage: getNextPage(page, limit, array.length),
    previousPage: getPrevPage(page),
    videogames,
    total: array.length,
  };
};

module.exports = pagination;
