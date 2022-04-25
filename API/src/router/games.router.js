const express = require('express');
const gamesController = require('../controllers/games.controller');

// Gestion des erreurs
const handleError = require('../middlewares/handleError');
const routerWrapper = require('../middlewares/routerWrapper');

// Checking user and privegies
const checkingUser = require('../middlewares/checkingUser');

// Joi validation compulsary for each payload containing data
const validate = require('../validation/validator');
const { gameTitleSchema, gameSchema } = require('../validation/schemas/');


// Configuration du subRouter 
const gamesRouter = express.Router();

gamesRouter
  /**
   * Get a list of all games objects saved in database
   * @route Get /games
   * @group - Games
   * @returns {Array} 200 - success response
   * @returns {APIError} 404 - fail response
   */
  .get('/', routerWrapper(gamesController.getAllGames))
  /**
   * Get a detailled game object saved in database via its id
   * @route Get /games/:gameId
   * @group - Games
   * @param {Integer} gameId
   * @returns {Game} 200 - success response
   * @returns {APIError} 404 - fail response
   */
  .get('/:gameId', routerWrapper(gamesController.getGameInfosByID))
  /**
   * Post a new game object in database
   * @route POST /games
   * @group - Games
   * @param {Game} game
   * @returns {Game} 200 - success response
   * @returns {APIError} 404 - fail response
   */
  .post('/', checkingUser.checkLogStatus, validate('body', gameSchema), routerWrapper(gamesController.addNewGame)); 

gamesRouter.use(handleError);

module.exports = gamesRouter;