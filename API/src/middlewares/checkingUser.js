const debug = require('debug')('Check_User');
const APIError = require('../Errors/APIError');

const checkingUser ={
  checkLogStatus(req,_,next){
    debug(req.session);
    if(req.session.user){
      next();
    }
    else {
      throw new APIError("Vous n'êtes pas connecté.");
    };
  },
  checkAutorization(req,res,next){
    debug(req.session);
    if(req.session.user.isAdmin){
      next();
    }
    else {
      throw new APIError("Vous n'avez pas les privilèges nécessaires à cette action.");
    };
  },
};

module.exports = checkingUser;