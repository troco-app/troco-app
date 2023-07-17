//Services
const { updateUsersById } = require("../services/users-db-service");
const cryptoService = require("../services/crypto-services.js");

module.exports = async (currentUserId, payload) => {
  //hash the password
  const hashedPassword = await cryptoService.hashPassword(payload.password);

  //generate user DDBB entry
  const user = {
    ...payload,
    password: hashedPassword,
  };

  await updateUsersById(currentUserId, user);
};
