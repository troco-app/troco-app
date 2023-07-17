const emailService = require("../services/email-service.js");

module.exports = async (ratedUser, dealId, ratorUser, rate, comment) => {
  await emailService.sendDealRating(
    ratedUser,
    dealId,
    ratorUser,
    rate,
    comment
  );
};
