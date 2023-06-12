const emailService = require("../services/email-service.js");

module.exports = async (buyerUser, sellerUser, exchangeConditions) => {

  await emailService.sendRegistrationEmail(buyerUser, sellerUser, exchangeConditions);

};