//Services

const userDbService = require("../services/users-db-service");
const validationDbService = require("../services/validation-db-service");
const cryptoService = require("../services/crypto-services.js");
const timeService = require("../services/time-services.js")
const sendRegistrationEmail  = require("../use cases/send-registration-email.js");
const errorService = require("../services/error-service")

module.exports = async (userData) => {

//Check email & username already exist in DDBB

  const emailExist = await userDbService.getUserByEmail(userData.email);
  if (emailExist) {
    errorService.usernamelAlreadyRegistered();
  }

  const usernamelExist = await userDbService.getUserByUsername(userData.username);
  if (usernamelExist) {
    errorService.emailAlreadyRegistered();
  }

    
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

  await userDbService.saveUser(user);

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

    await validationDbService.saveValidationCode(validationCode);

//send a wellcome email and a validation code

  await sendRegistrationEmail(user, code);

};