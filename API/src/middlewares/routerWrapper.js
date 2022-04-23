const routerWrapper = (method) => {
const debug = require('debug')('Router_Wrapper');
  return async (req, res, next) => {
    try{
      await method(req, res, next);
    }
    catch(err){
      debug('ERROR', err);
      next(err);
    }
  }
};

module.exports = routerWrapper;