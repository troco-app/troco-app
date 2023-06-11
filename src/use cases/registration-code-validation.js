const dbService = require("../services/db-service.js");
const errorService = require("../services/error-service.js");

module.exports = async (userEmail, code) => {

//User exist check
  
  const user = await dbService.getUserByEmail(userEmail);

  if (!user) {
    errorService.notFound();
  };

//Get validation Code for this user

  const dbCode = await dbService.getValidationCodeByUserId(user.id);


//check user code and DDBB code are the same

if (dbCode.code != code) {
  errorService.invalidValidationCode();
};

//Check if code is expired

  const currentTimestamp = new Date();
  const formattedCurrentTimestamp = currentTimestamp.toISOString();
  if (formattedCurrentTimestamp > dbCode.expiration_date) {
    errorService.expiredValidationCode();
  };

//If code is the same delete it from the DDBB and check emailValidated field to true

  await dbService.deleteValidationCode(dbCode.id);

  await dbService.setEmailValidated(user.id);

};