const express = require('express');
const gamesController = require('../controllers/games.controller');

// Joi validation compulsary for each payload containing data
const validate = require('../validation/validator');
const { gameTitleSchema, gameSchema } = require('../validation/schemas/');

// // Gestion des erreurs
const routerWrapper = require('../middlewares/routerWrapper');
const handleError = require('../middlewares/handleError');

// Configuration du subRouter 
const gamesRouter = express.Router();

gamesRouter
  .get('/', routerWrapper(gamesController.getAllGames))
  .get('/:gameId', routerWrapper(gamesController.getGameInfosByID))
  .post('/', validate('body', gameSchema), routerWrapper(gamesController.addNewGame)); 

gamesRouter.use(handleError);

module.exports = gamesRouter;