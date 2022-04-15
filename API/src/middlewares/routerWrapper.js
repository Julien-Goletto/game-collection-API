const debug = require('debug')('Router_Wrapper');

const routerWrapper = (method) => {
  debug('Entering Wrapper');
  return async (req, res, next) => {
    try{
      debug('Router is called');
      await method(req, res, next);
    }
    catch(err){
      debug('ERROR', err);
      next(err);
    }
  }
};

module.exports = routerWrapper;