const dbService = require("../services/db-service.js");
const cryptoService = require("../services/crypto-services.js");
const errorService = require("../services/error-service.js");

module.exports = async ({email, password}) => {

//Take the user info based on the email   

    const user = await dbService.getUserByEmail(email);

//Check User exist in the DDBB

    if (!user) {
        errorService.invalidCredentials();
      }

//Check email is Validated

    if (!user.emailValidated) {
        errorService.emailNotValidated();
    }

//Check the password is correct

    const okPassword = await cryptoService.validatePassword(password, user.password)
  
    if (!okPassword) {
        errorService.invalidCredentials();
      } 

//Generate token with user data

    const token = cryptoService.generateJWT({
        id: user.id,
        email: user.email,
        username: user.username,
    });

    return token;
    
};