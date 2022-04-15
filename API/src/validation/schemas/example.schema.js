const Joi = require('joi');

module.exports = Joi.object({
  label: Joi.string(),
  route: Joi.string()
    .pattern(/^\/[a-zA-Z\\/]*[^\\/]$/),
}).min(1).required;