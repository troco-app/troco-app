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
  
    async sendRegistrationEmail(user,code) {
      await this.sendEmail(
        user.email,
        user.name,
        "Welcome to TROCO",
        `<h1>Happy To See You Here</h1>
  Dear ${user.username}, 
  </br>
  you have became a TROCOLO !!
  </br>
  The last step to in your road to start TROCKING we need you to validate your email.
  </br>
  Please take this TROCO code and validate it in our TROCO web.
  <pre>${code}</pre>
  </br>
  Have a nice day, TROCO team.
  `
      );
    },

    async sendOfferEmail(sellerUser,buyerUser, requestedItemsDetails, offeredItemsDetails) {
      await this.sendEmail(
        sellerUser.email,
        sellerUser.name,
        "You have a new TROCO offer waiting for You",
        `<h1>This is is your new TROCO Offer</h1>
  The User  ${buyerUser.username} is making you this offer:
  </br>
  Requested Items:
  </br>
  ${requestedItemsDetails}
  </br>
  Offered Items:
  </br>
  ${offeredItemsDetails}    
  </br>
  Go to our web to acceot or reject the deal. 
  Have a nice day, TROCO team.
  `
      );
    },

    async sendRejectionEmail(rejectedUser, rejectordUser, comment) {
      await this.sendEmail(
        rejectedUser.email,
        rejectedUser.name,
        "TROCOFFER Rejected :(",
        `<h1>We are sorry</h1>
  Dear ${rejectedUser.name},
  </br> 
  The deal ${rejection.deal_id} has been rejected by ${rejectordUser}. This is the rejeaction reason:
  </br>
  <pre>${comment}</pre>
  </br>
  Have a nice day, TROCO team.
  `
      );
    },

    async sendAcceptanceEmail(buyerUser, sellerUser, dealId, exchangeConditions) {
      await this.sendEmail(
        buyerUser.email,
        sellerUser.name,
        "TROCOFFER Accepted!!",
        `<h1> Contratulations !!</h1>
  Dear ${buyerUser.username}, 
  </br>
  The user ${sellerUser.username} has accepted the deal ${dealId}
  </br>
  These are the exchange conditions:
  </br>
  ${exchangeConditions}
  </br>
  Have a nice day, TROCO team.
  `
      );
    },

    async sendDealRating(ratedUser, dealId, ratorUser, rate, comment) {
      await this.sendEmail(
        ratedUser.email,
        ratedUser.name,
        "A TROCOLO has Rated One of Your Exchanges",
        `<h1>TROCO RATE</h1>
  Dear ${ratedUser.username},     
  The user  ${ratorUser.username}, has rated the TROCODEAL ${dealId}.
  </br>
  Exchange Rate: ${ratorUser.username}/5
  </br>
  And added this comment for you: ${comment}
  </br>
  Have a nice day, TROCO team.
  `
      );
    },

  };