const emailService = require("../services/email-service.js");

module.exports = async (
  sellerUser,
  buyerUser,
  requestedItemsDetails,
  offeredItemsDetails
) => {
  await emailService.sendOfferEmail(
    sellerUser,
    buyerUser,
    requestedItemsDetails,
    offeredItemsDetails
  );
};
