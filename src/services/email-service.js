require("dotenv").config();
const mailjet = require("node-mailjet").apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

module.exports = {
  async sendEmail(to, toName, subject, message) {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAIL_SENDER_FROM,
            Name: process.env.MAIL_SENDER_NAME,
          },
          To: [
            {
              Email: to,
              Name: toName,
            },
          ],
          Subject: subject,
          HTMLPart: message,
        },
      ],
    });
  },

  async sendRegistrationEmail(user, code) {
    await this.sendEmail(
      user.email,
      user.name,
      "Welcome to TROCO",
      `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
          <h1 style="background-color: #f2f2f2; padding: 20px; color: #444; text-align: center;">Happy To See You Here</h1>
          <div style="padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
            <p>Dear <strong>${user.username}</strong>,</p>
            <p>You have become a TROCOLO!!</p>
            <p>The last step in your journey to start TROCKING is to validate your email. Please take this TROCO code and validate it on our TROCO web:</p>
            <p style="background-color: #f2f2f2; padding: 10px; border-left: 5px solid #5cb85c;"><em>${code}</em></p>
            <p>Best Regards,</p>
            <p><strong>The TROCO Team</strong></p>
          </div>
          <div style="text-align: center; margin-top: 20px; padding: 20px; background-color: #f2f2f2;">
            <p style="font-size: 0.8em;">This is an automated email, please do not reply directly to this message.</p>
          </div>
        </div>`
    );
  },

  async sendOfferEmail(
    sellerUser,
    buyerUser,
    requestedItemsDetails,
    offeredItemsDetails
  ) {
    await this.sendEmail(
      sellerUser.email,
      sellerUser.name,
      "You have a new TROCO offer waiting for You",
      `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
          <h1 style="background-color: #f2f2f2; padding: 20px; color: #444; text-align: center;">This is Your New TROCO Offer</h1>
          <div style="padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
            <p>The user <strong>${buyerUser.username}</strong> has made the following offer:</p>
            <h2>Requested Items:</h2>
            <p style="background-color: #f2f2f2; padding: 10px; border-left: 5px solid #5cb85c;">${requestedItemsDetails}</p>
            <h2>Offered Items:</h2>
            <p style="background-color: #f2f2f2; padding: 10px; border-left: 5px solid #5cb85c;">${offeredItemsDetails}</p>
            <p>Go to our website to accept or reject the deal.</p>
            <p>Best Regards,</p>
            <p><strong>The TROCO Team</strong></p>
          </div>
          <div style="text-align: center; margin-top: 20px; padding: 20px; background-color: #f2f2f2;">
            <p style="font-size: 0.8em;">This is an automated email, please do not reply directly to this message.</p>
          </div>
        </div>`
    );
  },

  async sendRejectionEmail(rejectedUser, rejectordUser, dealId, comment) {
    await this.sendEmail(
      rejectedUser.email,
      rejectedUser.name,
      "TROCOFFER Rejected :(",
      `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
      <h1 style="background-color: #f2f2f2; padding: 20px; color: #444; text-align: center;">We are sorry</h1>
      <div style="padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
        <p>Dear <strong>${rejectedUser.username}</strong>,</p>
        <p>The deal <strong>${dealId}</strong> has been rejected by <strong>${rejectordUser.username}</strong>.</p>
        <p>This is the rejection reason:</p>
        <p style="background-color: #f2f2f2; padding: 10px; border-left: 5px solid #d9534f;"><em>${comment}</em></p>
        <p>Best Regards,</p>
        <p><strong>The TROCO Team</strong></p>
      </div>
      <div style="text-align: center; margin-top: 20px; padding: 20px; background-color: #f2f2f2;">
        <p style="font-size: 0.8em;">This is an automated email, please do not reply directly to this message.</p>
      </div>
    </div>`
    );
  },

  async sendAcceptanceEmail(buyerUser, sellerUser, dealId, exchangeConditions) {
    await this.sendEmail(
      buyerUser.email,
      sellerUser.name,
      "TROCOFFER Accepted!!",
      `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
      <h1 style="background-color: #f2f2f2; padding: 20px; color: #444; text-align: center;">Congratulations!</h1>
      <div style="padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
        <p>Dear <strong>${buyerUser.username}</strong>,</p>
        <p>The user <strong>${sellerUser.username}</strong> has accepted the deal <strong>${dealId}</strong>.</p>
        <h2>Exchange Conditions:</h2>
        <p style="background-color: #f2f2f2; padding: 10px; border-left: 5px solid #5cb85c;">${exchangeConditions}</p>
        <p>Best Regards,</p>
        <p><strong>The TROCO Team</strong></p>
      </div>
      <div style="text-align: center; margin-top: 20px; padding: 20px; background-color: #f2f2f2;">
        <p style="font-size: 0.8em;">This is an automated email, please do not reply directly to this message.</p>
      </div>
    </div>`
    );
  },

  async sendDealRating(ratedUser, dealId, ratorUser, rate, comment) {
    await this.sendEmail(
      ratedUser.email,
      ratedUser.name,
      "A TROCOLO Has Rated One of Your Exchanges",
      `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
      <h1 style="background-color: #f2f2f2; padding: 20px; color: #444; text-align: center;">TROCO Rate</h1>
      <div style="padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
        <p>Dear <strong>${ratedUser.username}</strong>,</p>
        <p>The user <strong>${ratorUser.username}</strong>, has rated the TROCODEAL <strong>${dealId}</strong>.</p>
        <h2>Exchange Rate: <span style="color: #5cb85c;">${rate}/5</span></h2>
        <h3>Comment:</h3>
        <p style="background-color: #f2f2f2; padding: 10px; border-left: 5px solid #5cb85c;">${comment}</p>
        <p>Best Regards,</p>
        <p><strong>The TROCO Team</strong></p>
      </div>
      <div style="text-align: center; margin-top: 20px; padding: 20px; background-color: #f2f2f2;">
        <p style="font-size: 0.8em;">This is an automated email, please do not reply directly to this message.</p>
      </div>
    </div>`
    );
  },
};
