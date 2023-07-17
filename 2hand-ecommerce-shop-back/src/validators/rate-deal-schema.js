const Joi = require("joi");

module.exports = Joi.object({
  rating: Joi.number().min(1).max(5).required(),
  rating_comment: Joi.string().max(255),
});
