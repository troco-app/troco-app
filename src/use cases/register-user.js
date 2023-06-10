const dbService = require("../services/db-service.js");
const cryptoService = require("../services/crypto-services.js");
const timeService = require("../services/time-services.js")
const sendRegistrationEmail  = require("../use cases/send-registration-email.js");

module.exports = async (userData) => {
    
//hash the password    
  const hashedPassword = await cryptoService.hashPassword(userData.password);

//generate UUID V4
  const newUserId = cryptoService.generateUUID();

 //generate user DDBB entry
  const user = {
    ...userData,
    id: newUserId,
    password: hashedPassword,
    emailValidated: false,
    is_deleted: false,
  };

  await dbService.saveUser(user);

//genarate a Validation Code 

  const code = cryptoService.generateValidationCode();

//generate expiaration date
 
  const expirationTimestamp = timeService.getTimestampMinutesFromNow(5);

//generate validation DDBB entry

  const validationCode = {
    id: cryptoService.generateUUID(),
    user_id: user.id,
    code: code,
    expiration_date: expirationTimestamp,
  };

    await dbService.saveValidationCode(validationCode);

//send a wellcome email and a validation code

  await sendRegistrationEmail(user, code);

};