const client = require('../dbclient');
const debug = require('debug')("Game_DataMapper");
const APIError = require('../../Errors/APIError');

const gamesDataMapper = {
  async getAllGames() {
    const query = 'SELECT * FROM game;';
    const results = await client.query(query);
    if(!results.rowCount){
      throw new APIError ("No game saved yet", 404);
    };
    return results.rows;
  },
  async getGameInfosById(gameId){
    const query = { 
      text: `SELECT * FROM "all_games_with_infos"
              WHERE "id" = $1;`,
      values: [gameId],
    };
    const results = await client.query(query);
    if(!results.rowCount){
      throw new APIError ("This game is still not saved in base.", 404);
    };
    return results.rows;
  },
  async postNewGame(game){
    const query = {
      text: `SELECT add_new_game($1,$2,$3,$4,$5)`,
      values: [game.name, game.released, game.background_image, game.platforms, game.genres],
    };
    const results = await client.query(query);
    if(!results.rowCount){
      throw new APIError ("The requested game couldn't be saved.", 404);
    };
    debug(results);
  }
};

module.exports = gamesDataMapper;