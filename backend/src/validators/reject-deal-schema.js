const Joi = require("joi");

module.exports = Joi.object({
  rejection_comment: Joi.string().max(255).required(),
});
