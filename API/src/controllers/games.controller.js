const debug = require('debug')('Game_Controller');
const gamesDataMapper = require('../database/models/games.datamapper');

const gamesController = {
  async getAllGames(_, res) {
    const result = await gamesDataMapper.getAllGames();
    res.status(200).json(result);
  },
  async getGameInfosByID(req, res) {
    const gameId = req.params.gameId;
    const result = await gamesDataMapper.getGameInfosById(gameId);
    res.status(200).json(result);
  },
};

module.exports = gamesController;