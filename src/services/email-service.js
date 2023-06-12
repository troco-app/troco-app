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
        "Welcome to TROCO - random message",
        `<h1>Welcome to Troco</h1>
  Querido ${user.username}, ya eres un nuevo TROCOLO.
  Por favor, para poder logearte tienes que introducir en siguiente código de Validación aquí: LINK
  </br>
  <pre>${code}</pre>
  </br>
  Un saludo cordial, el equipo de TROCO.
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
  Requested Items
  </br>
  ${requestedItemsDetails}
  </br>
  Offered Items
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
        rejectedUserr.email,
        rejectedUser.name,
        `The Troco Offer ${rejection.deal_id} has been rejected`,
        `<h1>Troco Offer Rejection </h1>
  Dear ${rejectedUser.name}, the deal ${rejection.deal_id} has been rejected by ${rejectordUser}. This is the rejeaction reason:
  </br>
  <pre>${comment}</pre>
  </br>
  Have a nice day, TROCO team.
  `
      );
    },

    async sendAcceptanceEmail(user,code) {
      await this.sendEmail(
        user.email,
        user.name,
        "Welcome to TROCO - random message",
        `<h1>Welcome to Troco</h1>
  Querido ${user.username}, ya eres un nuevo TROCOLO.
  Por favor, para poder logearte tienes que introducir en siguiente código de Validación aquí: LINK
  </br>
  <pre>${code}</pre>
  </br>
  Un saludo cordial, el equipo de TROCO.
  `
      );
    },

  };