const express = require('express');
const gamesController = require('../controllers/games.controller');

// Joi validation compulsary for each payload containing data
// const validate = require('../validation/validator');
// const schema = require('../validation/schemas/example.schema');

// // Gestion des erreurs
const routerWrapper = require('../middlewares/routerWrapper');
const handleError = require('../middlewares/handleError');

// Configuration du subRouter 
const gamesRouter = express.Router();

gamesRouter
  .get('/', routerWrapper(gamesController.getAllGames))
  .get('/:gameId', routerWrapper(gamesController.getGameInfosByID));
  //Example de route avec validation du body via Joi
  // .post(validate('body', schema), routerWrapper(exampleController.postExample)); 

gamesRouter.use(handleError);

module.exports = gamesRouter;