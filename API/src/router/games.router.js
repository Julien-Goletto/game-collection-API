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
  .get('/', routerWrapper(gamesController.getAllGames))
  .get('/:gameId', routerWrapper(gamesController.getGameInfosByID))
  .post('/', checkingUser.checkLogStatus, validate('body', gameSchema), routerWrapper(gamesController.addNewGame)); 

gamesRouter.use(handleError);

module.exports = gamesRouter;