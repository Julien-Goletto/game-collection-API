const {Router} = require('express');
const router = Router();

// Import middlewares for checking user role if necessary

// Import subrouters :
const exampleRouter = require('./example.router');

// Adding subrouters
router
  .use('example', exampleRouter);

module.exports = router;
