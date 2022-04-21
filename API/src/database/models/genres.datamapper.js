const client = require('../dbclient');
const debug = require('debug')("Genre_DataMapper");
const APIError = require('../../Errors/APIError');

const genresDataMapper = {
  async getAllGenres() {
    const query = 'SELECT * FROM genre;';
    const results = await client.query(query);
    if(!results.rowCount){
      throw new APIError ("No genre saved yet", 404);
    };
    return results.rows;
  },
  async getGenreById(genreId){
    const query = { 
      text: `SELECT * FROM "genre"
              WHERE "id" = $1;`,
      values: [genreId],
    };
    const results = await client.query(query);
    if(!results.rowCount){
      throw new APIError ("This genre still doesn't exist in base.", 404);
    };
    return results.rows;
  }
};

module.exports = genresDataMapper;