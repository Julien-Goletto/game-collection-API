const { json } = require('express/lib/response');
const APIError = require('../Errors/APIError');
const debug = require('debug')('Error_Handler');

const handleError = async (err, req, res, next) => {
  debug(err);
  if( err instanceof APIError ){
    myError = err;
  }
  else{
    myError = new APIError(err, req.url);
  }
  await myError.log();
  res.status(myError.status).json(myError.message);
};

module.exports = handleError;