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
  
    async sendrandomEmail(user) {
      await this.sendEmail(
        user.email,
        user.name,
        "Welcome to TROCO - random message",
        `<h1>Welcome to Troco</h1>
  Querido ${user.username}, ya eres un nuevo TROCOLO.
  </br>
  </br>
  Un saludo cordial, el equipo de TROCO.
  `
      );
    },

    async sendRegistrationEmail(user) {
      await this.sendEmail(
        user.email,
        user.name,
        "Welcome to TROCO - random message",
        `<h1>Welcome to Troco</h1>
  Querido ${user.username}, ya eres un nuevo TROCOLO.
  </br>
  </br>
  Un saludo cordial, el equipo de TROCO.
  `
      );
    },

  };