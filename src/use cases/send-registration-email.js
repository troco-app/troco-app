const emailService = require("../services/email-service.js");

module.exports = async (userData, code) => {

  await emailService.sendRegistrationEmail(userData, code);

};