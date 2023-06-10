const emailService = require("../services/email-service.js");

module.exports = async (userData) => {

    //enviar el mail
  await emailService.sendrandomEmail(userData);

};