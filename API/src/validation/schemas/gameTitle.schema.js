const Joi = require('joi');

const gameTitleSchema = Joi.object({
  title: Joi.string().required()
}).required();

module.exports = gameTitleSchema;