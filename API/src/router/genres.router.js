const express = require('express');
const genresController = require('../controllers/genres.controller');

// // Gestion des erreurs
const routerWrapper = require('../middlewares/routerWrapper');
const handleError = require('../middlewares/handleError');

// Configuration du subRouter 
const genresRouter = express.Router();

genresRouter
  .get('/', routerWrapper(genresController.getAllGenres))
  .get('/:genreId', routerWrapper(genresController.getGenreByID));

genresRouter.use(handleError);

module.exports = genresRouter;