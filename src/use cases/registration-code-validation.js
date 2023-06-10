const dbService = require("../services/db-service.js");

module.exports = async (userEmail, code) => {

//User exist check
  
  const user = await dbService.getUserByEmail(userEmail);

//Get validation Code for this user

  const dbCode = await dbService.getValidationCodeByUserId(user.id);


//check user code and DDBB code are the same

  if (dbCode.code != code) {
    console.log("el codigo es diferente");
  } else {
    console.log("el codigo igual")
  };

//Check if code is expired

  const currentTimestamp = new Date();
  const formattedCurrentTimestamp = currentTimestamp.toISOString();
  if (formattedCurrentTimestamp > dbCode.expiration_date) {
    console.log('código expirado');
  } else {
    console.log("codigo vigente")
  };
  console.log(currentTimestamp)
  console.log(dbCode.expiration_date)

//If code is the same we delete it from the DDBB

  await dbService.deleteValidationCode(dbCode.id);

// y actualizar el usuario marcando su emailValidated = true

  await dbService.setEmailValidated(user.id);

};