const express = require('express');
const exampleController = require('../controllers');

// Joi valdiation compulsary for each payload containing data
// const validate = require('../validation/validator');
// const schema = require('../validation/schemas/example.schema');

// // Gestion des erreurs
const routerWrapper = require('../middlewares/routerWrapper');
const handleError = require('../middlewares/handleError');

// Configuration du subRouter 
const router = express.Router();

router
  .route('/')
  .get(routerWrapper(exampleController.getExample));
  //Example de route avec validation du body via Joi
  // .post(validate('body', schema), routerWrapper(exampleController.postExample)); 

router.use(handleError);

module.exports = router;