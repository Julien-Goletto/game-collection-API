const express = require('express');
const usersController = require('../controllers/users.controller');

// Gestion des erreurs
const handleError = require('../middlewares/handleError');
const routerWrapper = require('../middlewares/routerWrapper');

// // Checking user and privegies
// const checkingUser = require('../middlewares/checkingUser');

// // Joi validation compulsary for each payload containing data
const validate = require('../validation/validator');
const { userSchema } = require('../validation/schemas/');


// Configuration du subRouter 
const usersRouter = express.Router();

usersRouter
  .post('/register', validate('body',userSchema), routerWrapper(usersController.postNewUser))
  .post('/login', validate('body',userSchema), routerWrapper(usersController.logUser))
  .get('/logout', routerWrapper(usersController.logOutUser))
  .get('/', routerWrapper(usersController.getUsersList));

usersRouter.use(handleError);

module.exports = usersRouter;