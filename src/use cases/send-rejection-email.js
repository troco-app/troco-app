const emailService = require("../services/email-service.js");

module.exports = async (rejectedUser, rejectordUser, comment) => {

  await emailService.sendRejectionEmail(rejectedUser, rejectordUser, comment);

};