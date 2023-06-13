const emailService = require("../services/email-service.js");

module.exports = async (rejectedUser, rejectordUser, dealId, comment) => {
  await emailService.sendRejectionEmail(
    rejectedUser,
    rejectordUser,
    dealId,
    comment
  );
};
