const debug = require('debug')('Validator')
const APIError = require('../helper/APIError');

/**
 * Générateur de middleware pour la validation des objets
 * et propriétés de requêtes
 * @param {string} prop - Nom de la propriété request à valider
 * @param {Joi.object} schema - Schma de validation
 * @returns {Function} - Middleware de validation pour le corps de la requête,
 * Renvoie une erreur 400 en cas d'échec.
 */

module.exports = (prop, schema) => async(req, res, next) => {
  try{
    debug(request[prop]);
    await schema.validateAsync(request[prop]);
    next();
  }
  catch(err){
    // Code original de BN : next(new APIError(error, { statusCode: 400 }));
    next(new APIError(error, req.url, 400)); 
  }
};