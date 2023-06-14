const Joi = require("joi");

module.exports = Joi.object({
  buyer_id: Joi.string().guid({ version: "uuidv4" }).required(),
  seller_id: Joi.string().guid({ version: "uuidv4" }).required(),
  offered_items: Joi.array()
    .items(Joi.string().guid({ version: "uuidv4" }))
    .min(1)
    .required(),
  requested_items: Joi.array()
    .items(Joi.string().guid({ version: "uuidv4" }))
    .min(1)
    .required(),
});
