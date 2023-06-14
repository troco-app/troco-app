const Joi = require("joi");

module.exports = Joi.object({
  street: Joi.string().max(255).required(),
  city: Joi.string().max(100).required(),
  state: Joi.string().max(100).required(),
  country: Joi.string().max(100).required(),
  postal_code: Joi.string().max(20).required(),
  exchange_date_time: Joi.date().iso().required(),
  exchange_comment: Joi.string().max(255).allow(null, ""),
});
