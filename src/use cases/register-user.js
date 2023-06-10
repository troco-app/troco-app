const dbService = require("../services/db-service.js");
const sendRegistrationEmail = require("../use cases/send-random-email");
const cryptoService = require("../services/crypto-services.js");


module.exports = async (userData) => {
    
//hash the password    
const hashedPassword = await cryptoService.hashPassword(userData.password);

//generate UUID V4
 const newUserId = cryptoService.generateUUID();

 //save to the DDBB
 const user = {
    ...userData,
    id: newUserId,
    password: hashedPassword,
    emailValidated: false,
  };
  await dbService.saveUser(user);

//send a wellcome email and a validation code

    await sendRegistrationEmail(user);
};