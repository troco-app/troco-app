const emailService = require("../services/email-service.js");

module.exports = async (buyerUser, sellerUser, dealId, exchangeConditions) => {
  await emailService.sendAcceptanceEmail(
    buyerUser,
    sellerUser,
    dealId,
    exchangeConditions
  );
};
