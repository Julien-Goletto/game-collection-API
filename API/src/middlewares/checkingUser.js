const debug = require('debug')('Check_User');
const APIError = require('../Errors/APIError');

const checkingUser ={
  checkLogStatus(req,_,next){
    if(req.session.user){
      next();
    }
    else {
      throw new APIError("To continue, you must be logged in.");
    };
  },
  checkAutorization(req,_,next){
    debug(req.session);
    if(req.session.user.isAdmin){
      next();
    }
    else {
      throw new APIError("You doesn't have the authorization for this action.");
    };
  },
};

module.exports = checkingUser;