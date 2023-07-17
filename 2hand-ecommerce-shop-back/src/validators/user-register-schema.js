const Joi = require("joi");

module.exports = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  first_name: Joi.string(),
  last_name: Joi.string(),
  city: Joi.string(),
  profile_img: Joi.string(),
  bio_summary: Joi.string(),
});
