const express = require('express');
const platformsController = require('../controllers/platforms.controller');

// // Gestion des erreurs
const routerWrapper = require('../middlewares/routerWrapper');
const handleError = require('../middlewares/handleError');

// Configuration du subRouter 
const platformsRouter = express.Router();

platformsRouter
  .get('/', routerWrapper(platformsController.getAllGenres))
  .get('/:platformId', routerWrapper(platformsController.getPlatformByID));

platformsRouter.use(handleError);

module.exports = platformsRouter;