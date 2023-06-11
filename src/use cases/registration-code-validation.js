//Services
const userDbService = require("../services/users-db-service");
const validationDbService = require("../services/validation-db-service");
const errorService = require("../services/error-service.js");

module.exports = async (userEmail, code) => {

//User exist check
  
  const user = await userDbService.getUserByEmail(userEmail);

  if (!user) {
    errorService.notFound();
  };

//Get validation Code for this user

  const dbCode = await validationDbService.getValidationCodeByUserId(user.id);


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

  await validationDbService.deleteValidationCode(dbCode.id);

  await validationDbService.setEmailValidated(user.id);

};