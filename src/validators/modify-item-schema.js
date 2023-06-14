const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().max(150).required(),

  description: Joi.string().required(),

  estimated_price: Joi.number()
    .precision(2) // assuming the decimal is up to 2 places
    .positive()
    .allow(null), // allow null values

  item_condition: Joi.string()
    .valid("not_used", "good", "ok", "damaged", "malfunctioning") // only allow these enumerated values
    .required(),

  status: Joi.string()
    .valid("available", "sold", "reserved") // only allow these enumerated values
    .required(),

  category_id: Joi.number()
    .integer()
    .min(1)
    .max(11) // only 11 categories as per your instruction
    .required(),
});
