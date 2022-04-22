const Joi = require('joi');

const gameSchema = Joi.object({
  name: Joi.string(),
  platforms: Joi.array().items(Joi.string()).min(1),
  released: Joi.string(),
  background_image: Joi.string(),
  genres: Joi.array().items(Joi.string()).min(1)
}).required();

module.exports = gameSchema;