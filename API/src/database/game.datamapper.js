const client = require('./dbclient');
const debug = require('debug')("Example_DataMapper");
const APIError = require('../Errors/APIError');

const dataMapper = {
  async getAllGames() {
    const test = 'Toto';
    if(!test){
      throw new APIError ("NOT FOUND", 404);
    };
    debug('Contenu de la requête: ', test);
    return test;
  },
};

module.exports = dataMapper;